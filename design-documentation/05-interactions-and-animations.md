# Quill Labs Interactions and Animations Documentation

## 1. Animation Types and Usage

### Entry Animations
- **Card Pop Animation**: 
  - Classes: `card-enter`, `card-enter.in-view`
  - Animation: `cardPop` (0.42s, subtle upward reveal)
  - Used for: Hero section cards, portfolio cards, offer cards
  - Disabled when reduced motion is requested

### Hover Effects
- **Button Hover**: 
  - Primary buttons: `hover:-translate-y-1`, `hover:bg-brand-hover`
  - Glass buttons: burgundy hover border with color transition
- **Custom Cursor**:
  - Uses the supplied transparent cursor artwork, scaled to 48px for fine pointers.
  - A light outlined version improves contrast over dark sections and clickable hover states.
  - Touch devices retain their native behavior; text fields keep the text-selection cursor.
- **Card Hover**: 
  - burgundy hover border, `hover:-translate-y-1.5`
  - Smooth transition with `duration-300`
- **Interactive Elements**: 
  - Subtle color changes with `transition-colors`
  - Slight elevation with `translate-y` movements
  - Reduced-motion preference disables non-essential movement and transitions

### Interactive Elements
- **Scratch Canvas**: 
  - Mouse/touch events trigger `scratchAt()` function
  - Percentage calculation based on canvas pixel sampling
  - 100% reveal triggers `revealScratchCard()` function
  - Particle system with `spawnFoilShavings()` for visual feedback
- **Filter Tabs**: 
  - `filterWork()` function with staggered animation
  - Items fade in with `in-view` class and `setTimeout` delay
  - Active tab has brand background with shadow effect

## 2. Key Interaction Components

### 1. Scratch Canvas Interaction
- **File Location**: `js/main.js` (lines 1756-2025)
- **Key Functions**:
  - `initScratchCanvas()`: Initializes canvas with gradients and patterns
  - `scratchAt(x, y)`: Handles mouse/touch input for scratching
  - `checkScratchPercentage()`: Monitors progress and triggers reveal
  - `revealScratchCard()`: Animates reveal with opacity fade and button hide
- **Visual Effects**:
  - Particle system with `spawnFoilShavings()`
  - Canvas scaling with `scale(1.02)` on reveal
  - Opacity transition to 0 for canvas element

### 2. Portfolio Filter Tabs
- **File Location**: Index.html (lines 2027-2051) and work.html (lines 982-1004)
- **Behavior**:
  - Clicking tab changes active state with brand background
  - Non-active tabs have white background
  - Items fade in with staggered timing (`visibleIdx * 90`)
  - `in-view` class triggers animation when scrolled into view

### 3. FAQ Accordion
- **File Location**: Index.html (lines 1588-1616)
- **Behavior**:
  - Clicking question toggles `hidden` class on answer
  - Icon changes from `+` to `−` on expansion
  - `aria-expanded` and `aria-controls` expose accordion state to assistive technology
  - Brief opacity/position transition, with delayed hide when closing
  - Consistent card styling with shadow effects

### 4. Modal Dialog
- **File Location**: Index.html (lines 1692-1749) and about.html (lines 543-590)
- **Features**:
  - Centered modal with dark backdrop
  - White content area with border
  - Escape and backdrop dismissal, focus return, focus trapping and viewport-height scrolling
  - Form validation via `handleFormSubmit()`
  - Success message with 2.5s delay before closing

### 5. Navigation
- **Mobile/tablet drawer**: Opens with a short transition below 1024px; exposes expanded state, closes on outside click or Escape, and returns focus to the toggle on Escape.
- **Offers dropdown**: Supports hover, click-to-lock and keyboard focus; Escape closes it and returns focus to the trigger. Closed links are removed from keyboard navigation.
- **Intro overlay**: Dismisses at DOM ready instead of waiting through simulated loading steps.

## 5. Animation Details and Timing

### Key Animation Parameters
- **Duration**: Most transitions use 0.2s to 0.6s duration
- **Easing**: Primarily `cubic-bezier(0.16, 1, 0.3, 1)` for natural motion
- **Duration Examples**:
  - Card animation: 0.42s
  - Intro spinner: 0.85s rotation when shown
  - Transition: 0.2s - 0.3s for most hover states
  - Menu close grace period: 0.18s

### Animation Sequence in Scratch Section
1. User initiates scratch (mousedown/touchstart)
2. `scratchAt()` function calculates path and draws
3. `spawnFoilShavings()` creates particle effects
4. `checkScratchPercentage()` monitors progress
5. When ≥20% revealed, `revealScratchCard()` triggers:
   - Canvas opacity fades to 0
   - Button hides
   - Progress text changes to "100% UNLOCKED"
   - Bonus banner appears
   - Confetti animation triggers

### 5. Key Animation Classes and Effects
- `transition-all` - Applied to most interactive elements
- `duration-200` - Standard transition duration
- `duration-300` - Used for more pronounced effects
- `ease-out` - For natural deceleration
- `hover:transform` - For hover elevation effects
- `group-hover` - For compound element interactions

## 6. Animation Best Practices Observed

### Performance Considerations
- **Throttling**: Used in scratch canvas to maintain 60 FPS
- **GPU Acceleration**: Transform and opacity properties animated
- **Particle Effects**: Limited to small numbers for performance
- **Opportunistic Loading**: Animations trigger only when needed

### User Experience Enhancements
- **Visual Feedback**: Immediate response to user interactions
- **Progress Indicators**: Scratch percentage shows progress
- **Confirmation States**: Clear visual state change when complete
- **Celebratory Effects**: Confetti and banner reveal add delight

### Animation Consistency
- **Duration**: Consistent use of 0.2s-0.6s range
- **Easing**: Natural cubic-bezier timing functions
- **Transition Property**: `transition-all` used extensively
- **Trigger Points**: Animations tied to user interactions rather than timers

## 6. Key Implementation Files for Interactions
1. `js/main.js` - Core interactive behavior including scratch canvas
2. `index.html` - Contains most animation classes and trigger points
3. `work.html` - Portfolio filter tabs and hover effects
4. `process.html` - Animation patterns in delivery protocol section

## 7. Key Implementation Notes
- All animations use CSS transitions where possible for performance
- JavaScript handles complex canvas interactions and state management
- Animation classes are consistently named (`card-enter`, `in-view`, `hover:` prefixes)
- Event delegation is used for efficient DOM handling
- Mobile touch events are properly handled with passive listeners where appropriate