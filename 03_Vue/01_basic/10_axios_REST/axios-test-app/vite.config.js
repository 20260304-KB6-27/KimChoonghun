import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server : { /// 개발 시에만 적용된다. (중요)
    proxy : {
      '/api': {
        target: 'http://localhost:3000', // 실제 서버 입력
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // /api/todos/1이 들어오면 /todos/1로 api를 빼고 전달한다.
      }
    }
  }
})
