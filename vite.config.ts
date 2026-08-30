import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const copyPracticalOutput = () => ({
  name: "copy-practical-output",
  closeBundle() {
    const source = path.resolve("praktikum/output");
    if (!fs.existsSync(source)) return;
    fs.cpSync(source, path.resolve("dist/praktikum/output"), {
      recursive: true,
      force: true
    });
  }
});

export default defineConfig({
  base: "/materi-td-data-mining/",
  plugins: [react(), copyPracticalOutput()]
});
