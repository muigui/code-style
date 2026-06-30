export default {
  ignores: [
    `**/.eslintrc\\(\\.[^.]+)?\\(\\.c?js)?`,
    `coverage/**/*`,
    `dist/**/*`,
    `**/vitest.*?\\(\\.mts)?`,
    `node_modules/**/*`,
    `**/*.d.ts`,
  ],
  name: `@muigui/code-style/ignore`,
};
