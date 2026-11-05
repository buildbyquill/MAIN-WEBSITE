# Quill Labs Page-by-Page Audit

> Historical pre-redesign audit. Page-specific palette and visual notes below describe the previous implementation; see `01-design-system.md` and `02-component-library.md` for current design tokens and components.

## 1. Homepage / Hero Section

**Location**: Index.html (above the fold)

### Layout Structure
- Full-width dark background with `--bg-night` color
- Centered content with max-width constraints
- Hero section uses `relative` positioning with `overflow-hidden`
- Uses `grid` layout for multi-column content

### Visual Elements
- **Background**: `bg-night` with `bg-dark-grid` pattern
- **Glow Effect**: `glow-bloom-night` class for atmospheric glow
- **Content**: Centered with `max-w-7xl` constraint
- **Typography**: 
  - H1: `text-4xl sm:text-6xl lg:text-7xl` (4.5rem to 5.625rem)
  - Paragraph: `text-lg sm:text-xl` (1.125rem to 1.875rem)
- **CTA Buttons**: 
  - Primary: burgundy button with warm-ivory text
  - Secondary: restrained neutral surface with a burnt-orange arrow

### Interactive Elements
- **Scratch Card**: Canvas-based interactive element with particle effects
- **Confetti**: Particle system with multiple colors and animation

### Color Usage
- **Primary**: Deep burgundy (`#722F37`) for CTA buttons
- **Secondary**: Mint green for accent elements
- **Background**: Warm ivory (`#F2EBDD`) with a restrained burgundy grid pattern

## 2. Stats Band Section

**Location**: Index.html (below hero)

### Layout Structure
- `bg-[#090E1A]` background
- 4-column grid layout on desktop
- Each statistic in its own card with hover effects

### Visual Elements
- **Cards**: Rounded corners (`rounded-2xl`), subtle borders, hover effects
- **Typography**:
  - Numbers: `text-3xl sm:text-4xl` (2.25rem to 3.25rem)
  - Labels: `text-sm` (0.75rem)
- **Colors**:
  - Primary accent: `#722F37` (burgundy)
  - Secondary highlight: `#E9241A` (scarlet)
  - Other stats use brand colors

### Components Used
- Card components with a burgundy hover-border effect
- Grid layout with `gap-4` spacing

## 3. Interactive Scratch Section

**Location**: Index.html (mid-page)

### Layout Structure
- Full-width section with `py-16 sm:py-24`
- Canvas element (`#scratch-canvas`) covering full width
- Interactive overlay with `pointer-events-none` and `z-20` stacking

### Visual Design
- **Canvas Background**: Dark gradient (`bg-gradient-to-br`)
- **Corner Marks**: Positioned in corners with brand colors
- **Central Prompt**: "SCRATCH WITH CURSOR OR SWIPE"
- **Callout**: "CLEAR 35% TO UNLOCK THE 2 CORE OFFERS + SPRINT BONUS"

### Interaction Flow
1. User scratches canvas (mouse/touch events)
2. Canvas opacity decreases to 0 when 100% revealed
3. Button hides when revealed
4. Confetti animation triggers
5. Bonus banner appears

### Technical Implementation
- Canvas element with custom JS for scratch detection
- Percentage calculation using pixel sampling
- Throttling for 60 FPS performance

## 4. Offer 1: Digital Experiences

**Location**: Index.html (lower half)

### Layout Structure
- Grid layout with 5 columns on desktop
- Each offer in its own card with distinct background
- Responsive layout with `md:grid-cols-3`

### Card Variations
1. **Brand Website**: Ivory background with burgundy accents
2. **Landing Page**: Ivory background with burnt-orange details
3. **Portfolio Website**: Ivory background with burgundy accents
4. **Redesign**: White background with coral accents
5. **Custom Build**: Ivory background with soft neutral accents

### Typography and Spacing
- **Headings**: `font-display font-black text-2xl sm:text-3xl`
- **Body**: `font-body text-xs sm:text-sm`
- **Spacing**: Consistent `p-5` to `p-7` padding

