module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/react-in-jsx-scope': 'off',
    indent: ['warn', 2, { SwitchCase: 1 }],
    semi: ['warn', 'never'],
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    quotes: ['warn', 'single'],
    'comma-dangle': ['warn', 'always-multiline'],
    'eol-last': ['warn', 'always'],
    'react/jsx-max-props-per-line': ['warn', { maximum: 5, when: 'always' }],
    'react/jsx-first-prop-new-line': ['warn', 'multiline'],
    'react/jsx-wrap-multilines': ['warn', { declaration: 'parens-new-line' }],
    'no-multiple-empty-lines': ['warn', { max: 2 }],
    'react/jsx-props-no-multi-spaces': 'warn',
  },
}
