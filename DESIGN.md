---
name: Rosemale-John — Personal Engineering Portfolio
description: A restrained personal workboard with a photo-led profile, clear project cards, and readable career history.
colors:
  paper: "#f5f5f3"
  surface: "#eeeff1"
  card: "#ffffff"
  ink: "#272a30"
  ink-soft: "#50565f"
  muted: "#626871"
  line: "#dfe1e2"
  line-strong: "#bcc1c7"
  accent: "#405677"
  accent-hover: "#30435f"
  on-accent: "#ffffff"
  contact: "#272a30"
  on-contact: "#ffffff"
  on-contact-soft: "#d9dce0"
typography:
  body: "Geist, sans-serif"
  quote: "Source Serif 4, Georgia, serif"
  utility: "ui-monospace, SFMono-Regular, Consolas, monospace"
  body-size: "16px"
  intro-size: "18px desktop; 16px mobile"
  supporting-size: "13–14px"
  headline-size: "clamp(1.75rem, 2.8vw, 2.25rem)"
  section-heading-size: "clamp(1.75rem, 2.5vw, 2.125rem)"
---

## Direction

A personal workboard for clients and hiring teams. Character comes from real photography, product marks, varied composition, and restrained interactions. Surfaces are neutral white and gray, with charcoal text and one muted blue accent for actions. Product cards all use the same surface. Colors within authentic logos and photography retain their original meaning.

## Layout

The shared shell caps at 1440px. A 280px profile rail sits beside the content, reducing to 240px below 1200px. A straight, framed 176px portrait anchors the desktop profile. Navigation, location, contact, and social links stay reachable. Below 900px, the rail becomes a compact masthead with a 56px portrait, reducing to 44px below 541px. On desktop heights below 701px, the profile stops sticking so all content remains reachable.

The reading column caps at 1080px including padding. Desktop inset is 40px; tablet 32px; phone 24px. Main content uses an open introduction, compact section anchors, and varied reading layouts rather than a repeated card grid. The introduction states the engineering role, current employer, and experience. Page headings remain plain and modest. No abbreviated tools strip appears in the introduction.

## Main content: inside the work

Selected products are explored through `ProjectExplorer`. Desktop uses a product list beside one contextual detail panel; phones below 701px use a labelled native select. Selection changes purpose, actual contribution, engineering focus, technologies, and public destination together. Buttons expose pressed state and remain keyboard-operable; a polite status region announces the selected project without moving focus. The direct external links remain in the desktop product list, and the active project always has an explicit Open project link. The full server-rendered archive remains reachable for all 13 projects. Archive entries also render category, role, contribution, focus, and platform context from the same projectStories source wherever notes are available, so featured products carry the same detail on both pages. Keep unsourced projects limited to their verified summaries and technologies.

Stories in `app/data/project-stories.ts` use the supplied resume and existing project data. Keep product purpose distinct from individual contribution. The Move With Us 300K+ monthly active user figure describes platform scale. No screenshots, ownership claims, or outcomes are invented.

A short two-column background section leads into native career disclosures. Appetiser starts expanded; older roles can be opened independently. Preserve all resume-based highlights, initiatives, dates, locations, and the prior Cloudology entry. The full toolkit uses horizontal category rows on desktop and stacks on phones. Recommendation wording stays verbatim. A compact charcoal contact section closes the page.

New main-specific styling lives in `app/overview.css`. The approved sidebar components, shared shell dimensions, and sidebar CSS remain unchanged.

## Type and accessibility

Plain sans-serif page titles stay at 28–36px with natural wrapping. Serif type is reserved for the recommendation. Body copy is at least 16px with comfortable 1.7–1.85 line height. Supporting labels are 13–14px; technology lists are 14px. Long content wraps. Focus rings are visible, including a white ring inside contact. The skip link focuses main. Decorative icons and product logos are hidden from assistive technology. Contact remains available through the shared header.

## Motion

The open introduction and changed project panel have short 3px entrance transitions. Selection state updates immediately and does not depend on animation completion. Native career controls rotate a decorative plus into a close mark. Career entries, nested engineering initiatives, and full recommendations smoothly expand over 260ms and collapse over 200ms using native details-content transitions. Browsers without intrinsic-size interpolation retain a short opening fade. Native details state and keyboard behavior stay in charge; no timers or animation-completion callbacks govern correctness. Shared action arrows and button press feedback retain the established subtle motion. All movement is opt-in through the no-preference media query and disabled for reduced motion. No continuous animation or content hidden awaiting scroll.

## Content rules

Preserve real career facts, project descriptions, destinations, technology names, and recommendations. Keep current employer aligned with the supplied resume. Avoid invented metrics, product screenshots, or credentials. Reuse the existing framework, fonts, and assets; no extra dependencies are needed.
