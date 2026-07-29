---
name: Cognitive Analytics Interface
colors:
  surface: '#f8f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f8f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#47464e'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#78767f'
  outline-variant: '#c8c5cf'
  surface-tint: '#5c5a82'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#18173b'
  on-primary-container: '#8280aa'
  inverse-primary: '#c5c2f0'
  secondary: '#00677f'
  on-secondary: '#ffffff'
  secondary-container: '#00d2ff'
  on-secondary-container: '#00566a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#301406'
  on-tertiary-container: '#a87966'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c5c2f0'
  on-primary-fixed: '#18173b'
  on-primary-fixed-variant: '#444369'
  secondary-fixed: '#b6ebff'
  secondary-fixed-dim: '#47d6ff'
  on-secondary-fixed: '#001f28'
  on-secondary-fixed-variant: '#004e60'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#f0bba5'
  on-tertiary-fixed: '#301406'
  on-tertiary-fixed-variant: '#633e2d'
  background: '#f8f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
  data-pink: '#FF4D97'
  data-purple: '#8E44AD'
  surface-deep: '#08062B'
  border-subtle: '#E2E8F0'
typography:
  headline-lg:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-mono:
    fontFamily: Geist Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-caps:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 48px
  margin-mobile: 16px
  max-width: 1440px
---

## Brand & Style
The design system is engineered for high-velocity data exploration and complex analytical workflows. It prioritizes "search-first" intelligence, positioning the interface as a powerful, invisible partner to the user's curiosity. 

The aesthetic is **Corporate Modern with a Technical Edge**, leaning into the precision of developer-centric tools while maintaining the approachability required for business intelligence. It utilizes deep high-contrast foundations to make vibrant data visualizations pop. The environment should feel expansive, low-friction, and exceptionally responsive, evoking a sense of clarity and "instant answers."

## Colors
The palette is anchored by a deep navy (`#08062B`) which provides a premium, stable foundation for navigation and structural elements. The primary action color is a vibrant electric blue (`#00D2FF`), used strategically to highlight "Search" and primary call-to-actions.

For data visualization, a secondary "Data Pink" is introduced to provide high-contrast differentiation in charts and graphs. The neutral background is kept extremely clean to ensure maximum legibility for dense data tables and complex dashboards.

## Typography
This design system utilizes the **Geist** family to achieve a technical, precise appearance. 
- **Geist (Sans):** Used for all primary interface elements, headings, and body copy to maintain a clean, modern feel.
- **Geist Mono:** Reserved for technical metadata, data values in tables, and breadcrumbs to emphasize the system's analytical DNA.

Type hierarchy is strict; we use tight tracking on large headings and increased letter-spacing on mono labels to ensure maximum legibility at small scales.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid** model. Dashboards and data grids are fluid to maximize screen real estate, while content pages conform to a 12-column grid with a 1440px max-width.

A 4px baseline grid ensures vertical rhythm. Data-heavy views (tables/grids) should utilize a "Compact" spacing mode (8px padding), while marketing and high-level overview pages use "Comfortable" spacing (24px+).
- **Desktop:** 12 columns, 24px gutters, 48px margins.
- **Tablet:** 8 columns, 16px gutters, 24px margins.
- **Mobile:** 4 columns, 16px gutters, 16px margins.

## Elevation & Depth
Hierarchy is primarily established through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows.
- **Level 0 (Background):** Solid `#FFFFFF` or `#F4F6F8`.
- **Level 1 (Cards/Surface):** White background with a 1px border (`#E2E8F0`).
- **Level 2 (Interaction):** Very soft, diffused ambient shadow (0px 4px 20px rgba(8, 6, 43, 0.04)) used only for active states or floating modals.
- **Search Bar:** Special elevation level with a slight glow effect using the secondary blue (`#00D2FF`) when focused to signal high priority.

## Shapes
The shape language is **Soft and Precise**. A consistent 4px (Soft) radius is applied to most UI components to balance professional rigidity with modern approachability. 

Large dashboard containers and main search inputs may use up to 8px (rounded-lg) to soften the interface's focal points. Circularity is reserved strictly for status indicators and user avatars.

## Components
- **Search Bar:** The "hero" component. Centered, large height (56px+), utilizing Geist Mono for placeholder text to suggest query precision.
- **Buttons:** Primary buttons use the deep navy (`#08062B`) with white text. Ghost buttons use `#00D2FF` for icons and labels to maintain light weight.
- **Data Chips:** Small, 4px rounded tags with light tinted backgrounds and dark text (e.g., light blue background with navy text) for active filters.
- **Inputs:** Crisp 1px borders. On focus, the border transitions to the primary blue with a 2px outer "halo" of 10% opacity blue.
- **Cards:** Minimalist. No shadows by default; separation is achieved via the `#E2E8F0` border. Titles are always `headline-md` or `body-sm-bold`.
- **KPI Tiles:** Large numeric values in Geist Mono, paired with a small trend sparkline and percentage indicator.