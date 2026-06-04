# Artz Interior Bizleap

This workspace contains the `artifacts/artz-interior` frontend application built with Vite and React.

## Run locally

1. Install dependencies:

```bash
pnpm install
```

2. Start the Artz Interior dev server:

```bash
pnpm run dev:artz-interior
```

Or use the shortcut command:

```bash
pnpm start
```

3. Open the site in your browser:

```text
http://localhost:4173/
```

## Notes

- The root script runs the `artifacts/artz-interior` app directly.
- If PowerShell blocks `pnpm` scripts, use `pnpm.cmd` or run in a supported shell.
- The app uses `artifacts/artz-interior` as the source package and serves static assets from `artifacts/artz-interior/public/assets`.

## What changed

- Added a workspace-level `start` script for direct startup.
- Added `dev:artz-interior` to launch the Vite app on port `4173`.
- Updated client and project counts to `600+` clients and `650+` projects.
