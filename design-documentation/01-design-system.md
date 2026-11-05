# Quill Labs Design System Documentation

## Color Palette

### Core Brand Colors
| Color Name | HEX | Usage |
|------------|-----|-------|
| Obsidian Black | `#080808` | Main canvas, hero, navigation and footer |
| Chrome Silver | `#CDCBCA` | Secondary text, borders and supporting UI |
| Laser Crimson | `#D41514` | Primary CTA and selective highlights |
| Pure White | `#F3F0F3` | Primary text and high-contrast UI |
| Graphite | `#171516` | Cards, forms and secondary surfaces |
| Gunmetal | `#352E30` | Raised surfaces and subtle contrast |
| Deep Crimson | `#810E11` | Crimson depth and restrained button gradients |
| Muted Grey | `#8A7A7A` | Quiet supporting labels |

### Background and Surface Colors
| Color Name | HEX | Usage |
|------------|-----|-------|
| Obsidian Surface | `#080808` | Page canvas, hero and footer |
| Graphite Surface | `#171516` | Cards, forms and alternating sections |
| Gunmetal Surface | `#352E30` | Raised cards and supporting surfaces |
| Crimson Tint | `rgba(212, 21, 20, 0.12)` | Restrained accent surface |

### Text Colors
| Color Name | HEX | RGB | Usage | Purpose | Category |
|------------|-----|-----|-------|---------|----------|
| Text (Pure White) | `#F3F0F3` | 243, 240, 243 | Primary text on dark surfaces | Text | `#F3F0F3` |
| Text (Chrome) | `#CDCBCA` | 205, 203, 202 | Supporting copy and UI labels | Text | `#CDCBCA` |
| Text (Muted Grey) | `#8A7A7A` | 138, 122, 122 | Quiet captions and metadata | Text | `#8A7A7A` |

### Borders and Dividers
| Color Name | HEX | RGB | Usage | Purpose | Category |
|------------|-----|-----|-------|---------|----------|
| Border Subtle | `rgba(205, 203, 202, 0.16)` | Chrome Silver | Dark-surface separators | Border | `rgba(205, 203, 202, 0.16)` |
| Border Hover | `rgba(212, 21, 20, 0.56)` | Laser Crimson | Interactive hover states | Border | `rgba(212, 21, 20, 0.56)` |

### Gradients and Patterns
| Name | Description | Colors | Usage |
|------|-------------|--------|-------|
| Dot Grid Pattern | Subtle radial dot grid | Low-opacity chrome or crimson | Background texture on selected sections |
| Glow Bloom | Restrained radial tint | Laser Crimson | Decorative emphasis |
| Graphite Bloom | Restrained radial tint | Gunmetal over obsidian | Dark-section atmosphere |

## Typography

### Font Families
| Family | Usage | Weight Range |
|--------|-------|-------------|
| Space Grotesk | Headings (H1-H3), titles, hero text | 400-700 |
| Manrope | Body text, paragraphs, descriptions | 400-800 |
| JetBrains Mono | Code blocks, technical content, technical labels | 400-800 |

### Font Sizes
| Element | Size | Line Height | Notes |
|---------|------|-------------|-------|
| H1 | 2.25rem (36px) | 1.06 | Main headings |
| H2 | 1.875rem (30px) | 1.125 | Subheadings |
| H3 | 1.5rem (24px) | 1.2 | Secondary headings |
| H4 | 1.25rem (20px) | 1.3 | Section headers |
| Body | 1.125rem (18px) | 1.6 | Paragraphs |
| Caption | 0.875rem (14px) | 1.375 | Small text, labels |

### Line Heights
- Body text: 1.6
- Headings: 1.06-1.3 depending on level
- Code/monospace: 1.2

## Layout and Spacing

### Container Widths
- **Main container**: max-w-7xl (1536px)
- **Section padding**: p-6 (24px), p-8 (32px)
- **Card padding**: p-6 (24px), p-8 (32px)

### Grid System
- **Columns**: 12-column grid (Tailwind standard)
- **Gutters**: gap-6 (24px) between columns
- **Responsive**: 
  - md: grid-cols-2 (768px+)
  - lg: grid-cols-3 (1024px+)
  - xl: grid-cols-4 (1280px+)

### Spacing Scale
- **Small**: 0.5rem (8px)
- **Medium**: 1rem (16px)
- **Large**: 1.5rem (24px)
- **XL**: 2rem (32px)
- **XXL**: 3rem (48px)

### Border Radii
- **Default**: rounded-md (1rem / 16px)
- **Large**: rounded-xl (1.5rem / 24px)
- **Full**: rounded-full (50%)

### Shadows
- **Default**: box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) 
- **Card**: box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.06)
- **Button**: restrained scarlet shadow with ivory text

## Visual Effects

### Background Patterns
- **Dot Grid**: subtle crimson radial dots with 28px repeat
- **Dark Grid**: subtle chrome radial dots with 28px repeat

### Glow Effects
- **Basic Glow**: restrained laser-crimson radial tint
- **Dark Glow**: restrained gunmetal radial tint over obsidian

### Shadows
- **Brutal Shadows**: 
  - Small: 0 4px 14px rgba(0, 0, 0, 0.28)
  - Standard: 0 8px 24px rgba(0, 0, 0, 0.32)
  - Large: 0 16px 40px rgba(0, 0, 0, 0.4)
- **Card Glow**: restrained crimson-tinted shadow
- **Pill Glow**: restrained obsidian shadow

### Animations
- **Card Enter**: scale(0.96) translateY(24px) -> scale(1) translateY(0) with 0.65s duration
- **Spinner**: 0.85s rotation animation
- **Confetti**: Particle effects with random motion and fade-out
- **Transition**: All interactive elements use duration-200 or duration-300ms transitions

## Design Tokens Summary
- **Color Tokens**: CSS variables and Tailwind color definitions
- **Typography Tokens**: Font families, sizes, weights
- **Spacing Tokens**: Margin/padding scales based on Tailwind
- **Border Tokens**: Subtle borders with hover states
- **Shadow Tokens**: Brutal, card, and glow shadows
- **Animation Tokens**: Duration and easing for transitions