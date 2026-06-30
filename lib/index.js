import * as CONFIG from './configs/index.js';
import {
  CONFIG_RULES as CONFIG_RULES_JAVASCRIPT,
} from './javascript.js';
import {
  CONFIG_RULES as CONFIG_RULES_TYPESCRIPT,
} from './typescript.js';

export * as CONFIG from './configs/index.js';
export * as RULES from './rules/index.js';

export default [
  CONFIG.IGNORE,
  CONFIG.LANGUAGE_TYPESCRIPT,
  CONFIG.PLUGINS,
  CONFIG.SETTINGS,

  CONFIG_RULES_JAVASCRIPT,
  CONFIG_RULES_TYPESCRIPT,
];
