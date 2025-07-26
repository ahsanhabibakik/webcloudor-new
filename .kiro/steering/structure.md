# Project Structure

## Root Directory
```
├── .git/                 # Git version control
├── .kiro/               # Kiro AI assistant configuration
├── public/              # Static assets (favicon, images)
├── src/                 # Source code
├── next.config.js       # Next.js configuration
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── README.md           # Project documentation
```

## Source Directory (`src/`)
```
src/
├── components/          # Reusable React components
│   └── Navbar.tsx      # Navigation component
├── pages/              # Next.js pages (file-based routing)
│   └── index.tsx       # Homepage component
└── styles/             # CSS and styling files
    └── globals.css     # Global styles
```

## Architectural Patterns

### Component Organization
- **Components**: Reusable UI components in `src/components/`
- **Pages**: Route-based components in `src/pages/` (Next.js convention)
- **Styles**: Global and component-specific styles in `src/styles/`

### File Naming Conventions
- **Components**: PascalCase (e.g., `Navbar.tsx`)
- **Pages**: lowercase for routes (e.g., `index.tsx`)
- **Styles**: lowercase with hyphens (e.g., `globals.css`)

### Import Patterns
- Use path aliases: `@/components/ComponentName` instead of relative paths
- Import Next.js components: `import Link from 'next/link'`
- React imports: `import React from 'react'`

### Component Structure
- Functional components with TypeScript interfaces
- Export default for main component
- Use React.FC type annotation
- Props interface defined above component when needed

## Folder Expansion Guidelines
- **Components**: Group by feature or create subfolders for complex components
- **Pages**: Follow Next.js routing conventions (nested folders = nested routes)
- **Styles**: Consider component-specific CSS modules for larger projects
- **Utils/Lib**: Add `src/lib/` for utility functions and helpers
- **Types**: Add `src/types/` for shared TypeScript interfaces