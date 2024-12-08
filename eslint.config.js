import antfu from '@antfu/eslint-config'

export default antfu({
  files: ['**/*.{js,jsx,ts,tsx,vue,json}'],

  ignores: [
    '**/node_modules/**',
    '**/dist/**',
    '.nuxt',
    '.output',
    '*.log',
    '.env',
  ],

  vue: true,
  typescript: true,

  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',
    'vue/require-default-prop': 'off',
    'no-unused-vars': ['warn', {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_'
    }],
  }
})
