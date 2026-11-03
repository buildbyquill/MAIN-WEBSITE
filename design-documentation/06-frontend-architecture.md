# Quill Labs Frontend Architecture Documentation

## 1. Technology Stack

### Core Technologies
- **HTML5**: Static, semantic multi-page website
- **CSS3**: Shared design system and locally compiled Tailwind utilities
- **JavaScript**: Vanilla JavaScript with DOM manipulation
- **CSS Framework**: Tailwind CSS 3.4.17, compiled locally with `npm run build`

### Additional Libraries and Tools
- **Fonts**: Google Fonts (Bricolage Grotesque, DM Sans, JetBrains Mono)
- **Icons**: Custom SVG icons with class-based styling
- **Frameworks**: No heavy frameworks - lightweight approach

## 2. Project Structure

### File Structure Analysis
Based on the provided files, the structure appears to be:

```
/ (root directory)
├── assets/                  # Image assets and media files
│   ├── projects/            # Project images for portfolio
│   ├── favicon-32x32.png    # Favicon
│   ├── wordmark.png         # Logo
│   └── ...                  # Other assets
├── css/                     # Shared and generated stylesheets
│   ├── style.css            # Design system and component styles
│   ├── tailwind.input.css   # Tailwind build entry point
│   └── tailwind.css         # Generated production utility stylesheet
├── js/                      # JavaScript files
│   └── main.js              # Main JavaScript file with interactions
├── index.html               # Homepage (primary template)
├── about.html               # About page
├── work.html                # Portfolio page
├── process.html             # Delivery protocol page
├── contact.html             # Contact form page
├── offers.html              # Offers/pricing page
├── digital-experiences.html # Offer 1 detail page
├── business-systems.html    # Offer 2 detail page
└── ... (other pages)
```

`package.json`, `package-lock.json`, and `tailwind.config.js` define the reproducible CSS build. Tailwind runs at build time; published pages do not load its CDN at runtime.

### Key Implementation Notes
- **Architecture**: Static multi-page site; each public page is a separate HTML file
- **Home page**: `index.html`
- **Shared Assets**: CSS and JS files are shared across all pages
- **Build**: Run `npm ci` and `npm run build` after changing Tailwind classes or configuration
- **Static deployment**: Publish the HTML pages and generated CSS/assets; no runtime framework is required

## 3. Routing and Navigation

### Navigation System
- **Type**: File-based navigation between static HTML pages
- **Mechanism**: Page links use relative HTML paths; section navigation uses anchor links, with JavaScript reserved for interactive controls
- **Navigation Components**:
  - Main header with navigation links
  - Offers mega menu with dropdown
  - Mobile drawer with category links
  - Footer navigation links

### URL Structure
- **Clean URLs**: Uses hyphens and descriptive terms (e.g., `digital-experiences.html`)
- **Query Parameters**: The contact page can preselect an offer using `?type=` or `?project=`
- **File-based Routing**: Each page is a separate HTML file

## 4. Component Organization

### Component Categories
1. **Navigation Components**: 
   - Header with logo and menu
   - Mega menu with grid layout
   - Mobile drawer with categorized links
2. **UI Components**:
   - Buttons with various styles (primary, glass, icon)
   - Cards with consistent styling and hover effects
   - Form inputs with consistent styling
   - Modals with standardized behavior
3. **Interactive Elements**:
   - Scratch canvas with particle effects
   - Filter tabs with staggered animations
   - FAQ accordion with smooth transitions
4. **Content Components**:
   - Cards for portfolio and offer sections
   - Stat cards for statistics display
   - Testimonial cards for DMS section

## 5. State Management and Data Flow

### Client-Side State Management
- **URL State**: Managed through hash or HTML5 history API (not clearly evident)
- **Component State**: Managed via JavaScript variables and DOM state
- **User Input**: Handled through form elements and event listeners

### Data Flow
- **Static Content**: HTML files contain all content
- **Dynamic Elements**: JavaScript handles interactive elements (filter tabs, modals, etc.)
- **Data Storage**: No evidence of client-side data storage (localStorage/sessionStorage)
- **Forms**: Enquiry forms prepare a `mailto:` draft for `hello@quilllabs.io`; no server-side submission endpoint is configured

## 6. CSS Architecture

