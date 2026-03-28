# CodixTask – Take-Home UI

A client information and transactions dashboard built with Angular 17.

## Requirements

- Node.js 18+
- Angular CLI: `npm install -g @angular/cli`

## Getting started

```bash
cd take-home-ui
npm install
ng serve
```

Navigate to `http://localhost:4200`. The app redirects to `/client` by default.

## Features

- **Client page** (`/client`) — displays client details in a dynamic form rendered from a field config. Editable fields have live validation (required, email format, minimum length). Read-only fields (account number, bank card) are clearly distinguished.
- **Transactions page** (`/transactions`) — displays all transactions in a table with live filtering by name or status. Amount is formatted as `1 500.00 BGN`, dates as `DD.MM.YYYY`. Each row has a Details button that opens a modal with the full transaction breakdown.
- **Modal** — built with native Angular and CSS only. Closes on the X button or by clicking the backdrop.

## Architectural decisions

**Standalone components throughout** — no NgModules. Each component, pipe, and the service are self-contained, which keeps imports explicit and co-located.

**Config-driven client form** — field definitions live in `config/config.ts` as a typed array (`ClientFieldConfig[]`). The template loops over them with `@for`, so adding or reordering fields requires no HTML changes.

**Custom pipes for formatting** — `AmountPipe` and `DateFormatPipe` are standalone pipes applied in the template. Formatting logic stays out of the component and is reusable.

**Template-driven forms** — used `FormsModule` with `ngModel` rather than reactive forms, since the form structure is static and validation requirements are straightforward. Validation state is read directly from the `ngModel` reference (`#input="ngModel"`).

**Getter for filtering** — `filteredTransactions` is a plain TypeScript getter. Angular's change detection calls it on every cycle when `filterQuery` changes, so no manual subscription or subject is needed.

**Modal via `@Input`/`@Output`** — the parent holds `selectedTransaction: Transaction | null`. Passing it as `@Input` keeps the modal stateless; the `(close)` output simply nulls the parent property, which removes the modal from the DOM via `@if`.
