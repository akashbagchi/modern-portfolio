import antfu from '@antfu/eslint-config'

export default antfu(
  {
    vue: true,
    typescript: true,
  },
  {
    files: ['**/*.{js,jsx,ts,tsx,vue,json}'],
    ignores: ['**/node_modules/**', '**/dist/**', '.nuxt', '.output', '*.log', '.env'],

    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      'vue/require-default-prop': 'off',
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'node/prefer-global/process': 'off',
      'no-console': 'warn',
      'func-style': 'off',
    },
  },
)
