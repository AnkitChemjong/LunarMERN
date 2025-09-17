import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { tanstackRouter } from '@tanstack/router-plugin/vite'
dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    ,react()],
  root:'.',
  server:{port:process.env.PORT}

})
