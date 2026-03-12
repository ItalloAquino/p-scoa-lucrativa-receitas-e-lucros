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
        console.log("Generating .htaccess files...");
        // .htaccess raiz — roteamento React
        writeFileSync(
          "dist/.htaccess",
          `Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]

# MIME types
AddType application/javascript .js .mjs
AddType text/css .css
AddType image/svg+xml .svg
AddType image/x-icon .ico
AddType application/json .json`.trim()
        );
        console.log("Root .htaccess generated.");

        // .htaccess assets — MIME types
        mkdirSync("dist/assets", { recursive: true });
        writeFileSync(
          "dist/assets/.htaccess",
          `<FilesMatch "\\.js$">
    ForceType application/javascript
</FilesMatch>
<FilesMatch "\\.css$">
    ForceType text/css
</FilesMatch>`.trim()
        );
        console.log("Assets .htaccess generated.");
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
