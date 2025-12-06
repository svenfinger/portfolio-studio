import studio from '@sanity/eslint-config-studio';

export default [
  // Ignore generated types so lint stays focused on source files.
  {
    ignores: ['sanity.types.ts'],
  },
  ...studio,
  {
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
  },
];
