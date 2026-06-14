# AGENT.md — Antigravity IDE Development Guidelines

This document establishes the architectural rules, coding standards, and agentic workflows for engineering a high-performance Single Page Application (SPA). 

## 🧠 Core Tech Stack Boundary
* **Framework:** Next.js (Static Export / Client-Side SPA Mode)
* **Language:** TypeScript (Strict Type-Safety)
* **Styling:** Tailwind CSS v4 (CSS-first engine via `@import "tailwindcss";`)
* **Animation:** Motion (Formerly Framer Motion) — Selected for optimized layout projections and seamless React hook-based orchestrations.

---

## 🚀 1. Antigravity IDE Context & Workflow Rules

Antigravity IDE relies on an agentic, artifact-first engineering pipeline. To prevent silent failures, context drifts, or chaotic implementation plans, follow these workspace boundaries:

* **Artifact-Driven Architecture:** The agent must emit an `Implementation Plan` and a `Task List` before editing code. Do not allow execution until the implementation bounds match this markdown file.
* **Fractal Memory Isolation:** All rule updates, dynamic agent skills, and prompt injection countermeasures live inside the workspace scope (`.agent/`). Never pollute global scopes.
* **Self-Healing Cycle:** If a Next.js client-side build or TypeScript checking step fails, the agent must run internal lint routines via the `Antigravity CLI` sandbox before presenting code diffs to the human user.
* **Screenshots for Layout Verification:** Every time an animation loop or Tailwind layout structure is altered, the agent must leverage Antigravity's window snapshot tool to verify visual integrity.

---

## ⚡ 2. Next.js SPA Execution Bounds

Because this is a strict Single Page Application (SPA) built inside Next.js, traditional Server-Side Rendering (SSR) paradigms are prohibited.

* **SPA Enforcement:** Every routing wrapper, view layer, and interaction node must operate strictly on the client side.
* **File Directives:** Every single page or shared component inside the `app/` directory **must** begin with the `"use client";` boundary directive.
* **Static Export Strategy:** Ensure `next.config.ts` forces a true SPA payload output:
    ```typescript
    import type { NextConfig } from "next";

    const nextConfig: NextConfig = {
      output: "export", // Forces client-only SPA static generation
      distDir: "dist",
      reactStrictMode: true,
    };

    export default nextConfig;
    ```
* **Routing Limitations:** Use `next/navigation` exclusively for client-side viewport changes. Avoid server-side dynamic routes `[id]` that rely on runtime server evaluation. Leverage query states or optional catch-all parameters client-side.

---

## 🎨 3. Tailwind CSS v4 Blueprint

Tailwind CSS v4 introduces a revamped CSS-first configuration model discarding the legacy `tailwind.config.js`. 

* **Zero Configuration Setup:** Do not create a JavaScript/TypeScript config file for Tailwind. Define modifications directly within the global CSS file using native CSS variables under `@theme`.
* **Global Layout Entry (`src/app/globals.css`):**
    ```css
    @import "tailwindcss";

    @theme {
      --color-brand-primary: #0f172a;
      --color-brand-accent: #38bdf8;
      
      /* v4 dynamic spacing engine hooks automatically */
      --spacing-fluid-sm: clamp(1rem, 2vw, 1.5rem);
    }
    ```
* **Modern Variant Utilization:** Prefer native v4 features such as container queries, 3D transforms (`transform-3d`, `rotate-y-180`), and target attributes cleanly without extra plugins:
    ```tsx
    // Correct v4 Implementation using inline container queries and native attributes
    export function MetricCard() {
      return (
        <div className="@container border border-neutral-200 p-4 rounded-xl shadow-xs">
          <div className="block @sm:flex @sm:justify-between data-active:border-brand-accent">
            <p className="text-sm font-medium">System Metrics</p>
          </div>
        </div>
      );
    }
    ```

---

## 🎬 4. Motion Animation Conventions

To achieve performance-tuned micro-interactions and layout transitions, **Motion** is deployed as our designated animation pipeline.

* **Layout Animations:** Always use layout keys (`layout` or `layoutId`) when transforming UI views dynamically to permit layout projection mapping without manual pixel calculating.
* **Exit / Entrance Orchestration:** Wrap dynamic UI fragments inside `<AnimatePresence>` layers to track mounting lifecycles cleanly.
* **Standard Performance Configurations:**
    ```tsx
    import { motion, AnimatePresence } from "motion/react";

    interface ViewWrapperProps {
      isVisible: boolean;
      children: React.ReactNode;
    }

    export function ViewWrapper({ isVisible, children }: ViewWrapperProps) {
      return (
        <AnimatePresence mode="wait">
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }} // Custom cubic bezier
              className="w-full h-full bg-white text-brand-primary"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      );
    }
    ```

---

## 🛠️ 5. TypeScript & Component Structuring Rules

* **Explicit Contract Declarations:** Explicitly type-declare all component props using the structural `interface` primitive. Do not allow implicit `any` parameter leaks.
* **Pure Functions:** Components should represent predictable transformations of properties to visual rendering frames. Encapsulate global client logic within reusable React Hooks (`hooks/useX.ts`).
* **Barrel Export Restrictions:** To prevent tree-shaking degradation and dependency looping, avoid deep directory level barrel files (`index.ts`). Point import paths explicitly to explicit module names.

---

## 🛑 6. Critical Implementation Guardrails (Anti-Hallucination)

* **No Outdated Utility Classes:** Do not map outmoded Tailwind v3 variants like `outline-none` or `shadow`. Replace immediately with v4 equivalents (`outline-hidden`, `shadow-sm`).
* **No Server Infrastructure Hooks:** Fail instantly if the implementation introduces `getServerSideProps`, `getStaticProps`, or uses server middleware.
* **No Unmanaged State Collisions:** When using Motion coordinates alongside layout changes, always keep the component state synchronized. Do not direct-mutate standard DOM nodes outside of the Virtual DOM loop.