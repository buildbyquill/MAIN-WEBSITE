# Quill Labs Design System Documentation

## Color Palette

### Core Brand Colors
| Color Name | HEX | Usage |
|------------|-----|-------|
| Warm Ivory | `#F2EBDD` | Main page and light-section backgrounds |
| Charcoal Black | `#252321` | Primary text, dark sections and footer |
| Deep Burgundy | `#722F37` | Primary brand accent, buttons, links and active states |
| Scarlet Red | `#E9241A` | Secondary highlights and graphic details |
| Soft Sand | `#D8C9AE` | Supporting surfaces and secondary neutral details |

### Background and Surface Colors
| Color Name | HEX | Usage |
|------------|-----|-------|
| Ivory Surface | `#F2EBDD` | Page canvas, hero and light sections |
| Soft Sand | `#D8C9AE` | Alternating light sections and supporting surfaces |
| Charcoal Surface | `#302D29` | Cards and surfaces in dark sections |
| Elevated Charcoal | `#3A3632` | Raised dark surfaces |
| Burgundy Tint | `#ECE0D4` | Soft accent surface |

### Text Colors
| Color Name | HEX | RGB | Usage | Purpose | Category |
|------------|-----|-----|-------|---------|----------|
| Text (Ivory) | `#F2EBDD` | 242, 235, 221 | Primary text on charcoal backgrounds | Text | `#F2EBDD` |
| Text (Soft) | `#5B5860` | 91, 88, 96 | Secondary text on light backgrounds | Text | `#5B5860` |
| Text (Muted) | `#77737B` | 119, 115, 123 | Captions on light backgrounds | Text | `#77737B` |

### Borders and Dividers
| Color Name | HEX | RGB | Usage | Purpose | Category |
|------------|-----|-----|-------|---------|----------|
| Border Subtle | `rgba(37, 35, 33, 0.12)` | Charcoal | Borders on ivory surfaces | Border | `rgba(37, 35, 33, 0.12)` |
| Border Hover | `rgba(114, 47, 55, 0.65)` | Burgundy | Interactive hover states | Border | `rgba(114, 47, 55, 0.65)` |

### Gradients and Patterns
| Name | Description | Colors | Usage |
|------|-------------|--------|-------|
| Dot Grid Pattern | Subtle radial dot grid | Burgundy tint | Background texture on selected sections |
| Glow Bloom | Restrained radial tint | Burgundy tint | Decorative emphasis |
| Charcoal Bloom | Restrained radial tint | Soft-sand tint over charcoal | Dark-section atmosphere |

## Typography

### Font Families
| Family | Usage | Weight Range |
|--------|-------|-------------|
| Bricolage Grotesque | Headings (H1-H3), titles, hero text | 400-800 |
| DM Sans | Body text, paragraphs, descriptions | 400-800 |
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
- **Dot Grid**: subtle scarlet radial dots with 24px repeat
- **Dark Grid**: subtle soft-sand radial dots with 24px repeat

### Glow Effects
- **Basic Glow**: restrained burgundy radial tint
- **Dark Glow**: restrained soft-sand radial tint over charcoal

### Shadows
- **Brutal Shadows**: 
  - Small: 0 4px 14px rgba(37, 35, 33, 0.1)
  - Standard: 0 8px 24px rgba(37, 35, 33, 0.14)
  - Large: 0 16px 40px rgba(37, 35, 33, 0.18)
- **Card Glow**: restrained burgundy-tinted shadow
- **Pill Glow**: restrained burgundy-tinted shadow

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