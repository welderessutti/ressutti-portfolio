---
name: angular-safe-change
description: Safely analyze, propose and implement scoped Angular 21 changes in this repository. Use for component fixes, refactors, Signals migrations, routing changes, template changes and performance corrections. Do not use for simple explanations that require no repository inspection.
---

# Angular Safe Change

Follow the repository `AGENTS.md` before applying this workflow.

## Purpose

Make a narrowly scoped Angular change while preserving behavior, architecture, visual design, localization, SSG and hydration.

## Workflow

### 1. Inspect

Read:

- the target TypeScript file;
- its template and styles;
- directly related services, models, routes or parent components;
- relevant tests;
- project configuration only when needed.

Do not scan unrelated parts of the repository unless the task explicitly requests an audit.

### 2. Diagnose

Explain:

- current behavior;
- root cause;
- dependencies involved;
- whether the problem is local or architectural;
- SSG, hydration, i18n, accessibility and performance implications.

Do not infer behavior that can be verified from the repository.

### 3. Design

Choose the simplest correct Angular 21 solution.

When relevant:

- use Signals for synchronous reactive state;
- use `computed()` only when its dependencies are reactive;
- avoid `effect()` for state copying;
- avoid calculation methods and heavy getters in templates;
- preserve strict typing;
- preserve public component APIs unless change is explicitly authorized;
- preserve URL, locale and route behavior;
- avoid new dependencies.

Present alternatives only when they involve a meaningful trade-off.

### 4. Approval boundary

When the user requests a proposal first:

- do not edit files;
- show the proposed code or diff;
- list affected files;
- explain risks;
- provide a validation plan;
- end by waiting for explicit approval.

When implementation is already explicitly authorized, proceed without requesting redundant approval.

### 5. Implement

After authorization:

- make only the agreed changes;
- update TypeScript and templates consistently;
- remove obsolete imports and diagnostic logs;
- preserve naming and architecture unless the plan says otherwise;
- avoid unrelated formatting churn.

### 6. Validate

Run the relevant commands available in the repository, including build and focused tests.

Check:

- TypeScript compilation;
- Angular template compilation;
- unit tests;
- SSG and hydration safety;
- both locales when localization is affected;
- accessibility where the UI changes;
- final diff for unrelated modifications.

Never claim success for a command that was not executed.

### 7. Report

Summarize:

- files changed;
- root cause;
- implementation;
- trade-offs;
- checks executed and actual results;
- remaining risks or follow-up work.
