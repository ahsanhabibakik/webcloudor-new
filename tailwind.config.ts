import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Webcloudor Brand Colors
        webcloudor: {
          // Primary brand blue - sampled from logo
          primary: '#1496EF', // RGB: 20, 150, 239
          'primary-rgb': '20 150 239',
          
          // Deep gradient blue for backgrounds
          deep: '#0066C2', // RGB: 0, 102, 194
          'deep-rgb': '0 102 194',
          
          // Logo shadow/accent blue
          accent: '#1E63B1', // RGB: 30, 99, 177
          'accent-rgb': '30 99 177',
          
          // Yellow/Gold from gradient
          yellow: '#FFD43B', // RGB: 255, 212, 59
          'yellow-rgb': '255 212 59',
          
          // Orange from gradient
          orange: '#FF9000', // RGB: 255, 144, 0
          'orange-rgb': '255 144 0',
          
          // Pure white for contrast
          white: '#FFFFFF', // RGB: 255, 255, 255
          'white-rgb': '255 255 255',
        },
        
        // Shadcn/ui colors (keeping for compatibility)
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['monospace'],
      },
      backgroundImage: {
        // Webcloudor brand gradients
        'webcloudor-gradient': 'linear-gradient(135deg, #FFD43B 0%, #FF9000 100%)',
        'webcloudor-blue-gradient': 'linear-gradient(135deg, #1496EF 0%, #0066C2 100%)',
        'webcloudor-radial': 'radial-gradient(circle, #1496EF 0%, #0066C2 100%)',
        'webcloudor-hero': 'linear-gradient(135deg, #1496EF 0%, #1E63B1 50%, #0066C2 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
}

export default config