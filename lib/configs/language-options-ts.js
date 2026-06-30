import PARSER_TYPESCRIPT from '@typescript-eslint/parser';

import CONFIG_LANGUAGE_OPTIONS from './language-options-js.js';

export default {
  languageOptions: {
    ...CONFIG_LANGUAGE_OPTIONS.languageOptions,

    parser: PARSER_TYPESCRIPT,
    parserOptions: {
      allowDefaultProject: [
        `eslint.config.cjs`,
        `eslint.config.js`,
        `eslint.config.mjs`,
        `**/eslint.config.cjs`,
        `**/eslint.config.js`,
        `**/eslint.config.mjs`,
        `**/**/eslint.config.cjs`,
        `**/**/eslint.config.js`,
        `**/**/eslint.config.mjs`,
      ],
      createDefaultProgram: true,
      impliedStrict: true,
      noWarnOnMultipleProjects: true,
      project: [
        `tsconfig.eslint.json`,
        `**/tsconfig.eslint.json`,
        `**/**/tsconfig.eslint.json`,
      ],

      projectService: false,
    },
  },
  name: `${CONFIG_LANGUAGE_OPTIONS.name.replace(/javascript$/, `typescript`)}`,
};
