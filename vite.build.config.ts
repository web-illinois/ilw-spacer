import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist/cdn",
        lib: {
            name: "ilw-spacer",
            entry: "ilw-spacer.ts",
            fileName: "ilw-spacer",
            formats: ["es"],
        },
        rollupOptions: {
            output: {
                assetFileNames: (chunkInfo) => {
                    if (chunkInfo.name === "style.css") return "ilw-spacer.css";
                    return "[name][extname]";
                },
            },
        },
    },
    server: {
        hmr: false,
    },
});
