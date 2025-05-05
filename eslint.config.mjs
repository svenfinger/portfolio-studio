import studio from '@sanity/eslint-config-studio';

export default [
  ...studio,
  {
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
  },
];
