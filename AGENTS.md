# AGENTS.md - NovaBroker Development Guide

## Project Overview

NovaBroker is a Russian-language brokerage/logistics website built with Nuxt 4 + Vue 3. It provides customs calculator services, news, and contact functionality for international trade/logistics consulting.

**Node.js requirement:** >=22.0.0

---

## Commands

### Development
```bash
npm run dev              # Start dev server with host binding
npm run build           # Production build
npm run generate        # Static site generation
npm run preview         # Preview production build
```

### Linting
```bash
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint errors automatically
```

### Testing
This project does not currently have a test framework configured. If adding tests:
- Use **Vitest** for unit tests (recommended for Nuxt/Vue projects)
- Run a single test file: `npx vitest run --test-name-pattern "test-name" path/to/test.spec.ts`
- Or use: `npx vitest path/to/test.spec.ts`

### Other
```bash
npm run postinstall     # Runs nuxt prepare (auto-installed after npm install)
```

---

## Code Style Guidelines

### General Conventions

- **Language:** Russian is the primary language for UI content
- **Encoding:** UTF-8
- **Indentation:** Tabs (not spaces)
- **Quotes:** Single quotes (`'`) for strings
- **ESLint:** Run `npm run lint` before committing

### Vue Components

1. **Script Setup:** Always use `<script setup lang="ts">`
2. **Props Interface:** Prefix with `IProps`
   ```vue
   <script setup lang="ts">
   interface IProps {
     type?: 'primary' | 'secondary' | 'outline';
     loading?: boolean;
   }

   const props = withDefaults(defineProps<IProps>(), {
     type: 'primary',
     loading: false,
   });
   </script>
   ```
3. **Component Organization:**
   - `app/components/sections/` - Page section components
   - `app/components/UI/` - Reusable UI components
   - `app/components/calculator/` - Calculator-specific components
   - `app/components/UI/Icons/` - Icon components
   - `app/components/UI/News/` - News-related components

4. **Template Style:**
   - Self-closing tags for empty elements are NOT required
   - Use kebab-case for attributes

5. **Styling:**
   - Use CSS variables from `app/assets/css/main.css`
   - Scoped styles: `<style lang="css" scoped>`
   - Avoid Tailwind unless specifically needed (project uses custom CSS)

### TypeScript

1. **Strict Typing:** Enable strict mode in tsconfig
2. **Interfaces:** Use `interface` over `type` for public APIs
3. **Avoid `any`:** Use `unknown` or proper generics instead
4. **Optional Props:** Use `?` operator, not `| undefined`

### File Naming

- **Vue components:** PascalCase (`Button.vue`, `NewsTable.vue`)
- **API routes:** kebab-case with method prefix (`mail.post.ts`, `currency.ts`)
- **Utils:** camelCase (`sendMailError.ts`, `formatDate.ts`)
- **Directories:** kebab-case (`app/components/sections/`, `server/api/`)

### API/Server Routes

1. **Error Handling:** Always wrap in try/catch
   ```typescript
   export default defineEventHandler(async (event) => {
     try {
       const body = await readBody(event);
       // logic
       return { status: 'ok' };
     } catch (e) {
       log('error', 'Error in /api/endpoint', e);
       throw e;
     }
   });
   ```

2. **Request Validation:** Use Zod for validation
   ```typescript
   import { z } from 'zod';
   
   const schema = z.object({
     mail: z.string().email(),
     phone: z.string().min(10),
     name: z.string().min(1),
   });
   ```

3. **Client Errors:** Use `createError` from Nuxt
   ```typescript
   throw createError({
     statusCode: 400,
     statusMessage: 'Not correct request'
   });
   ```

4. **Async/Await:** Always use `async/await` for handlers

### Imports

1. **Absolute Imports:** Use `~/` for app root, `@/` works too
   ```typescript
   import { sendMailError } from '~/server/utils/sendMailError';
   ```

2. **Nuxt Auto-imports:** Composables like `defineEventHandler`, `readBody`, `createError` are auto-imported

3. **Order:** Group imports logically (external, internal, local)

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `AppHeader.vue`, `NewsTable.vue` |
| Props | camelCase | `isLoading`, `userName` |
| Interfaces | PascalCase with `I` prefix | `IProps`, `IUser` |
| Variables | camelCase | `const mailBody = ...` |
| Constants | UPPER_SNAKE_CASE | `const MAX_RETRY_COUNT = 3` |
| CSS Variables | kebab-case | `--warm-beige`, `--dark-green` |

### CSS/Styling

1. **CSS Variables:** Define in `app/assets/css/main.css`
2. **Scoped Styles:** Always use `scoped` attribute
3. **Avoid Tailwind:** Unless explicitly required for rapid prototyping

---

## Project Structure

```
nuxt-app/
├── app/
│   ├── assets/css/         # Global CSS with variables
│   ├── components/         # Vue components
│   ├── composables/        # Vue composables
│   ├── layouts/            # Page layouts
│   ├── pages/              # Route pages
│   ├── plugins/            # Nuxt plugins
│   ├── public/             # Static assets
│   └── app.vue             # Root component
├── server/
│   ├── api/                # API endpoints
│   ├── tasks/              # Scheduled tasks
│   └── utils/              # Server utilities
├── nuxt.config.ts          # Nuxt configuration
├── package.json
└── tsconfig.json
```

---

## Common Tasks

### Adding a New Page
1. Create file in `app/pages/` (e.g., `about.vue`)
2. Use `<script setup lang="ts">` template
3. Add to navigation in `AppHeader.vue`

### Adding a New API Endpoint
1. Create file in `server/api/` (e.g., `users.get.ts`)
2. Use `defineEventHandler` with try/catch
3. Return JSON response

### Adding a Component
1. Place in appropriate directory under `app/components/`
2. Follow naming: `ComponentName.vue`
3. Use `<script setup lang="ts">` with `IProps` interface

---

## Debugging

- DevTools: Enabled in `nuxt.config.ts` (`devtools: { enabled: true }`)
- Server logs: Use `log('level', 'message', data)` from `#imports`
- API testing: Use `curl` or Postman against `http://localhost:3000/api/*`

---

## Deployment

- Deployment scripts in `.sh/` directory
- Scheduled currency updates via Nitro scheduled tasks (runs daily at 18:00)
- SSR enabled for SEO
