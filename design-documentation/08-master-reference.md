# Quill Labs Master Reference Documentation

## 1. Design Philosophy
Quill Labs is a business systems studio that engineers high-performance digital experiences and operational business systems. Our philosophy centers on delivering credible, high-converting websites paired with automated systems that streamline operations, improve customer experience, and enable business growth.

Key principles:
- **Fixed-scope delivery**: 14-day production sprints with fixed pricing
- **User ownership**: 100% code ownership with direct GitHub repository transfer
- **Operational focus**: Systems over superficial design
- **Transparency**: Clear communication and documented processes
- **Efficiency**: Eliminate operational bottlenecks for business owners

## 2. Brand Identity
### Core Values
- **Systematic**: We systemize business processes
- **Efficient**: Fixed 14-day delivery cycles
- **Credible**: Websites that look professional and trustworthy
- **Convert-focused**: Design that drives business results
- **Ownership**: Full ownership of code and systems

### Primary Brand Elements
- **Logo**: "Q" monogram with bookmark/quill icon
- **Color Palette**:
  - Obsidian Black: #080808 (primary canvas)
  - Chrome Silver: #CDCBCA (secondary text and UI)
  - Laser Crimson: #D41514 (primary accent)
  - Pure White: #F3F0F3 (primary text)
  - Graphite: #171516 (cards and secondary surfaces)
  - Gunmetal: #352E30 (raised surfaces)
  - Deep Crimson: #810E11 (accent depth)
  - Muted Grey: #8A7A7A (quiet supporting text)
- **Typography**: 
  - Display: Space Grotesk
  - Body: Manrope
  - Monospace: JetBrains Mono

## 3. Design System Summary

### Color Tokens
| Token | Value | Usage |
|-------|-------|-------|
| Obsidian Black | #080808 | Main background, hero and footer |
| Chrome Silver | #CDCBCA | Secondary text, borders and UI |
| Laser Crimson | #D41514 | Primary CTA and selective highlights |
| Pure White | #F3F0F3 | Primary text |
| Graphite | #171516 | Cards, forms and secondary surfaces |
| Gunmetal | #352E30 | Raised surfaces |
| Deep Crimson | #810E11 | Accent depth |
| Muted Grey | #8A7A7A | Quiet supporting text |

### Typography
| Element | Font | Size | Weight |
|---------|------|-------|--------|
| H1 | Space Grotesk | 4.5rem (72px) | 800 |
| H2 | Space Grotesk | 3rem (48px) | 700 |
| H3 | Space Grotesk | 2.25rem (36px) | 700 |
| Body | Manrope | 1.125rem (18px) | 400 |
| Monospace | JetBrains Mono | 1rem (16px) | 500 |

### Spacing Scale
- `p-6` (24px): Standard section padding
- `p-8` (32px): Major sections
- `p-12` (48px): Hero sections
- `gap-6` (24px): Grid gutters
- `gap-4` (16px): Sub-grid spacing

## 4. Component Conventions

### Buttons
- Primary: Rounded corners, brand color background, white text, glow effect
- Glass: Transparent with blur, white text, subtle border
- Icon: Minimal size, consistent with brand colors

### Cards
- Rounded corners (rounded-2xl)
- Consistent border styling
- Shadow effects for depth
- Hover state variations

### Forms
- Consistent input styling with rounded corners
- Clear focus states with brand color ring
- Proper spacing between form elements

### Modals
- Centered with obsidian backdrop
- Graphite content area with chrome border
- Close button in top-right
- Form validation and success states

## 4. Key Implementation Files

### Core Files
1. **css/style.css** - Design system definition, CSS variables, component styles
2. **js/main.js** - Interactive behavior and DOM manipulation
3. **index.html** - Primary template demonstrating full implementation
4. **tailwind.config.js** - Design system configuration (color, spacing, fonts)

### Key Component Files
- **Header**: Fixed navigation with mega menu
- **Card**: Reusable component for content display
- **Modal**: Standardized modal dialog implementation
- **Scratch Canvas**: Custom interactive canvas component
- **Filter Tabs**: Dynamic filtering with smooth animations

## 5. Rules for Modifying the Website

### General Rules
1. **Follow Design System**: Always reference `01-design-system.md` for color, spacing, and typography
2. **Maintain Consistency**: Follow component conventions from `02-component-library.md`
3. **Responsive First**: Test all changes across mobile, tablet, and desktop breakpoints
4. **Accessibility**: Ensure all interactive elements are keyboard accessible and have proper ARIA attributes
5. **Performance**: Optimize animations and heavy components for performance

### Specific Guidelines
- **Color**: Use design system colors; do not create new colors without review
- **Typography**: Use only defined font families and sizes
- **Spacing**: Use Tailwind spacing scale classes; avoid custom values
- **Components**: Build new components following established patterns
- **Testing**: Test all changes across all major breakpoints and devices

### Prohibited Practices
- Creating new colors without design system approval
- Using custom font sizes or non-standard typography
- Creating inconsistent card or button styles
- Adding JavaScript functionality without following existing patterns
- Breaking responsive behavior

## 6. Important Files to Understand Before Modifying

1. **01-design-system.md** - Complete color, typography, and spacing system
2. **02-component-library.md** - Component usage patterns and conventions
3. **03-page-audit.md** - Page-by-page design implementation reference
4. **04-responsive-design.md** - Breakpoint and layout guidelines
5. **05-interactions-and-animations.md** - Interaction patterns and animation standards
6. **06-frontend-architecture.md** - Technical implementation understanding
7. **08-master-reference.md** - This consolidated reference document

## 7. Quick Reference Summary

### Brand Identity
- **Colors**: Obsidian #080808, Chrome #CDCBCA, Laser Crimson #D41514, Pure White #F3F0F3, Graphite #171516, Gunmetal #352E30, Deep Crimson #810E11, Muted Grey #8A7A7A
- **Fonts**: Space Grotesk (display), Manrope (body), JetBrains Mono (monospace)
- **Spacing**: Consistent scale from p-4 to p-12

### Key Implementation
- **Core**: style.css + main.js + index.html
- **Components**: Header, Cards, Forms, Modals, Navigation
- **Interactions**: Scratch canvas, filter tabs, FAQ accordion, estimator calculator

## 8. Critical Files for Understanding Before Changes

1. **css/style.css** - Core design system and component styles
2. **js/main.js** - Interactive behavior implementation
3. **index.html** - Primary template showing full design system
4. **tailwind.config.js** - Design system configuration (color, spacing, fonts)

**Always consult these files before making changes to ensure consistency with the established design system.**