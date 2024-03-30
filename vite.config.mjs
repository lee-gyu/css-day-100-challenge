import { defineConfig } from "vite";

import { existsSync } from "fs";
import { resolve } from "path";

// if exists each day(1~100) file, then add to htmlEntries
const pageFiltered = Array.from({ length: 100 }, (_, id) => `./pages/day${id}/index.html` ).filter((path) => existsSync(path));
const htmlEntries = Object.assign( { index: "./index.html" }, pageFiltered);

export default defineConfig({
  build: {
    outDir: ".dist",
    rollupOptions: {
      input: {
        ...htmlEntries
      },
    }
  }
});