import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      "https://notes.shahzebabro.com",
      "https://www.notes.shahzebabro.com",
      "notes.shahzebabro.com",
      "www.notes.shahzebabro.com",
      "localhost",
      "127.0.0.1",
    ],
    port: 3002,
  },
});
