const builtinModules = require('module').builtinModules

const builtinRE = '^(' + builtinModules.join('|') + ')(/|$)'

/**
 * @type {import('@types/eslint').Linter.Config}
 */
module.exports = {
  plugins: ['jsx-a11y', 'simple-import-sort', 'import', 'unused-imports', 'tailwindcss'],
  extends: [
    'eslint:recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    // Picks up our custom tailwind helper
    tailwindcss: {
      callees: ['tw'],
    },
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    'prettier/prettier': 'warn',
    'no-unused-vars': 'off',
    'no-restricted-syntax': 'off',
    'no-labels': 'off',
    'vars-on-top': 'off',
    'no-unused-labels': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    'react/react-in-jsx-scope': 'off',
    // tailwind eslint plugin
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/classnames-order': [
      'warn',
      {
        callees: ['tw', 'classNames', 'clsx'],
        skipClassAttribute: false,
        classRegex: '(c|C)lass(Name)?$',
      },
    ],
    // import sorts
    'import/first': 'warn',
    'import/newline-after-import': 'warn',
    'import/no-duplicates': 'warn',
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // Side effect imports first
          ['^\\u0000'],
          // Node.js builtins
          ['^node:.*$', builtinRE],
          // React first, then any other packages
          ['^react$', '^@?\\w'],
          // Absolute imports (doesn"t start with .)
          ['^(\\.|@)prisma', '^[^.]', '^src/'],
          // Relative imports
          [
            // ../whatever/
            '^\\.\\./(?=.*/)',
            // ../
            '^\\.\\./',
            // ./whatever/
            '^\\./(?=.*/)',
            // Anything that starts with a dot
            '^\\.',
          ],
          // Asset imports
          ['^.+\\.(html|scss|sass|css|json|gql|graphql|md|jpg|png)$'],
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['@typescript-eslint'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-extra-semi': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
      },
    },
  ],
}
