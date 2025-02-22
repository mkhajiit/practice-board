import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
// 포트번호 설정
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],
});
