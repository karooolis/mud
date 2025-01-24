import { defineConfig } from "tsup";
// import packageJson from "./package.json";

export default defineConfig((opts) => ({
  outDir: "dist/tsup",
  entry: ["src/exports/index.ts", "src/exports/internal.ts", "src/bin/deploy-local-prereqs.ts"],
  target: "esnext",
  format: ["esm", "cjs"],
  sourcemap: true,
  minify: true,
  // Because we're injecting CSS via shadow DOM, we'll disable style injection and load CSS as a base64 string.
  // TODO: figure out how to do this conditionally for only specific imports?
  injectStyle: false,
  noExternal: ["@ark/util"],
  loader: { ".css": "text" },
  dts: true,
  // don't clean during watch mode to avoid removing
  // previously-built DTS files, which other build tasks
  // depend on
  clean: !opts.watch,
}));
