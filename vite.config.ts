import path from 'node:path'
import type { ConfigEnv, UserConfig } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import UnoCSS from 'unocss/vite'
import react from '@vitejs/plugin-react-swc'

export default ({ mode }: ConfigEnv): UserConfig => {
  // eslint-disable-next-line node/prefer-global/process
  const root = process.cwd()

  const { VITE_BASE_URL } = loadEnv(mode, root)

  return defineConfig({
    base: '/',
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`,
      },
    },

    plugins: [UnoCSS(), react()],

    server: {
      host: true,
      proxy: {
        '/api/': {
          target: VITE_BASE_URL,
          changeOrigin: true,
        },
      },
    },

    build: {
      assetsDir: 'assets',
      sourcemap: true,
    },
  })
}
