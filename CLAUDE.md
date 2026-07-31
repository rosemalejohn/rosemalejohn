# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **pnpm** (see `pnpm-lock.yaml`).

```bash
pnpm dev                                   # dev server on :3000
pnpm build                                 # production build
pnpm lint                                  # biome check . (lint + format + import sort, read-only)
pnpm format                                # biome check --write . (applies safe fixes)
pnpm test                                  # vitest in watch mode
pnpm vitest run                            # single non-watch run (use this in CI/agent contexts)
pnpm vitest run __tests__/page.test.tsx     # one file
pnpm vitest run -t "home page should have social links"  # one test by name
```

`.npmrc` sets `public-hoist-pattern[]=*@nextui-org/*` — NextUI's Tailwind theme lives at
`node_modules/@nextui-org/theme` and must stay hoisted for `tailwind.config.ts`'s content glob to
resolve. Don't remove it when touching pnpm config.

Linting and formatting are both **Biome** (`biome.json`) — ESLint and `eslint-config-next` were
removed, so there is no `eslint.config.mjs` and no separate Prettier. `linter.domains` enables the
`next`, `react` and `test` rule sets, which is what replaces `eslint-config-next/core-web-vitals`.
Two rules are off deliberately: `suspicious/noUnknownAtRules` (Tailwind's `@tailwind`/`@layer`
directives in `app/globals.css` are not standard CSS) and `a11y/noSvgWithoutTitle` (the
`app/components/icons/` set is decorative — labelling happens on the `Tooltip` in `TechStackIcon`).
`files.includes` excludes `public/**` and `*.svg` so raw assets aren't linted as source. `biome check`
also sorts imports, so expect import reordering on write. TypeScript is pinned to `5.x`; TS 7 is a
separate migration, not required by Next 16.

## Architecture

Personal portfolio site: Next.js 16 App Router (Turbopack, React 19) + TypeScript, NextUI (component
lib) on Tailwind, `next-themes` for dark mode, deployed on Vercel (`@vercel/analytics` mounted in
`app/layout.tsx`).
There is no backend, no API routes, no CMS and no data fetching — **all content is hardcoded as
typed arrays inside the components that render it**:

| Content | Lives in |
| --- | --- |
| Social links | `app/page.tsx` (`socials`) |
| Work history | `app/components/Work.tsx` (`works`) |
| Nav items | `app/components/Header.tsx` and `app/components/Footer.tsx` (`navigations`) |
| Projects | `app/projects/components/ProjectList.tsx` (`projects`) |

Shared shapes are in `app/types/` (`Project`, `NavigationItem`). Images are referenced by
root-relative path and live in `public/`.

**Layout shell.** `app/layout.tsx` renders the fixed centered card background, `Header`, `main`,
and `Footer`; pages only render their inner content. Page content repeats the
`sm:px-8` → `max-w-7xl` → `px-4 sm:px-8 lg:px-12` → `max-w-2xl lg:max-w-5xl` nesting to line up with
that shell — copy the wrapper chain from an existing page rather than inventing spacing.

**Server vs client components.** Everything is a Server Component by default. NextUI components
(`Button`, `Image`, `Tooltip`, `Avatar`, `Dropdown`) and hooks like `useRouter`/`useTheme` force
`"use client"` — see `Work.tsx`, `ProjectItem.tsx`, `TechStackIcon.tsx`, `ThemeSelector.tsx`,
`providers.tsx`. `Header` itself stays a server component by delegating the interactive bits to
`ThemeSelector`, `HeaderDropdownMenu` and `HeaderAvatar`.

Under Next 16 this is a **hard build failure**, not a style preference: importing anything from
`@nextui-org/*` in a file without `"use client"` pulls NextUI's `react-aria` dependency into the RSC
graph, where React resolves under the `react-server` condition and has no `createContext`. The build
dies with `TypeError: i.default.createContext is not a function` during "Collecting page data",
pointing at a bundle offset rather than your file. If you see that, look for a server component
importing NextUI — that is what `HeaderAvatar.tsx` exists to avoid.

**React Compiler** is on (`reactCompiler: true` in `next.config.mjs`, powered by the
`babel-plugin-react-compiler` devDependency). It auto-memoizes components, so don't add `useMemo`/
`useCallback`/`React.memo` for performance by reflex. It runs through Babel, so builds are slightly
slower than plain SWC.

**Theming.** `app/providers.tsx` wraps `NextUIProvider` + `ThemeProvider attribute="class"` with
`defaultTheme="dark"`; `tailwind.config.ts` uses `darkMode: "class"`. Every styled element carries an
explicit `dark:` variant — follow that, there is no semantic color token layer. `<html>` in
`app/layout.tsx` needs `suppressHydrationWarning` because next-themes writes `class`/`style` onto it
before hydration; React 19 reports that as a hydration error otherwise.

**Tech-stack icons.** `Project.stack` is a list of string keys resolved by
`app/components/TechStackIcon.tsx`, which holds **two** parallel maps (component + tooltip label).
Adding a stack key means adding an SVG component under `app/components/icons/` and an entry in
*both* maps; an unknown key silently renders nothing.

Path alias: `@/*` → repo root (e.g. `@/app/types/Project`). Both `@/…` and relative imports are used
in existing code.

## Tests

Vitest + React Testing Library in `jsdom`, no setup file — so **jest-dom matchers are unavailable**;
existing tests assert with `toBeDefined()`, `toHaveProperty()`, `not.toBeNull()`. Tests live in
`__tests__/` mirroring `app/`. Client-only children are `vi.mock`ed out of server-component tests
(`Work` in `page.test.tsx`, `ThemeSelector`/`HeaderDropdownMenu` in `Header.test.tsx`) because they
depend on `next/navigation` and `next-themes`; keep that pattern and add `data-testid` to the real
component when a test needs to find it. The `e2e/` directory exists but is empty — no e2e runner is
configured.

Config lives in `vitest.config.mts` — the `.mts` extension is deliberate, so Vite's native config
loader reads it as ESM instead of warning about ESM syntax in a CommonJS file.

Source files are indented with **tabs** despite `.editorconfig` declaring spaces. Biome's formatter
(`indentStyle: "tab"`) is the source of truth here and now enforces it across JSON and CSS too, so
run `pnpm format` rather than hand-matching indentation.
