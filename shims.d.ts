declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<Record<string, any>, Record<string, any>, any>

  export default component
}

/**
 * @description this is a fix for the following ts error
 *
 * There are types at '/path/to/node_modules/@vuelidate/core/index.d.ts',
 *  but this result could not be resolved when respecting package.json "exports".
 *
 * The '@vuelidate/core' library may need to update its package.json or typings.
 *
 * @see https://github.com/microsoft/TypeScript/issues/52363
 * @see https://github.com/gxmari007/vite-plugin-eslint/pull/60
 */
declare module '@vuelidate/core' {
  export * from '@vuelidate/core/index.d.ts'
}
