import PLUGIN_ESLINT_JS from '@eslint/js';
import PLUGIN_TYPESCRIPT from '@typescript-eslint/eslint-plugin';

import * as CONFIG from './configs/index.js';
import * as RULES from './rules/index.js';

export const CONFIG_RULES = {
  files: [
    `**/*.cts`,
    `**/*.ctsx`,
    `**/*.mts`,
    `**/*.mtsx`,
    `**/*.ts`,
    `**/*.tsx`,
  ],
  name: `@muigui/code-style/rules/typescript`,
  rules: {
    ...PLUGIN_ESLINT_JS.configs.recommended.rules,

    ...PLUGIN_TYPESCRIPT.configs.recommended.rules,
    ...PLUGIN_TYPESCRIPT.configs[`recommended-type-checked`].rules,

    ...RULES.ESLINT,
    ...RULES.CHECK_FILE,
    ...RULES.PERFECTIONIST,
    ...RULES.STYLISTIC,
    ...RULES.TYPESCRIPT,
  },
};

export * as CONFIG from './configs/index.js';
export * as RULES from './rules/index.js';

export default [
  CONFIG.IGNORE,
  CONFIG.LANGUAGE_TYPESCRIPT,
  CONFIG.PLUGINS,
  CONFIG.SETTINGS,

  CONFIG_RULES,
];