### Color Usage
- **Primary**: Charcoal and burgundy for headings
- **Accent**: Burnt orange for occasional highlights
- **Borders**: Subtle `border-ink` for separation

## 5. Offer 2: Business Systems

**Location**: Index.html (lower half)

### Layout Structure
- Similar grid layout to Offer 1
- 3-column layout with consistent card design

### Card Design
- Consistent use of `rounded-2xl`, `shadow-2xl`, and gradient backgrounds
- Each card has unique accent color (emerald, amber, coral)
- Consistent hierarchy with H3 for title and p for description

### Content Structure
- **Header**: Offer number and title
- **Description**: Paragraph explaining the service
- **List**: Bullet points with icons for key features
- **CTA**: "EXPLORE [TYPE]" button

### Interactive Elements
- Hover effects on cards
- Clickable buttons with modal triggers

## 6. Portfolio Section

**Location**: work.html

### Layout Structure
- Grid layout with filter tabs at top
- 2-column grid on desktop, 1-column on mobile
- Filter tabs allow sorting by category

### Card Design
- Consistent card template with:
  - Image with hover scale effect
  - Overlay text with client info
  - Duration badge
  - Detailed description
  - Metric cards (load time, views, etc.)

### Filter System
- Tabs: "ALL PROJECTS", "DIGITAL EXPERIENCES", "BUSINESS SYSTEMS"
- Animation: Items fade in with staggered timing

### Content Examples
- **Destiny Laboratories**: Pharma website with WhatsApp integration
- **FrontierRaas**: Luxury fashion website with editorial layout
- **Nukkar Dhaba**: Restaurant website with menu integration
- **Novelty Restaurant**: Heritage dining establishment

## 7. DMS (Direct Message System) Section

**Location**: Index.html (mid-lower section)

### Layout Structure
- Grid layout with 3 columns on desktop
- Card-based testimonials with consistent styling
- Each testimonial has:
  - Profile picture/initial
  - Name and title
  - Quote content
  - Verified client badge

### Visual Design
- **Background**: Light tint (`bg-[#DCF8C6]/60`)
- **Border**: `border-emerald-300` for distinction
- **Typography**: `text-xs` for quotes, `font-mono` for metadata

### Content Structure
- Each testimonial has:
  - **Header**: Initials, name, title
  - **Content**: Raw client quotes
  - **Badge**: "Verified Client" with system type

## 8. Delivery Protocol Section

**Location**: Index.html (lower section)

### Layout Structure
- 3-column grid layout
- Each phase in its own card with clear numbering
- Consistent use of `card-enter` and `card-enter` classes for animations

### Phase Breakdown
1. **Days 1-2**: Scope & Architecture (2 days)
   - Technical specification document
   - 45-minute extraction call

2. **Days 3-11**: Build & Wire (9 days)
   - Frontend and backend development
   - Private staging updates every 48 hours

3. **Days 12-14**: Stress-Test & Launch (3 days)
   - Security testing and performance optimization
   - Production deployment and handover

### Visual Design
- **Numbered Steps**: Large circles with `w-14 h-14`
- **Color Coding**: Each phase has unique background color
- **Cards**: Consistent use of `shadow-brutal` and `shadow-brutal-blue`

## 9. Estimator Calculator

**Location**: Index.html (lower section)

### Layout Structure
- Card-based calculator with white background
- Responsive grid layout
- Form with multiple input types

### Components
- **Radio buttons** for offer selection
- **Range slider** for team size
- **Text input** for contact info
- **Select dropdown** for offer type
- **Textarea** for description

### Form Elements
- **Labels**: `font-display font-bold text-xs text-ink`
- **Inputs**: Rounded corners, consistent padding
- **Buttons**: Brand-colored with hover effects

### Visual Feedback
- Real-time updates based on form inputs
- Clear visual hierarchy with spacing

## 10. FAQ Accordion

**Location**: Index.html (lower section)

