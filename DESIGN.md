---
name: Rosemale-John Portfolio
description: Personal engineering portfolio with an editorial voice and direct product evidence.
colors:
  paper: "#f7f8f2"
  surface: "#edf0e7"
  ink: "#21392e"
  ink-soft: "#45574b"
  muted: "#657064"
  line: "#d9dfd3"
  line-strong: "#aab7a6"
  accent: "#2b5940"
  on-accent: "#ffffff"
  deep: "#203b2e"
  on-deep: "#f7f8f2"
  on-deep-muted: "#c1cec1"
typography:
  display:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(3rem, 5.6vw, 4.8rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(2rem, 3.3vw, 2.9rem)"
    fontWeight: 400
    lineHeight: 1.18
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Geist, sans-serif"
    fontSize: "17px"
    lineHeight: 1.8
  label:
    fontFamily: "Geist, sans-serif"
    fontSize: "12px"
rounded:
  portrait: "3px"
  control: "4px"
  logo: "8px"
spacing:
  small: "12px"
  medium: "24px"
  section: "86px"
  section-mobile: "56px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.control}"
    padding: "16px 21px"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
---

## Overview

**Creative North Star: "The Personal Editorial Profile"**

A professional introduction supported by actual products and career history. Large serif headlines establish identity; quiet sans-serif text makes project details easy to scan. Existing photography brings the person into the portfolio.

**Key Characteristics:**
- Forest text and pale ivory surfaces.
- Real portrait and product marks.
- Open layouts with restrained rules.
- Direct work and contact links.

## Colors

CSS custom properties in `app/globals.css` own the palette. Paper is the default background; surface distinguishes the About section. Deep owns the contact region with on-deep foregrounds. Project artwork uses product-specific muted backgrounds: music `#e9d8cf`, tennis `#e0e7d4`.

## Typography

Source Serif 4 supplies display headings and the recommendation. Geist supplies body, navigation, project titles, dates, and technology lists. Fonts load through next/font. Italics emphasize selected heading phrases. Body text ranges from 14–17px; supporting labels are 11–13px. Headlines use balanced wrapping. Mobile hero lettering adjusts to available width.

## Layout

The shared container caps at 1280px, including horizontal padding of 24px, 40px at 640px, and 64px at 1024px. Desktop hero uses a flexible text column and a 340px portrait column; the portrait becomes 280px below 1024px. At 760px, hero, featured work, About, experience rows, and contact stack. Tool groups remain two columns until 380px. Sections use 86px vertical padding, reducing to 56px on mobile.

## Elevation & Depth

Flat surfaces and tonal sections establish hierarchy. No component shadows. Thin separators organize project and experience lists.

## Shapes

Portrait corners are 3px; primary controls and artwork panels 4px; small product logos 8px. Small availability dots use circles. Portrait retains its photographic setting.

## Components

Primary links are forest-filled rectangles with a 20px authored SVG arrow. Hover changes background to accent. Secondary links pair text and the same SVG arrow. Navigation uses direct links with at least 44px height. Project artwork lifts and rotates its existing icon on hover or keyboard focus; reduced motion removes transitions. Project lists use real logos, descriptive text, technology names, and explicit destinations. Native details/summary reveals the full unchanged recommendation. Focus rings are 2px with a 5px offset, white inside contact. Selection and scrollbar colors follow the palette.

## Do's and Don'ts

- Do preserve authentic project descriptions, URLs, and recommendation wording.
- Do use existing images at appropriate sizes.
- Do keep body text and action links legible across breakpoints.
- Don't invent impact metrics or case-study claims.
- Don't add ornamental technology diagrams or competing card systems.
