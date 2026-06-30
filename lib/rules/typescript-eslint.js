import NAMING_CONVENTIONS from './ts-naming-conventions.js';

// @typescript-eslint rules
export default {
  '@typescript-eslint/array-type': [ `error`, {
    "default": `array-simple`,
  } ],
  '@typescript-eslint/await-thenable': `off`,
  '@typescript-eslint/ban-ts-comment': [ `warn`, {
    'ts-ignore': `allow-with-description`,
    'ts-nocheck': `allow-with-description`,
  } ],
  '@typescript-eslint/consistent-type-exports': `warn`,
  '@typescript-eslint/consistent-type-imports': [ `warn`, {
    fixStyle: `separate-type-imports`,
    prefer: `type-imports`,
  } ],
  '@typescript-eslint/default-param-last': `off`,
  //  '@typescript-eslint/explicit-function-return-type': `off`,
  '@typescript-eslint/explicit-module-boundary-types': `off`,
  '@typescript-eslint/naming-convention': [ `warn`, ...NAMING_CONVENTIONS ],
  '@typescript-eslint/no-empty-function': `off`,
  '@typescript-eslint/no-empty-object-type': `off`,
  '@typescript-eslint/no-explicit-any': `warn`,
  '@typescript-eslint/no-floating-promises': [ `warn`, {
    allowForKnownSafeCalls: [ {
      from: `package`,
      name: [ `describe`, `it`, `suite`, `test` ],
      'package': `node:test`,
    } ],
  } ],
  '@typescript-eslint/no-import-type-side-effects': `error`,
  '@typescript-eslint/no-inferrable-types': `warn`,
  '@typescript-eslint/no-redeclare': `off`,
  '@typescript-eslint/no-redundant-type-constituents': `warn`,
  '@typescript-eslint/no-shadow': `off`,
  '@typescript-eslint/no-unnecessary-type-assertion': `off`,
  '@typescript-eslint/no-unsafe-argument': `off`,
  '@typescript-eslint/no-unsafe-assignment': `off`,
  '@typescript-eslint/no-unsafe-call': `off`,
  '@typescript-eslint/no-unsafe-declaration-merging': `off`,
  '@typescript-eslint/no-unsafe-member-access': `off`,
  '@typescript-eslint/no-unsafe-return': `off`,
  '@typescript-eslint/no-unused-expressions': `warn`,
  '@typescript-eslint/no-unused-vars': [ `warn`, {
    argsIgnorePattern: `^_`,
  } ],
  '@typescript-eslint/no-use-before-define': `off`,
  '@typescript-eslint/no-useless-constructor': `off`,
  // This is related to the ESLint rule: `no-throw-literal`
  '@typescript-eslint/only-throw-error': [ `warn`, {
    allowRethrowing: true,
    allowThrowingAny: true,
    allowThrowingUnknown: true,
  } ],
  '@typescript-eslint/require-await': `off`,
  '@typescript-eslint/restrict-template-expressions': `off`,
  '@typescript-eslint/unbound-method': `off`,
//  '@typescript-eslint/sort-type-constituents': [ `error`, {
//    checkIntersections: true,
//    checkUnions: true,
//    groupOrder: [
//      `named`,
//      `keyword`,
//      `operator`,
//      `literal`,
//      `function`,
//      `import`,
//      `conditional`,
//      `object`,
//      `tuple`,
//      `intersection`,
//      `union`,
//      `nullish`,
//    ],
//  } ],
};