### Layout Structure
- Series of collapsible cards
- Each card has question and answer sections
- Consistent use of `bg-white`, `border-2`, `rounded-xl`

### Design Details
- **Card Background**: White with ink border
- **Shadow**: `shadow-brutal-sm` for subtle depth
- **Transition**: Smooth expansion/collapse
- **Icons**: `+` and `−` for expansion state

### Content Structure
- **Question**: Bold text with clear hierarchy
- **Answer**: Soft text color with proper spacing
- **Border**: Top border for answer section

## 11. Contact Section

**Location**: contact.html

### Layout Structure
- Two-column layout on desktop (form + details)
- Responsive stacking on mobile
- Card-based design for both sections

### Form Design
- **Grid Layout**: 2-column on desktop, 1-column on mobile
- **Input Fields**: Consistent styling with rounded corners
- **Error States**: Not visible in current implementation
- **Success Message**: Green background with checkmark

### Details Section
- **Background**: Dark with white text
- **Cards**: Rounded with subtle borders
- **Content**: Organized into sections with headings

## 12. Footer

**Location**: Index.html (bottom)

### Layout Structure
- Dark background (`bg-zinc-950`)
- Text in medium gray (`text-zinc-400`)
- Flexible layout with grid wrapping

### Components
- **Logo**: Large "Q" with brand color background
- **Navigation Links**: Hover states with color transitions
- **"Back to Top"**: Subtle link with hover effect
- **Copyright**: Simple text with brand tagline

## 13. Responsive Design Analysis

### Breakpoints Identified
- **Mobile**: Default (≤767px)
- **Tablet**: `md` breakpoint (768-1023px)
- **Desktop**: `lg` breakpoint (≥1024px)

### Responsive Patterns
- **Navigation**: Hamburger menu on mobile, full menu on desktop
- **Grids**: 1-column → 2-column → 3-column or 4-column layouts
- **Typography**: Scaling from `text-sm` to `text-4xl` based on viewport
- **Padding**: Consistent spacing maintained across breakpoints

## 14. Design Inconsistencies and Recommendations

### Identified Inconsistencies
1. **Color Variations**: 
   - Historical color variants are superseded by the Midnight Black, Pure White and Golden Yellow system: midnight canvas, graphite structure, selective gold accents and clear white typography

2. **Typography Inconsistency**:
   - Homepage uses "Bricolage Grotesque" for headings
   - Work.html now uses DM Sans for body text, matching the rest of the site
   - Need to standardize font family usage

3. **Spacing Variations**:
   - Some sections use `p-6` while others use `p-8`
   - Inconsistent use of `gap` values in grid layouts

4. **Component Variations**:
   - Cards use slightly different shadow effects (`shadow-brutal` vs `shadow-brutal-sm`)
   - Button styles vary slightly in border radius and padding

### Recommendations
1. **Standardize Color Values**: Choose primary brand color and stick to it consistently
2. **Standardize Typography**: Ensure consistent font family usage across all pages
3. **Establish Spacing Scale**: Create a clear scale for padding/margin values
4. **Unify Component Styles**: Standardize card shadows, button styles, and form elements
5. **Document All Components**: Ensure all team members reference the same design tokens

## 14. Key Implementation Files

### Critical Files for Understanding the Design System:
1. **css/style.css** - Contains all CSS variables and Tailwind configuration
2. **index.html** - Primary template showing full design system in action
3. **about.html** - Secondary page with consistent implementation
4. **work.html** - Portfolio section showing component variations
5. **process.html** - Detailed documentation of delivery protocol

### Important Implementation Notes:
- All components use Tailwind CSS utility classes
- Design tokens are defined in both CSS variables and Tailwind config
- Responsive behavior relies on Tailwind's breakpoint system
- Interactive elements use custom JavaScript with event delegation
- Modal implementations use consistent patterns across pages

### Important Files to Understand Before Modifying:
- `css/style.css` - Core design system definitions
- `js/main.js` - Interactive component implementations
- `components/` directory (if it exists) - Reusable component implementations
- `tailwind.config.js` - Color and spacing system definitions