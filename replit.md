# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### Stones Landscaping Services (`artifacts/stones-landscaping`)
- **Type**: React + Vite (frontend-only, no backend)
- **Preview path**: `/`
- **Purpose**: Professional business website for Stones Landscaping Services Inc.
- **Sections**: Hero, About, Services (4 categories), Why Choose Us, Contact form, Footer
- **Company**: Stones Landscaping Services Inc., Brampton ON — Joban Dhot, Director
- **Contact**: 647-608-1499 | stones6478@gmail.com | 42 Marlow Place, Brampton ON L6S 2X3
