import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/Snake",
  plugins: [react()],
})

// import react from '@vitejs/plugin-react';

// export default {
//   plugins: [react()],
// };


