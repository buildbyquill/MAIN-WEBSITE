# Quill Labs Component Library Documentation

## Navigation Components

### Main Header Navigation
- **File**: `components/header.js` (or similar)
- **Description**: Fixed position header with logo, navigation menu, and offers mega menu
- **Key Features**:
  - Fixed position with `top-5` and `z-50`
  - Logo with group hover effect
  - Offers mega menu with grid layout
  - Mobile responsive drawer
  - Shadow-pill-glow effect

### Mobile Navigation Drawer
- **File**: `components/mobile-nav.js`
- **Description**: Slide-in drawer for mobile navigation
- **Features**:
  - Hidden by default (`hidden md:hidden`)
  - Backdrop blur effect
  - Multiple sections for different offer categories
  - Clear visual hierarchy with section breaks

## Button Components

### Primary Button
- **Class**: `btn-primary-glow`
- **Background**: Golden Yellow (`#FFC900`)
- **Text**: Midnight Black (`#08090B`)
- **Hover**: Slight brightness increase and subtle lift
- **Active**: Translates slightly up and down

### Glass Button
- **Class**: `btn-glass-subtle`
- **Background**: `rgba(245, 243, 239, 0.08)`
- **Border**: 1px solid `rgba(165, 165, 165, 0.16)`
- **Backdrop Filter**: `blur(12px)`
- **Hover**: Increases opacity and border color

### Icon Button
- Used for toggle buttons and small interactive elements
- Rounded square shape with appropriate icon

## Card Components

### Standard Card
- **Classes**: `bg-night-card`, `border`, `rounded-2xl`, `shadow-brutal`
- **Background**: Graphite (`#111317`) with a subtle dark border
- **Shadow**: Strong shadow with inset element
- **Padding**: Generous padding for content

### Glass Card
- **Classes**: `bg-gradient-to-br`, `bg-night-card`
- **Effect**: Gradient background with card-like appearance
- **Border**: Subtle white border

### Interactive Card
- **Classes**: `group`, gold hover detail, `hover:-translate-y-1.5`
- **Features**: Restrained gold hover outline with slight elevation

## Form Components

### Input Field
- **Classes**: `rounded-xl`, `border-2`, `border-ink`, `focus:ring-2`, `focus:ring-brand`
- **Surface**: Graphite (`#111317`) with a subtle dark border
- **Focus**: 2px ring with brand color
- **Padding**: Consistent spacing

### Select Field
- **Classes**: Similar to input with additional `bg-white` background
- **Options**: Clear visual distinction with padding

### Textarea
- **Classes**: Same as input with larger height
- **Placeholder**: Clear instructions

## Modal Components

### Project Modal
- **File**: `components/modal.js`
- **Description**: Centered graphite modal with an obsidian overlay
- **Features**:
  - Dark backdrop with blur effect
  - Graphite content area with a subtle dark border
  - Close button with a restrained gold accent
  - Success message area
  - Form submission handling

## Interactive Elements

### Scratch Canvas
- **File**: Custom implementation in `js/main.js`
- **Description**: Canvas-based scratch card with particle effects
- **Key Features**:
  - Particle shavings when scratching
  - Percentage progress indicator
  - Reveal functionality with animation
  - 100% unlock triggers bonus content

### Filter Tabs
- **Classes**: `port-tab`, `work-tab`
- **Behavior**: Active tab has brand background, others have white
- **Animation**: Fade-in effect when items become visible

## Footer Components

### Main Footer
- **Background**: Obsidian (`#08090B`)
- **Text**: Muted Text (`#A5A5A5`)
- **Links**: Hover states with color transitions
- **Layout**: Flexible with gap spacing

## Design System Implementation

All components follow the design system defined in `01-design-system.md` with:
- Consistent color usage through CSS variables
- Typography following the defined scale
- Spacing following the established scale
- Shadows and borders following the defined tokens

## Implementation Notes

- All components use Tailwind CSS classes for styling
- Design consistency maintained through shared CSS variables
- Responsive behavior implemented via Tailwind's responsive classes
- Animation effects use Tailwind's transition classes
- Component reuse is encouraged across the site

**Note**: For exact file locations, consult the project structure in the repository.