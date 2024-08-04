import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    base:
      command === "build"
        ? "https://illualex.github.io/Final-Frontend-UTN-TM"
        : "/",
  };
});
