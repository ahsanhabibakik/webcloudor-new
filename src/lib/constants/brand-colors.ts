/**
 * Webcloudor Brand Colors
 * 
 * Official brand colors sampled directly from the Webcloudor logo and wordmark.
 * These colors MUST be used consistently across all website components.
 * 
 * NEVER modify these values - they represent the official brand identity.
 */

export const WEBCLOUDOR_COLORS = {
  // Primary brand colors
  primary: '#1496EF',      // RGB: 20, 150, 239 - Main brand blue
  deep: '#0066C2',         // RGB: 0, 102, 194 - Deep gradient blue  
  accent: '#1E63B1',       // RGB: 30, 99, 177 - Logo shadow/accent blue
  yellow: '#FFD43B',       // RGB: 255, 212, 59 - Yellow/Gold from gradient
  orange: '#FF9000',       // RGB: 255, 144, 0 - Orange from gradient
  white: '#FFFFFF',        // RGB: 255, 255, 255 - Pure white for contrast
} as const;

export const WEBCLOUDOR_GRADIENTS = {
  // Brand gradients for consistent usage
  primary: 'linear-gradient(135deg, #FFD43B 0%, #FF9000 100%)',
  blue: 'linear-gradient(135deg, #1496EF 0%, #0066C2 100%)',
  radial: 'radial-gradient(circle, #1496EF 0%, #0066C2 100%)',
  hero: 'linear-gradient(135deg, #1496EF 0%, #1E63B1 50%, #0066C2 100%)',
} as const;

/**
 * Tailwind CSS class mappings for Webcloudor brand colors
 * Use these classes for consistent styling across components
 */
export const WEBCLOUDOR_TAILWIND = {
  // Background colors
  bg: {
    primary: 'bg-webcloudor-primary',
    deep: 'bg-webcloudor-deep',
    accent: 'bg-webcloudor-accent',
    yellow: 'bg-webcloudor-yellow',
    orange: 'bg-webcloudor-orange',
    white: 'bg-webcloudor-white',
  },
  // Text colors
  text: {
    primary: 'text-webcloudor-primary',
    deep: 'text-webcloudor-deep',
    accent: 'text-webcloudor-accent',
    yellow: 'text-webcloudor-yellow',
    orange: 'text-webcloudor-orange',
    white: 'text-webcloudor-white',
  },
  // Gradient backgrounds
  gradient: {
    primary: 'bg-webcloudor-gradient',
    blue: 'bg-webcloudor-blue-gradient',
    radial: 'bg-webcloudor-radial',
    hero: 'bg-webcloudor-hero',
  },
  // Border colors
  border: {
    primary: 'border-webcloudor-primary',
    deep: 'border-webcloudor-deep',
    accent: 'border-webcloudor-accent',
    yellow: 'border-webcloudor-yellow',
    orange: 'border-webcloudor-orange',
  },
} as const;

/**
 * Usage rules for brand colors
 */
export const BRAND_USAGE_RULES = {
  navbar: WEBCLOUDOR_TAILWIND.bg.primary,
  footer: WEBCLOUDOR_TAILWIND.bg.deep,
  primaryCTA: WEBCLOUDOR_TAILWIND.gradient.primary,
  secondaryCTA: WEBCLOUDOR_TAILWIND.bg.accent,
  heroSection: WEBCLOUDOR_TAILWIND.gradient.hero,
  cardAccent: WEBCLOUDOR_TAILWIND.border.accent,
  textOnBlue: WEBCLOUDOR_TAILWIND.text.white,
} as const;

/**
 * Type definitions for brand colors
 */
export type WebcloudorColor = keyof typeof WEBCLOUDOR_COLORS;
export type WebcloudorGradient = keyof typeof WEBCLOUDOR_GRADIENTS;
export type WebcloudorTailwindClass = 
  | typeof WEBCLOUDOR_TAILWIND.bg[keyof typeof WEBCLOUDOR_TAILWIND.bg]
  | typeof WEBCLOUDOR_TAILWIND.text[keyof typeof WEBCLOUDOR_TAILWIND.text]
  | typeof WEBCLOUDOR_TAILWIND.gradient[keyof typeof WEBCLOUDOR_TAILWIND.gradient]
  | typeof WEBCLOUDOR_TAILWIND.border[keyof typeof WEBCLOUDOR_TAILWIND.border];
