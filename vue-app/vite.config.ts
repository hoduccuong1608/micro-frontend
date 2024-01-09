import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: Number(process.env.PORT) || 3002 // Sử dụng biến môi trường cho cổng
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // Đường dẫn tuyệt đối tới thư mục 'src'
    }
  }
})
