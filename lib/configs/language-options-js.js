import GLOBALS from 'globals';

export default {
  languageOptions: {
    ecmaVersion: `latest`,

    globals: {
      ...GLOBALS.vitest,
      ...GLOBALS.node,
    },

    sourceType: `module`,
  },
  name: `@muigui/code-style/language/javascript`,
};
