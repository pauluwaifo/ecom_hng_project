import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import proxyConfig from './proxyConfig'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: proxyConfig,
  },
})
