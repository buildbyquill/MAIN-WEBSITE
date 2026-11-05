# Quill Labs Responsive Design Documentation

## 1. Breakpoints and Layout System

### Breakpoint System
The website uses a mobile-first responsive design system with the following breakpoints:

| Breakpoint | Class Prefix | Typical Viewport | Layout Changes |
|------------|--------------|------------------|----------------|
| **Mobile** | Base (no prefix) | ≤ 767px | Stacked layouts and mobile navigation drawer |
| **Tablet** | `md` | 768px - 1023px | Responsive grids and mobile navigation drawer |
| **Desktop** | `lg` | ≥ 1024px | Full navigation and multi-column layouts |

### Container Strategy
- **Main Container**: `max-w-7xl` (1536px) with horizontal centering
- **Section Padding**: 
  - `p-6` (24px) for standard sections
  - `p-8` (32px) for major sections
  - `p-12` (48px) for hero and key sections
- **Grid System**: 12-column CSS grid with consistent gutters

### Layout Patterns
1. **Hero Section**: Full-width dark background with centered content
2. **Stats Band**: 4-column grid on desktop, 1-column on mobile
3. **Offer Sections**: 3-column desktop layout, 1-2 column on smaller screens
4. **Portfolio Grid**: 
   - 1 column (mobile)
   - 2 columns (tablet)
   - 3 columns (desktop)
5. **FAQ Section**: Consistent card layout across all breakpoints

### Responsive Typography
- Text scales proportionally with viewport size
- Page hero headings use a fluid `clamp()` scale to avoid abrupt jumps at breakpoints
- Other headings use relative units (`text-2xl`, `text-3xl`, etc.)
- Paragraph text maintains readability with appropriate line height

### Navigation Behavior
- **Wide desktop (≥1200px)**: Full horizontal menu with an accessible Offers dropdown
- **Tablet and mobile (<1200px)**: Categorized navigation drawer with a 44px menu control

## 2. Grid System Implementation

### Basic Grid Structure
```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <!-- 1 column on mobile, 3 columns on tablet+ -->
</div>
```

### Column Structure
- **Main Grid**: `grid-cols-1 md:grid-cols-3 lg:grid-cols-4` (1→3→4 columns)
- **Sub-grid**: `grid-cols-1 md:grid-cols-2` within main grid items

### Gap and Padding
- **Horizontal Gap**: `gap-6` (24px) consistently used
- **Vertical Gap**: `gap-4` or `gap-6` depending on section
- **Container Padding**: `px-4 sm:px-6 lg:px-8` for responsive side margins

### Responsive Modifiers
- **Visibility**: `hidden md:inline-block` for desktop-only elements
- **Display**: `flex`, `grid`, `block` used contextually
- **Width**: `w-full`, `max-w-[calc(100%_-32px)]` for fluid layouts

## 3. Breakpoint-Specific Design Analysis

### Mobile (≤ 767px)
- **Navigation**: Hamburger menu with a categorized drawer
- **Grids**: 1 column everywhere
- **Cards**: Full-width with generous vertical spacing
- **Typography**: Larger relative sizes for readability
- **CTAs**: Stacked vertically with ample spacing

### Tablet (768px - 1199px)
- **Navigation**: Drawer remains active through the tablet breakpoint
- **Grids**: 2 columns for offer sections, 2 columns for portfolio
- **Cards**: Increased horizontal padding, more breathing room
- **Typography**: Headings slightly larger, more prominent

### Desktop (≥ 1024px)
- **Navigation**: Full horizontal menu with click, hover and keyboard-accessible mega menu at ≥1200px
- **Grids**: 3-4 column layouts for major sections
- **Cards**: More compact with reduced vertical spacing
- **Typography**: More compact heading hierarchy
- **Whitespace**: Reduced overall spacing to maximize content density

## 4. Responsive Component Behavior

### Navigation
- **Mobile**: 
  - Menu items stack vertically
  - Subcategories appear in drawer sections
  - Clear visual hierarchy with section breaks
- **Tablet**:
  - Responsive content grids
  - Categorized drawer navigation; desktop mega menu is reserved for wide layouts (≥1200px)
- **Desktop**:
  - Full horizontal menu with dropdown mega menu at ≥1200px
  - Logo and navigation aligned with grid system

### Cards and Components
- **Mobile**: 
  - Cards stack vertically
  - Interactive controls use at least 44px touch targets
  - Modal content scrolls within the viewport when needed
- **Tablet**:
  - Cards appear in 2-column grid
  - Consistent spacing with other elements
- **Desktop**:
  - Cards appear in 3-4 column grid
  - Reduced vertical padding for denser layout

### Forms and Inputs
- **Mobile**: 
  - Full-width inputs with larger touch targets
  - Labels above or adjacent to fields
- **Tablet/Desktop**:
  - 2-column layout for multi-field forms
  - Consistent spacing and alignment

## 5. Breakpoint-Specific Design Tokens

### Color Adaptation
- **Dark Mode**: Consistent dark background (`bg-night`) across all breakpoints
- **Accent Colors**: Keep golden yellow as the primary accent, with midnight, graphite, white and muted text consistent across breakpoints
- **Contrast**: Maintains sufficient contrast ratios at all viewport sizes

### Spacing System
- **Vertical Rhythm**: Maintained through consistent use of `p-`, `pt-`, `pb-`, `mt-`, `mb-` classes
- **Horizontal Spacing**: `px-4` → `sm:px-6` → `lg:px-8` for side margins
- **Container Width**: `max-w-7xl` centered with responsive side padding

## 6. Implementation Notes

- **Mobile-First Approach**: All layouts start with single-column structure
- **Progressive Enhancement**: Desktop layouts add complexity through additional grid columns
- **Consistent Spacing**: Uses Tailwind's spacing scale consistently across all elements
- **Fluid Components**: Most components adapt gracefully without breaking
- **Touch Targets**: Form inputs and interactive elements have sufficient size for mobile touch

## 7. Key Implementation Files for Responsive Design
1. `css/style.css` - Contains all responsive classes and media queries
2. `index.html` - Primary template demonstrating responsive implementation
3. `work.html` - Portfolio section with responsive grid variations
4. `process.html` - Shows consistent grid implementation across sections
5. `tailwind.config.js` - Defines the responsive design system configuration