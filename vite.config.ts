import path from 'node:path'
import process from 'node:process'
import react from '@vitejs/plugin-react-swc'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    define: {
      'import.meta.env.REACT_APP_UNSPLASH_ACCESS_KEY': JSON.stringify(env.REACT_APP_UNSPLASH_ACCESS_KEY),
      'import.meta.env.REACT_APP_AUTHOR': JSON.stringify(env.REACT_APP_AUTHOR),
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  }
})
