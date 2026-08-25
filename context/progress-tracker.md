# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Editor Chrome (feature-specs/02-editor.md) — complete

## Current Goal

- Define the next implementation goal here.

## Completed

- Design system setup: `shadcn/ui` installed and configured (`components.json`, `app/globals.css` theme tokens); added Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea (`components/ui/*`); installed `lucide-react`; added `lib/utils.ts` with `cn()`. Dark-only theme tokens from `context/ui-context.md` wired into `globals.css` (`:root` custom properties + `@theme inline` mapping), shadcn semantic tokens (background/foreground/card/popover/primary/etc.) mapped onto the same palette, `<html>` carries a permanent `dark` class. Verified: `tsc --noEmit` clean, `next build` clean, smoke-tested all 7 components rendering with dark styling in the running dev server, then reverted `app/page.tsx` to its placeholder content.
- Editor chrome (feature-specs/02-editor.md): added `components/editor/editor-navbar.tsx` (fixed `h-14` top navbar, left/center/right sections, left section holds a sidebar-toggle `Button` swapping `PanelLeftOpen`/`PanelLeftClose` by `isSidebarOpen` state, `bg-surface` with a bottom `border-surface-border`) and `components/editor/project-sidebar.tsx` (absolutely positioned floating overlay that slides in from the left via `translate-x` transition without pushing sibling content, `Projects` header with close button, shadcn `Tabs` — My Projects / Shared — each with its own empty placeholder state, full-width `New Project` button with `Plus` icon pinned to the bottom). Both components take `isOpen`/`isSidebarOpen` + callback props and hold no internal open/close state. The existing `components/ui/dialog.tsx` (shadcn `Dialog` primitive) already satisfies the "dialog pattern" requirement — it consumes the app's semantic color tokens end to end and exposes `DialogTitle`, `DialogDescription`, and `DialogFooter`, so no new dialog file or foundation-component edit was needed. Verified: `tsc --noEmit` clean, `eslint .` clean, smoke-tested by temporarily wiring both components into `app/page.tsx` with local toggle state and driving it with a scripted Playwright session (sidebar open/close, both tabs, toggle icon swap) with zero console errors, then reverted `app/page.tsx` to its placeholder content.

## In Progress

- None.

## Next Up

- Wire `EditorNavbar` and `ProjectSidebar` into an actual editor route/layout (not yet defined in a feature spec).
- Define the next feature-spec unit (canvas surface, dialogs' real usage, etc.).

## Open Questions

- Add unresolved product or implementation questions here.

## Architecture Decisions

- Add decisions that affect the system design or data model.

## Session Notes

- Add context needed to resume work in the next session.
