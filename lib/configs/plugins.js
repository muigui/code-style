import PLUGIN_ESLINT_JS from '@eslint/js';
import PLUGIN_STYLISTIC from '@stylistic/eslint-plugin';
import PLUGIN_TYPESCRIPT from '@typescript-eslint/eslint-plugin';
import PLUGIN_CHECK_FILE from 'eslint-plugin-check-file';
import PLUGIN_PERFECTIONIST from 'eslint-plugin-perfectionist';

export default {
  name: `@muigui/code-style/plugins`,
  plugins: {
    '@stylistic': PLUGIN_STYLISTIC,
    '@typescript-eslint': PLUGIN_TYPESCRIPT,
    'check-file': PLUGIN_CHECK_FILE,
    eslint: PLUGIN_ESLINT_JS,
    // 'import': fixupPluginRules(PLUGIN_IMPORT),
    perfectionist: PLUGIN_PERFECTIONIST,
  },
};
