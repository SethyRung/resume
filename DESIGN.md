---
name: Sethy Rung Resume Studio
colors:
  surface: "#fbf8ff"
  surface-dim: "#dad9e4"
  surface-bright: "#fbf8ff"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f4f2fe"
  surface-container: "#eeedf8"
  surface-container-high: "#e8e7f2"
  surface-container-highest: "#e2e1ed"
  on-surface: "#1a1b23"
  on-surface-variant: "#444654"
  inverse-surface: "#2f3038"
  inverse-on-surface: "#f1effb"
  outline: "#747686"
  outline-variant: "#c4c5d7"
  surface-tint: "#2d51d6"
  primary: "#0638c1"
  on-primary: "#ffffff"
  primary-container: "#3154d9"
  on-primary-container: "#d6dbff"
  inverse-primary: "#b8c3ff"
  secondary: "#595e69"
  on-secondary: "#ffffff"
  secondary-container: "#d8dde9"
  on-secondary-container: "#5c616b"
  tertiary: "#812f00"
  on-tertiary: "#ffffff"
  tertiary-container: "#a84000"
  on-tertiary-container: "#ffd4c3"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#dde1ff"
  primary-fixed-dim: "#b8c3ff"
  on-primary-fixed: "#001355"
  on-primary-fixed-variant: "#0035bd"
  secondary-fixed: "#dee2ee"
  secondary-fixed-dim: "#c2c6d2"
  on-secondary-fixed: "#171c24"
  on-secondary-fixed-variant: "#424751"
  tertiary-fixed: "#ffdbcd"
  tertiary-fixed-dim: "#ffb596"
  on-tertiary-fixed: "#360f00"
  on-tertiary-fixed-variant: "#7d2d00"
  background: "#fbf8ff"
  on-background: "#1a1b23"
  surface-variant: "#e2e1ed"
  canvas: "#F1F0EC"
  paper: "#FFFFFF"
  ink: "#191B20"
  structural-border: "#D9DBD8"
  dark-studio-panel: "#20242E"
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: "700"
    lineHeight: "1.2"
  headline-lg:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: "600"
    lineHeight: "1.3"
  headline-md:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: "600"
    lineHeight: "1.4"
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: "400"
    lineHeight: "1.5"
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: "400"
    lineHeight: "1.5"
  metadata:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: "400"
    lineHeight: "1.4"
  resume-name:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: "700"
    lineHeight: "1.2"
  resume-role:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: "500"
    lineHeight: "1.4"
  resume-heading:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: "600"
    lineHeight: "1.3"
  resume-body:
    fontFamily: Geist
    fontSize: 10.5px
    fontWeight: "400"
    lineHeight: "1.45"
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 32px
  margin: 24px
  space-xs: 4px
  space-sm: 8px
  space-md: 16px
  space-lg: 24px
  space-xl: 32px
---

# Sethy Rung — Resume Studio

## Intent and materiality

A personal resume viewer, not a resume editor or SaaS dashboard. Bold contemporary art direction: a precise digital document studio surrounding calm, highly readable paper. Preserve all facts from the live Vue resume components. Two templates: Modern and Classic. The only essential actions are switching templates and downloading the selected resume as PDF. No invented account, analytics, AI editor, employment claims, or availability status.

## Color palette and material tokens

- Canvas: #F1F0EC, warm neutral workspace.
- Paper: #FFFFFF, never a dark resume page.
- Ink: #191B20, high-contrast text.
- Secondary ink: #545963; never faint gray body copy.
- Structural border: #D9DBD8.
- Accent: #3154D9, saturated cobalt for primary action, active template, and restrained Modern headings.
- Dark studio panel: #20242E; use for website chrome only, not large printed fills.
- Classic accent: ink with subtle cobalt rules, professional in grayscale.
- Modest 6–10px UI radii; paper remains square. No gradients, glass, decorative blobs, or gratuitous pills.

## Typography and budget

Geist or a close grotesk sans-serif for website and Modern. Classic may use an editorial serif for the name and headings with sans-serif body. Monospace only for small document metadata and page numbers.
Website: display 40–48px, heading 24px, section 18px, body 14–16px, metadata 12px. Resume at true A4 scale: name 30–36pt, role 13–15pt, headings 10–11pt, body 10–11pt with 1.4–1.5 line height. Never shrink body below 10pt to force a fit.

## Spatial layout and grid

Desktop studio: 1280px viewport, 72px top navigation, 256–288px template sidebar, generous centered preview workspace. 8px rhythm, 24px panel padding, 32px main gutters. Compact two-option template chooser with genuine thumbnail previews, clear active state, and concise descriptions. A4 document preview, not fake editable fields. Keep both pages accessible through scrolling; optional unobtrusive page navigation belongs outside the document.
Modern: two A4 portrait pages, 210 × 297mm each, 14–16mm safe insets, 30/70 sidebar/main grid. Small existing illustrated portrait, not a giant hero image. Strong typographic name block, crisp rules, dates aligned consistently. Page 2 repeats identity/footer and carries achievements and projects. Do not invent content to fill whitespace.
Classic: two A4 portrait pages with 14–16mm safe insets. Mostly single-column editorial main flow, compact contact header, light secondary skill/education column permitted. No skill proficiency bars, experience pills, dense badge clouds, or heavy ink sidebar. Preserve explicit language levels in plain text. Page 2 contains strengths, focus areas, training, and achievements.

## Content and print constraints

Use exact contact values, dates, employers, roles, education, skills, project names, and training from the imported references and original source content supplied with edit prompts. Do not rewrite Junior Frontend Developer as Senior. Do not invent metrics or contact details. Keep Modern and Classic content sets distinct: Modern has Recall and Movies projects; Classic has languages, training, strengths, and focus areas. Both currently have two pages. Show both pages in the resume design screens with a clear external gap; each sheet keeps an A4 aspect ratio. Website controls never appear within printable sheets. Content stays selectable text, not a flattened resume screenshot. No arbitrary photograph replacement.

## Responsive and accessible behavior

On narrow screens the website stacks template selection over a fit-to-width document preview, preserving Download PDF access. Selected templates have text and border differentiation, not color alone. Controls have visible keyboard focus and clear labels. Documents retain their A4 layout when printed; screen scaling is external to the paper. Keep body text high contrast and links recognizable.
