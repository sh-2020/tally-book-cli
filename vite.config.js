import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import styleImport from 'vite-plugin-style-import'
import path from 'path'
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), styleImport(
    {
      libs: [
        {
          libraryName: 'zarm',
          esModule: true,
          resolveStyle: (name)=> {
            return `zarm/es/${name}/style/css`;
          },
        }
      ]
    }
  )],
  css: {
    modules: {
      localsConvention: 'dashesOnly'
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      }
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7001/api/',
        changeOrigin: true,
        rewrite: path =>path.replace(/^\/api/, '')
      }
    },
    // https: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // src 路径
      'utils': path.resolve(__dirname, 'src/utils'),
      'config': path.resolve(__dirname, 'src/config') 
    }
  },
  build: {
    rollupOptions: {
      plugins: [
        dynamicImportVars()
      ],
    },
  },
})
