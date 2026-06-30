import PLUGIN_ESLINT_JS from '@eslint/js';

import * as CONFIG from './configs/index.js';
import * as RULES from './rules/index.js';

export const CONFIG_RULES = {
  files: [
    `**/*.cjs`,
    `**/*.cjsx`,
    `**/*.js`,
    `**/*.jsx`,
    `**/*.mjs`,
    `**/*.mjsx`,
  ],
  name: `@muigui/code-style/rules/javascript`,
  rules: {
    ...PLUGIN_ESLINT_JS.configs.recommended.rules,

    ...RULES.ESLINT,
    ...RULES.CHECK_FILE,
    ...RULES.PERFECTIONIST,
    ...RULES.STYLISTIC,
  },
};

export * as CONFIG from './configs/index.js';
export * as RULES from './rules/index.js';

export default [
  CONFIG.IGNORE,
  CONFIG.LANGUAGE_JAVASCRIPT,
  CONFIG.PLUGINS,
  CONFIG.SETTINGS,

  CONFIG_RULES,
];
