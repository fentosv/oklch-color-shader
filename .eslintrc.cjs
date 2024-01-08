module.exports = {
  env: {
    node: true,
    es2022: true,
  },
  parserOptions: {
    project: './tsconfig.json',
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
    {
      files: ['*.md', '*.mdx'],
      extends: ['plugin:mdx/recommended'],
      settings: {
        'mdx/code-blocks': true,
      },
      rules: {
        '@typescript-eslint/no-unused-vars': false,
      },
    },
  ],
}
