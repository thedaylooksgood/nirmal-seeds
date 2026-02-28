# 🏛️ Enterprise Next.js Architecture Rules

## 🤖 SYSTEM DIRECTIVE FOR AI AGENTS
As an autonomous AI agent working in this workspace, you MUST strictly adhere to the following architectural guidelines before writing, planning, or modifying any code. Do not deviate from this structure under any circumstances.

---

## 1. 📂 Core Folder Structure (Feature-Driven)
We use a strictly feature-driven architecture located inside the `src/` directory.

* **`src/app/`**: ONLY for routing. 
  * NEVER put business logic, complex state, or heavy UI components here.
  * Files here should only be `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, etc.
  * Pages should simply import and render components from the `features/` directory.
* **`src/features/`**: The core of the application.
  * Group all logic by domain (e.g., `features/auth`, `features/video-player`, `features/billing`).
  * Each feature folder must be self-contained and include its own `components/`, `hooks/`, `api/`, and `utils/` if necessary.
* **`src/components/ui/`**: "Dumb" global UI components ONLY.
  * Put highly reusable, generic components here (Buttons, Inputs, Modals).
  * These components must NOT contain any app-specific business logic.
* **`src/lib/`**: Global utilities, database clients, and third-party configuration files.

---

## 2. ⚛️ Server vs. Client Components (React Server Components)
* **Default to Server:** Every component is a React Server Component (RSC) by default. ALWAYS fetch data on the server when possible.
* **Leaf Node Client Components:** Push `"use client"` directives as far down the component tree as possible (the "leaf" nodes). 
* Only use `"use client"` when you absolutely need interactivity (`onClick`, `useState`, `useEffect`, browser APIs).

---

## 3. 🎨 Styling Rules (Tailwind CSS)
* **Tailwind ONLY:** ALWAYS use Tailwind CSS for styling. 
* **NO CSS Files:** NEVER create custom `.css`, `.scss`, or CSS-in-JS files unless explicitly instructed to do so.
* **Dynamic Classes:** When conditionally joining Tailwind classes, ALWAYS use a utility function combining `clsx` and `tailwind-merge` (usually named `cn`).

---

## 4. 🧹 Clean Code & Imports
* **Absolute Imports:** NEVER use relative paths that go up multiple directories (e.g., `../../../components/Button`).
* ALWAYS use the configured path aliases (e.g., `import { Button } from '@/components/ui/button'`).
* **Environment Variables:** All environment variables must be validated at runtime using `Zod`. Do not use `process.env.VAR_NAME` directly in the UI without validation.

---

## 5. 🛠️ Step-by-Step Planning Rule
Whenever asked to build a new feature:
1. ALWAYS check this `architecture.md` file first.
2. Identify which domain the feature belongs to in the `src/features/` directory.
3. Write out a brief plan of which files you will create or modify before generating the code.