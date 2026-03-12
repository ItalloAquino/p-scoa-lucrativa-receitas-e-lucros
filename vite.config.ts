import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { writeFileSync, mkdirSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    {
      name: "generate-htaccess",
      closeBundle() {
        mkdirSync("dist/assets", { recursive: true });
        writeFileSync(
          "dist/assets/.htaccess",
          `
<FilesMatch "\\.js$">
    ForceType application/javascript
</FilesMatch>
<FilesMatch "\\.css$">
    ForceType text/css
</FilesMatch>
        `.trim()
        );
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
