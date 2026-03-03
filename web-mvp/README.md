# web-mvp

Minimal Next.js (App Router) app with a development-only protected
`/projects` CRUD.

## Features

- Project model: `{ id: string; name: string; createdAt: string }`
- File persistence in `src/data/projects.json`
- Route Handlers for API endpoints
- Dev auth using `DEV_PASSWORD` in `.env`
- `/projects` UI to list, create, and delete projects
- Tests: API + UI (and one extra data-layer test)

## Setup

```bash
npm install
cp .env.example .env
# set DEV_PASSWORD in .env
npm run dev
```

Open `http://localhost:3000/projects`.

## API

- `GET /api/projects` -> list projects
- `POST /api/projects` -> create project with `{ "name": "..." }`
- `DELETE /api/projects/:id` -> delete by id
- `POST /api/login` -> validate password and set auth cookie

## Auth behavior

- Middleware protects `/projects` and `/api/projects/*`.
- If `DEV_PASSWORD` is not set, auth is bypassed for local iteration.
- Unauthorized browser navigation redirects to `/login`.
- Unauthorized API requests return `401`.

## Project structure

- `src/data/projects.json`: persisted data
- `src/lib/projects.ts`: file-backed CRUD helpers
- `src/lib/dev-auth.ts`: shared auth helpers
- `src/app/api/projects/*`: Route Handlers
- `src/app/projects/page.tsx`: CRUD UI
- `src/app/login/page.tsx`: login page
- `src/middleware.ts`: route protection

## Tests and lint

```bash
npm test
npm run lint
```

Current test files:

- `__tests__/projects.api.test.ts`
- `__tests__/projects.page.test.tsx`
- `__tests__/projects.lib.test.ts` (extra)

## Security note

This auth approach is intentionally simple and for development/demo only.
