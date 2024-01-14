module.exports = {
  env: {
    node: true,
    es2022: true,
  },
  extends: [
    'plugin:astro/recommended',
    'plugin:astro/jsx-a11y-recommended',
    // Sometimes we will prefer strict
    // 'plugin:astro/jsx-a11y-strict',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:svelte/recommended'],
      parserOptions: {
        parser: {
          // Specify a parser for each lang.
          ts: '@typescript-eslint/parser',
          js: 'espree',
          typescript: '@typescript-eslint/parser',
        },
      },
      // 👉🏽 https://github.com/sveltejs/eslint-plugin-svelte?tab=readme-ov-file#white_check_mark-rules
      rules: {
        'svelte/no-target-blank': 'error',
        'svelte/button-has-type': 'warn',
        'svelte/html-self-closing': [
          'error',
          {
            void: 'always',
            normal: 'never',
            component: 'always',
            svelte: 'always',
          },
        ],
      },
    },
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        'astro/no-unused-css-selector': 'error',
        'astro/prefer-object-class-list': 'error',
      },
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/ban-tslint-comment': 'error',
      },
    },
    {
      // Define the configuration for `<script>` tag.
      // Script in `<script>` is assigned a virtual file name with the `.js` extension.
      files: ['**/*.astro/*.js', '*.astro/*.js'],
      parser: '@typescript-eslint/parser',
    },
  ],
}
