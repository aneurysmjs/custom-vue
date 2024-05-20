/// <reference types="vitest" />

import path from 'node:path'
import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'

const dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(dirname, 'src')}/`,
    },
  },
  plugins: [
   
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      dts: true,
      dirs: [
        './src/composables/**',
        './src/utils/**',
      ],
    }),

   
    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    UnoCSS(),

    
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: path.resolve(dirname, 'config/vitest/setup.config.ts'),
  },
})
