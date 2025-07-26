# Technology Stack

## Framework & Runtime
- **Next.js** (latest): React framework with SSR/SSG capabilities
- **React** (latest): UI library for component-based architecture
- **TypeScript**: Type-safe JavaScript with strict configuration
- **Node.js**: Runtime environment

## UI & Styling
- **Shadcn/UI**: Component library for consistent UI elements
- **CSS**: Global styles with custom properties
- **Next.js Image Optimization**: Built-in image handling

## Development Configuration
- **TypeScript Config**: Strict mode enabled with path aliases (`@/*` → `src/*`)
- **Next.js Config**: React Strict Mode enabled, custom webpack configuration support
- **Path Aliases**: `@/*` maps to `src/*` for clean imports

## Common Commands

### Development
```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Build production bundle
npm run start        # Start production server
```

### Package Management
```bash
npm install          # Install dependencies
npm install <package> # Add new dependency
```

## Build System
- Next.js handles bundling, optimization, and deployment preparation
- TypeScript compilation integrated into Next.js build process
- Automatic code splitting and optimization
- Built-in CSS and image optimization

## Development Standards
- Use TypeScript for all new files
- Follow React functional component patterns
- Utilize Next.js built-in features (Image, Link, etc.)
- Maintain strict TypeScript configuration