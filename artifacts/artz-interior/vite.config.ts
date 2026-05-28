import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const isReplit = process.env.REPL_ID !== undefined;
const isProduction = process.env.NODE_ENV === "production";

// Replit workflow injects PORT and BASE_PATH.
// On Vercel / any CI host we fall back to safe defaults.
const port = Number(process.env.PORT ?? "3000");
const basePath = process.env.BASE_PATH ?? "/";

export default defineConfig(async () => {
  const plugins: import("vite").Plugin[] = [react(), tailwindcss()];

  // Replit-only plugins — never loaded outside the Replit sandbox
  if (isReplit) {
    try {
      const { default: runtimeErrorOverlay } = await import(
        "@replit/vite-plugin-runtime-error-modal"
      );
      plugins.push(runtimeErrorOverlay());

      if (!isProduction) {
        const { cartographer } = await import(
          "@replit/vite-plugin-cartographer"
        );
        plugins.push(
          cartographer({ root: path.resolve(import.meta.dirname, "..") })
        );

        const { devBanner } = await import("@replit/vite-plugin-dev-banner");
        plugins.push(devBanner());
      }
    } catch {
      // Replit plugins are optional — silently skip if unavailable
    }
  }

  return {
    base: basePath,
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "src"),
        "@assets": path.resolve(
          import.meta.dirname,
          "..",
          "..",
          "attached_assets"
        ),
      },
      dedupe: ["react", "react-dom"],
    },
    root: path.resolve(import.meta.dirname),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist"),
      emptyOutDir: true,
    },
    server: {
      port,
      strictPort: true,
      host: "0.0.0.0",
      allowedHosts: true,
      fs: { strict: false },
    },
    preview: {
      port,
      host: "0.0.0.0",
      allowedHosts: true,
    },
  };
});
