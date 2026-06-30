// ESLint standard rules
export default {
//  'camelcase': [ 'error', {
//    ignoreDestructuring: true,
//    ignoreGlobals: true,
//    ignoreImports: true,
//    properties: 'never',
//  } ],
  'class-methods-use-this': `off`,
  'consistent-return': `off`,
  curly: `error`,
  'default-case': `warn`,
  'dot-notation': [ `warn`, {
    allowKeywords: true,
    allowPattern: `^[a-z]+(_[^_]+)*`,
  } ],
  //  'id-match': [ 'error', '^\\$?[a-z]+([A-Za-z0-9_]*)', {
  //    classFields: false,
  //    ignoreDestructuring: true,
  //    onlyDeclarations: true,
  //    properties: false,
  //  } ],
  'no-empty': [ `error`, {
    allowEmptyCatch: true,
  } ],
  'no-lonely-if': `off`,
  'no-multi-assign': [ `warn`, {
    ignoreNonDeclaration: true,
  } ],
  'no-nested-ternary': `off`,
  'no-new': `off`,
  'no-param-reassign': `off`,
  'no-plusplus': `off`,
  'no-prototype-builtins': `error`,
  'no-redeclare': `off`,
  'no-restricted-globals': `error`,
  'no-return-assign': [ `error`, `except-parens` ],
  'no-self-compare': `error`,
  'no-shadow': `off`,
  'no-throw-literal': `off`,
  // This rule causes issues with TypeScript types that are declared in,
  //   `node_modules/@types` and/or DTS files, and as such, do not require
  //   explicit importing into files...
  'no-undef': `off`,
  'no-underscore-dangle': `off`,
  'no-unused-vars': `off`,
  radix: `warn`,
  //  'sort-keys': [ 'error', 'asc', {
  //    allowLineSeparatedGroups: true,
  //    caseSensitive: true,
  //    natural: true,
  //  } ],
  'sort-vars': [ `error`, {
    ignoreCase: false,
  } ],
};