### Tailwind CSS Usage
- **Utility-First**: All styling via utility classes
- **Customization**: Extended via the shared `tailwind.config.js`
- **Component Classes**: Custom classes like `card-enter`, `brutal-sm` created
- **Responsive Design**: Responsive modifiers (`sm:`, `md:`, `lg:`) used consistently

### CSS Organization
- **Shared Stylesheets**: Generated utilities load before the design-system overrides in `css/style.css`
- **No Preprocessors**: Pure CSS with Tailwind classes
- **Responsive Design**: Breakpoints handled via Tailwind's responsive prefixes

## 6. JavaScript Architecture

### Main JavaScript File
- **File**: `js/main.js`
- **Content**: Contains all interactive behavior for the site
- **Key Functions Observed**:
  - `openModal()` - Opens modal dialogs
  - `closeModal()` - Closes modal dialogs
  - `handleFormSubmit()` - Handles form submissions
  - `filterWork()` - Portfolio filter functionality
  - `toggleFaq()` - FAQ accordion behavior
  - `setObjective()` and `updateEstimates()` - Estimator calculator logic
  - Scratch canvas interaction handlers

### Event Handling
- **Event Delegation**: Used for dynamic content (filter tabs, FAQ)
- **Direct Event Listeners**: Used for static elements (buttons, inputs)
- **Event Types**: `click`, `submit`, `mouseover`, `mousemove`, `touchstart`, `touchmove`, `touchend`

### State Management
- **DOM Manipulation**: Direct DOM manipulation for most interactions
- **Class Manipulation**: Adding/removing classes for state changes
- **Data Binding**: Minimal, mostly through DOM data attributes
- **State Persistence**: Not observed - appears to be transient state

## 7. Component Architecture Patterns

### Reusable Patterns
1. **Modal Pattern**: 
   - Fixed positioning with dark backdrop
   - White content area with border
   - Close button in top-right
   - Form with submit handler

2. **Card Pattern**:
   - Consistent padding and border
   - Shadow effects for depth
   - Hover state variations
   - Consistent typography hierarchy

3. **Grid Layout Pattern**:
   - 12-column grid system
   - Responsive column counts (1-4 columns)
   - Consistent gutter spacing

4. **Interactive Pattern**:
   - Event listeners on containers for delegation
   - Class-based state management
   - Smooth transitions for state changes

## 7. Key Implementation Files for Architecture Understanding

### 1. `css/style.css`
- Contains shared CSS variables, brand overrides, and interaction/accessibility styles
- Defines design tokens, color palette, typography
- Includes all component styles and interactive states

### 2. `tailwind.config.js`
- Defines the Tailwind design-token aliases and content scan
- Used by the local build to generate `css/tailwind.css`

### 3. `js/main.js`
- Contains shared navigation, modal, email-draft, FAQ, form-label, and interaction behavior
- Page-specific filters, scratch-card behavior, and the estimator are implemented in page scripts

### 4. `index.html`
- Primary template showing full implementation of design system
- Contains hero section, navigation, hero section, and key components
- Demonstrates responsive behavior across breakpoints

### 5. `work.html`
- Shows portfolio grid implementation
- Demonstrates component reuse with different content
- Shows filter tab implementation pattern

### 6. `process.html`
- Details the 3-phase delivery protocol
- Shows consistent use of card components and animation patterns

## 7. Important Implementation Notes

### 1. Design System Implementation
- All components follow the design system defined in `01-design-system.md`
- Consistent use of CSS variables for colors and spacing
- Typography follows defined scale and hierarchy

### 2. Responsive Implementation
- Mobile-first approach with progressive enhancement
- Consistent spacing system across all breakpoints
- Responsive typography using relative units

### 3. Interactive Elements
- JavaScript handles all dynamic behavior
- No visible state management library (Redux, Vuex, etc.)
- Event delegation used for dynamic content

### 3. Key Implementation Notes
- **Performance**: Optimized for mobile with touch events and throttling
- **Accessibility**: Semantic HTML and proper contrast ratios
- **Maintainability**: Consistent patterns make modifications straightforward
- **Extensibility**: Easy to add new components following established patterns
- **Forms**: Static enquiry forms prepare an email draft to `hello@quilllabs.io`; no server-side form endpoint is configured.
- **SEO deployment metadata**: Page titles, descriptions, and social titles are present. Canonical URLs and sitemap entries require the verified production domain.