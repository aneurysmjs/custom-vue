import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  presetWind,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'],
    ['text-theme', 'text-black dark:text-white'],
    ['focus-ring-theme', 'focus:ring-teal-400 dark:focus:ring-sky-400'],
    ['focus-visible-theme', 'focus-visible:border-teal-500 dark:focus-visible:border-sky-400'],
    ['placeholder-theme', 'placeholder:text-gray-800 dark:placeholder:text-gray-300'],
    ['focus-border-theme', 'focus:border-teal-400 dark:focus:border-sky-400'],

    ['base-input', 'w-full appearance-none border rounded leading-tight shadow border-transparent focus-outline-none bg-gray-100 dark:bg-gray-700  pl-3 pr-8 py-2 placeholder-theme focus-border-theme focus-ring-theme focus-visible-theme'],
  ],
  presets: [
    presetWind(),
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],

})
