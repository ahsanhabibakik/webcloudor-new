# Hero Component Backups

This directory contains backup versions of the Hero component for testing and future reference.

## Available Versions:

### 1. HeroOriginal.tsx
- **Purpose**: The original simple Hero component before design transformation
- **Features**: Basic centered layout with title, description, and buttons
- **Styling**: Simple background with standard text and button components
- **When to use**: When you need a clean, minimal hero section

### 2. HeroSimple.tsx 
- **Purpose**: Simple version with brand colors but no animations
- **Features**: Gradient background with brand colors, basic layout
- **Styling**: Webcloudor brand gradient background
- **When to use**: When you want brand colors but need to test without animations

### 3. HeroGlassMorphism.tsx
- **Purpose**: Advanced version with glass morphism effects and animations
- **Features**: 
  - Animated background orbs
  - Glass morphism cards
  - Framer Motion animations
  - Interactive elements
- **Styling**: Modern glass effect with backdrop blur
- **When to use**: When you want the most advanced visual effects

## How to Use These Backups:

1. **For Testing**: Import any of these components in your page.tsx to test different designs:
   ```tsx
   import { HeroSimple } from '@/components/backup/HeroSimple'
   // Replace <Hero /> with <HeroSimple />
   ```

2. **For Comparison**: Use these to compare different design approaches

3. **For Fallbacks**: Use simpler versions as fallbacks if the main component has issues

4. **For Future Iterations**: Use as starting points for new design variations

## Current Active Hero:
The current Hero component in `/src/components/Hero.tsx` is the most advanced version with:
- Accessibility features (reduced motion support)
- Error boundaries
- Performance optimizations
- Advanced animations and interactions
- Brand color integration

## Notes:
- All backup components use the same Webcloudor brand colors
- Components are isolated and won't affect the main build
- Feel free to modify these for experimental designs
- Keep these files for reference during design iterations
