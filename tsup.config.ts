import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/PDFViewer.ts"],
  outDir: "dist",
  outExtension({ format }) {
    switch (format) {
      case "cjs":
        return { js: ".cjs" };
      case "esm":
        return { js: ".mjs" };
      default:
        return {};
    }
  },
  format: ["cjs", "esm"],
  splitting: false,
  bundle: true,
  dts: true,
  loader: {
    ".html": "text",
    ".css": "text",
    ".mjs": "text",
  },
});
