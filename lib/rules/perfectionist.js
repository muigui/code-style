export default {
  'perfectionist/sort-array-includes': `error`,
  'perfectionist/sort-classes': [ `error`, {
    groups: [
      `static-property`,
      `static-readonly-property`,

      `static-protected-property`,
      `static-readonly-protected-property`,

      `static-private-property`,
      `static-readonly-private-property`,

      [ `static-get-method`, `static-set-method` ],

      [ `static-protected-get-method`, `static-protected-set-method` ],

      [ `static-private-get-method`, `static-private-set-method` ],

      `static-method`,

      `static-block`,

      `property`,
      `readonly-property`,

      `protected-property`,
      `readonly-protected-property`,

      `private-property`,
      `readonly-private-property`,

      `index-signature`,

      `constructor`,

      [ `get-method`, `set-method` ],

      [ `method`, `function-property` ],

      [ `protected-method`, `protected-function-property` ],

      [ `private-method`, `private-function-property` ],

      `unknown`,
    ],
  } ],
  'perfectionist/sort-enums': [ `error`, {
    sortByValue: `ifNumericEnum`,
    useExperimentalDependencyDetection: true,
  } ],
  'perfectionist/sort-exports': [ `error`, {
    // groupKind: `types-first`,
  } ],
  'perfectionist/sort-heritage-clauses': `error`,
  'perfectionist/sort-imports': [ `error`, {
    groups: [
      `builtin`,

      `external`,

      `internal`,

      `unknown`,

      `subpath`,

      `parent`,

      `sibling`,

      `index`,
    ],
    newlinesBetween: 1,
    partitionByNewLine: false,
  } ],
  'perfectionist/sort-interfaces': [ `error`, {
    // groupKind: `mixed`,
  } ],
  'perfectionist/sort-intersection-types': `error`,
  'perfectionist/sort-maps': `error`,
  'perfectionist/sort-modules': [ `error`, {
    groups: [
      `declare-enum`,
      `export-enum`,
      `enum`,
      [ `declare-interface`, `export-interface` ],
      [ `declare-type`, `export-type` ],
      [ `interface`, `type` ],
      `declare-class`,
      `class`,
      `export-class`,
      `declare-function`,
      `export-function`,
      `function`,
    ],
  } ],
  'perfectionist/sort-named-exports': [ `error`, {
    // groupKind: `types-first`,
  } ],
  'perfectionist/sort-named-imports': [ `error`, {
    // groupKind: `types-first`,
    ignoreAlias: true,
  } ],
  'perfectionist/sort-object-types': [ `error`, {
    // groupKind: `mixed`,
  } ],
  'perfectionist/sort-objects': [ `error`, {
    // destructuredObjects: true,
    // objectDeclarations: true,
    partitionByNewLine: true,
  } ],
  'perfectionist/sort-sets': [ `error`, {
    // groupKind: `mixed`,
  } ],
  'perfectionist/sort-switch-case': `off`,
  'perfectionist/sort-union-types': `error`,
  'perfectionist/sort-variable-declarations': [ `error`, {
    partitionByNewLine: true,
  } ],
};
