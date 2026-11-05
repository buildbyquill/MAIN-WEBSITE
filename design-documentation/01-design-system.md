# Quill Labs Design System Documentation

## Color Palette

### Core Brand Colors
| Color Name | HEX | Usage |
|------------|-----|-------|
| Midnight Black | `#08090B` | Golden theme canvas, hero, navigation and footer |
| Pure White | `#F5F3EF` | Golden theme primary text and high-contrast UI |
| Golden Yellow | `#FFC900` | Default primary CTA, selective highlights and graphic accents |
| Graphite | `#111317` | Golden theme cards, forms and secondary surfaces |
| Dark Border | `#292B30` | Golden theme raised surfaces and subtle contrast |
| Muted Text | `#A5A5A5` | Golden theme supporting copy, captions and metadata |

### Alternate Crimson Theme
The navigation design switch also enables the previous crimson identity. It uses Obsidian Black `#080808`, Soft White `#F3F0F3`, Laser Crimson `#D41514`, Graphite `#140E11`, Gunmetal `#352E30`, and Muted Grey `#8A7A7A`. The selected theme is stored in local storage and shared across pages.

### Background and Surface Colors
| Color Name | HEX | Usage |
|------------|-----|-------|
| Midnight Surface | `#08090B` | Page canvas, hero and footer |
| Graphite Surface | `#111317` | Cards, forms and alternating sections |
| Dark Border Surface | `#292B30` | Raised cards and subtle separators |
| Gold Tint | `rgba(255, 201, 0, 0.09)` | Restrained accent surface |

### Text Colors
| Color Name | HEX | RGB | Usage | Purpose | Category |
|------------|-----|-----|-------|---------|----------|
| Text (Pure White) | `#F5F3EF` | 245, 243, 239 | Primary text on dark surfaces | Text | `#F5F3EF` |
| Text (Muted) | `#A5A5A5` | 165, 165, 165 | Supporting copy and UI labels | Text | `#A5A5A5` |
| Text (Muted Grey) | `#A5A5A5` | 165, 165, 165 | Quiet captions and metadata | Text | `#A5A5A5` |

### Borders and Dividers
| Color Name | HEX | RGB | Usage | Purpose | Category |
|------------|-----|-----|-------|---------|----------|
| Border Subtle | `rgba(245, 243, 239, 0.16)` | Pure White | Dark-surface separators | Border | `rgba(245, 243, 239, 0.16)` |
| Border Hover | `rgba(255, 201, 0, 0.56)` | Golden Yellow | Interactive hover states | Border | `rgba(255, 201, 0, 0.56)` |

### Gradients and Patterns
| Name | Description | Colors | Usage |
|------|-------------|--------|-------|
| Dot Grid Pattern | Subtle radial dot grid | Low-opacity white or gold | Background texture on selected sections |
| Gold Geometry | Cropped circles and fine rules | Golden Yellow | Hero and selected portfolio accents |
| Graphite Surface | Subtle tonal contrast | Graphite over midnight | Dark-section atmosphere |

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
- **Button**: compact accent surface with theme-appropriate foreground text

## Visual Effects

### Background Patterns
- **Dot Grid**: subtle neutral radial dots with 28px repeat
- **Dark Grid**: subtle neutral radial dots with 28px repeat

### Glow Effects
- **Basic Glow**: restrained golden-yellow radial tint
- **Dark Glow**: restrained gunmetal radial tint over obsidian

### Shadows
- **Brutal Shadows**: 
  - Small: 0 4px 14px rgba(0, 0, 0, 0.28)
  - Standard: 0 8px 24px rgba(0, 0, 0, 0.32)
  - Large: 0 16px 40px rgba(0, 0, 0, 0.4)
- **Card Glow**: restrained gold-tinted shadow
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