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
  - Warm Ivory: #F2EBDD (primary canvas)
  - Charcoal: #252321 (typography and dark sections)
  - Deep Burgundy: #722F37 (primary brand accent)
  - Scarlet Red: #E9241A (secondary highlight)
  - Soft Sand: #D8C9AE (supporting neutral surface)
- **Typography**: 
  - Display: Bricolage Grotesque
  - Body: DM Sans
  - Monospace: JetBrains Mono

## 3. Design System Summary

### Color Tokens
| Token | Value | Usage |
|-------|-------|-------|
| Warm Ivory | #F2EBDD | Main background and light sections |
| Charcoal | #252321 | Typography, dark sections and footer |
| Deep Burgundy | #722F37 | Buttons, links and active states |
| Scarlet Red | #E9241A | Selective highlights |
| Soft Sand | #D8C9AE | Supporting and alternating surfaces |
| Burgundy Tint | #ECE0D4 | Soft accent surfaces |
| Dark Card | #302D29 | Cards on charcoal sections |

### Typography
| Element | Font | Size | Weight |
|---------|------|-------|--------|
| H1 | Bricolage Grotesque | 4.5rem (72px) | 800 |
| H2 | Bricolage Grotesque | 3rem (48px) | 700 |
| H3 | Bricolage Grotesque | 2.25rem (36px) | 700 |
| Body | DM Sans | 1.125rem (18px) | 400 |
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
- Centered with dark backdrop
- White content area with border
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
- **Colors**: Warm Ivory #F2EBDD, Charcoal #252321, Deep Burgundy #722F37, Scarlet Red #E9241A, Soft Sand #D8C9AE
- **Fonts**: Bricolage Grotesque (display), DM Sans (body), JetBrains Mono (monospace)
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