import antfu from '@antfu/eslint-config'
import unocss from '@unocss/eslint-config/flat'
import perfectionist from 'eslint-plugin-perfectionist'
import eslintPluginReadableTailwind from 'eslint-plugin-readable-tailwind'

export default antfu({}, unocss, {
  plugins: {
    perfectionist,
    'readable-tailwind': eslintPluginReadableTailwind,
  },
  rules: {
    // Eslint
    'curly': 'off',
    // Vue
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    // Style
    'style/brace-style': 'off',
    // Perfectionist
    'perfectionist/sort-interfaces': 'error',
    // readable-tailwind
    // enable all recommended rules to warn
    ...eslintPluginReadableTailwind.configs.warning.rules,
    // enable all recommended rules to error
    ...eslintPluginReadableTailwind.configs.error.rules,
    //
    'unocss/order': 'off',
  },
})
