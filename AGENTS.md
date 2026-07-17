# Ressutti Portfolio — Project Guidance

## Project overview

This repository contains a professional portfolio website built with Angular 21.

The application is already in an advanced stage. Preserve the existing architecture, conventions, behavior and visual design unless a task explicitly requires a change.

## Stack

- Angular 21
- Standalone components
- TypeScript strict mode
- Angular Signals
- Modern `input()` and `output()` APIs
- Angular Router
- Angular i18n with localized builds
- Locales:
  - `en-GB`, served under `/en-gb`
  - `pt-BR`, served under `/pt-br`
- SSG/prerendering and hydration
- Pure SSG/prerendered deployment
- Static preview served with `npm run preview:ssg`
- No production Node/Express server
- Tailwind CSS 4
- Vitest

## Architectural rules

- Follow the current project structure before proposing new folders or abstractions.
- Keep feature-specific code close to its feature.
- Shared code must be genuinely reusable.
- Prefer composition over inheritance.
- Keep components focused and small.
- Do not introduce NgModules.
- Do not introduce external dependencies without explicit approval.
- Do not change public URLs, route names or localized paths without explicit approval.
- Do not modify unrelated files.
- Do not perform opportunistic refactors outside the requested scope.

## Angular conventions

- Use APIs appropriate for Angular 21.
- Prefer `input()` and `output()` over decorator-based `@Input()` and `@Output()` in new or migrated code.
- Prefer Signals for local synchronous state.
- Use `computed()` for values derived from reactive dependencies.
- Do not use `effect()` merely to copy one Signal into another.
- Use RxJS when the problem is genuinely stream-based or when required by an Angular API.
- Do not call calculation or formatting methods directly from templates.
- Event handlers such as `(click)` and `(submit)` may call methods.
- Avoid expensive getters in templates.
- Do not access `window`, `document`, `localStorage` or other browser-only APIs without considering SSG and hydration.
- Use `DOCUMENT`, platform checks or an SSG-safe abstraction when browser APIs are necessary.
- Preserve strict typing and do not use `any` unless there is a documented, unavoidable reason.
- Prefer immutable and `readonly` declarations where appropriate.
- Add `ChangeDetectionStrategy.OnPush` only after verifying compatibility and actual benefit.

## Routing and localization rules

- Only the first route segment after the locale is translated.
- Everything after that first translated segment remains identical in both locales.

Examples:

- `/en-gb/projects/deedscash`
- `/pt-br/projetos/deedscash`

- `/en-gb/about`
- `/pt-br/sobre`

- `/en-gb/contact`
- `/pt-br/contato`

- Preserve subsequent path segments, query parameters and fragments when switching locale.
- The locale used to interpret the current route must represent the actual rendered build, not merely a saved user preference.
- Keep real `<a href>` navigation for links that move between localized builds unless the existing architecture changes explicitly.
- Unknown-route behavior currently falls back according to the wildcard route. Revisit locale switching for unknown routes when localized 404 pages are implemented.

## Accessibility, SEO and UI

- Preserve semantic HTML.
- Maintain keyboard navigation and visible focus states.
- Follow WCAG 2.2 where applicable.
- Preserve localized metadata and SEO behavior.
- Avoid visual changes unless explicitly requested.
- Follow the existing responsive and mobile-first design.

## Current development phase

The project is currently focused on structure and architecture.

Until this phase is explicitly declared complete:

- Do not report missing or incomplete translations as review findings.
- Ignore hardcoded user-facing text unless it causes a functional or accessibility issue unrelated to localization.
- Do not report missing image assets, placeholder image paths or incomplete image content.
- Do not report placeholder or incomplete external URLs.
- Continue reviewing internal application links and routes, because they affect application behavior.
- Continue reviewing image markup when it affects layout stability, accessibility or performance, but ignore the absence of the final asset itself.
- Continue preserving the existing i18n architecture; do not remove localization support or introduce patterns that would make localization harder later.
- Do not implement translations, final images or external links unless explicitly requested.

## Working process

For complex, architectural or potentially risky tasks:

1. Inspect the relevant implementation and directly related files.
2. Explain the current behavior and root cause.
3. Present the recommended solution and relevant alternatives.
4. Identify files that would change.
5. Describe risks and validation steps.
6. Wait for explicit authorization before editing files when the user asks for proposal-only work.

For small, clearly scoped and explicitly authorized tasks, implementation may proceed directly.

Do not claim that a command, test or build passed unless it was actually executed successfully.

## Validation

After TypeScript or template changes, run the relevant available checks.

Primary commands:

```bash
npm run build
npm test
```
