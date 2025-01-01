# Modern Portfolio Website

A sophisticated, minimalist portfolio website showcasing modern web development practices. Built with Nuxt 3 and PrimeVue, this project demonstrates expertise in contemporary front-end development while maintaining a focus on performance, accessibility, and user experience.


## Technical Overview

### Core Features

- 🎨 Sleek, minimalist design with dark mode support
- 📱 Mobile-first, responsive layout
- ⚡️ Server-side rendering (SSR) for optimal performance
- 🔒 Type-safe development with TypeScript
- 🎯 Component-driven architecture
- 🌐 REST API integration with Neon PostgreSQL
- 🔄 Smooth transitions and animations
- 🎁 Rich interactive components using PrimeVue

### Technology Stack

#### Frontend

- **Framework**: Nuxt 3 (v3.14)
- **UI Components**: PrimeVue 4.2
- **Styling**:
  - Tailwind CSS 3.4
  - CSS3 with custom animations
  - PrimeIcons for iconography
- **State Management**: Vue 3 Composition API with custom composables
- **Motion**: GSAP for advanced animations

#### Backend

- **Database**: Neon PostgreSQL (serverless)
- **ORM**: Drizzle ORM
- **API**: Nuxt server handlers
- **Edge Config**: Vercel Edge Config for runtime configuration

#### Development Tools

- **Package Manager**: pnpm 9.15
- **Type Checking**: TypeScript 5.7
- **Code Quality**:
  - ESLint 9.16 with @antfu/eslint-config
  - Prettier 3.4
  - Husky for Git hooks
- **Build Tools**: Vite (via Nuxt)

## Project Structure

```
modern-portfolio/
├── components/           # Reusable Vue components
│   ├── layout/          # Layout components (Navbar, notifications)
│   └── ui/              # UI components (ProjectCard, TechStack, etc.)
├── composables/         # Shared composition logic
├── layouts/             # Page layouts
├── pages/              # Route pages
├── server/             # Backend API and database
│   ├── api/            # API endpoints
│   └── db/             # Database configuration and schema
├── public/             # Static assets
└── types/              # TypeScript type definitions
```

## Key Features

### Responsive Design

- Mobile-first approach with adaptive layouts
- Custom mobile navigation with smooth transitions
- Responsive image handling with optimized loading

### User Experience

- Dark mode with system preference detection
- Smooth page transitions
- Progressive loading states
- Mobile-specific alerts and notifications

### Performance Optimization

- Server-side rendering for initial page loads
- Optimized asset loading
- Efficient state management with Vue 3 Composition API
- Smart caching strategies for API calls

### Developer Experience

- Type-safe development with TypeScript
- Modular component architecture
- Custom composables for shared logic
- Consistent code style with ESLint and Prettier

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm preview

# Run linting
pnpm lint

# Format code
pnpm format
```

## Database Operations

```bash
# Generate migrations
pnpm db:generate

# Run migrations
pnpm db:migrate

# Push schema changes
pnpm db:push

# Open database UI
pnpm db:studio
```

## Environment Configuration

The application uses various environment variables for configuration:

- `DATABASE_URL`: Neon PostgreSQL connection string
- `ADMIN_SECRET`: Admin authentication secret
- `VERCEL_ENV`: Deployment environment
- `ENABLE_ADMIN`: Feature flag for admin functionality

## Deployment

The application is configured for deployment on Vercel with:

- Automatic preview deployments for PRs
- Environment-specific builds
- Edge configuration support
- Serverless PostgreSQL integration
