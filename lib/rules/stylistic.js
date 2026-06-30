// @stylistic rules
export default {
//  '@stylistic/array-bracket-newline': [ 'error', {
//    minItems: 2,
//  } ],
  '@stylistic/array-bracket-newline': [ `error`, `consistent` ],
  '@stylistic/array-bracket-spacing': [ `error`, `always`, {
    arraysInArrays: true,
    objectsInArrays: true,
    singleValue: true,
  } ],
  //  '@stylistic/array-element-newline': [ 'error', {
  //    ArrayExpression: 'consistent',
  //    ArrayPattern: 'consistent',
  //    minItems: 2,
  //  } ],
  '@stylistic/array-element-newline': [ `error`, `consistent` ],
  '@stylistic/arrow-parens': [ `error`, `as-needed`, {
    requireForBlockBody: true,
  } ],
  '@stylistic/arrow-spacing': [ `error`, {
    after: true,
    before: true,
  } ],
  '@stylistic/block-spacing': [ `error`, `always` ],
  '@stylistic/brace-style': [ `error`, `stroustrup` ],
  '@stylistic/comma-dangle': [ `error`, `always-multiline` ],
  '@stylistic/comma-spacing': [ `error`, {
    after: true,
    before: false,
  } ],
  '@stylistic/comma-style': [ `error`, `last` ],
  '@stylistic/computed-property-spacing': [ `error`, `never` ],
  '@stylistic/dot-location': [ `error`, `property` ],
  '@stylistic/eol-last': [ `error`, `always` ],
  '@stylistic/function-call-argument-newline': [ `error`, `consistent` ],
  '@stylistic/function-call-spacing': [ `error`, `never` ],
  '@stylistic/function-paren-newline': [ `error`, `consistent` ],
  '@stylistic/generator-star-spacing': [ `error`, {
    after: true,
    before: false,
  } ],
  '@stylistic/implicit-arrow-linebreak': `off`,
  '@stylistic/indent': [ `error`, 2, {
    MemberExpression: 1,
    //    ObjectExpression: 1,
    SwitchCase: 1,
    VariableDeclarator: 1,
    // this will add an extra indent to some, but not all, nested ternaries...
    //    offsetTernaryExpressions: true,
  } ],
  '@stylistic/indent-binary-ops': [ `error`, 2 ],
  '@stylistic/key-spacing': [ `error`, {
    afterColon: true,
    beforeColon: false,
    mode: `strict`,
  } ],
  '@stylistic/keyword-spacing': [ `error`, {
    after: true,
    before: true,
  } ],
  '@stylistic/linebreak-style': [ `error`, `unix` ],
  '@stylistic/lines-between-class-members': [ `error`, {
    enforce: [
      {
        blankLine: `always`,
        next: `field`,
        prev: `*`,
      },
      {
        blankLine: `always`,
        next: `field`,
        prev: `field`,
      },
      {
        blankLine: `always`,
        next: `method`,
        prev: `field`,
      },
      {
        blankLine: `always`,
        next: `method`,
        prev: `method`,
      },
    ],
  }, {
    exceptAfterOverload: true,
    exceptAfterSingleLine: true,
  } ],
  '@stylistic/max-len': [ `error`, {
    code: 120,
    comments: 160,
    ignoreRegExpLiterals: true,
    ignoreStrings: true,
    ignoreTemplateLiterals: true,
    ignoreUrls: true,
  } ],
  '@stylistic/max-statements-per-line': [ `error`, { max: 1 } ],
  '@stylistic/member-delimiter-style': [ `error`, {
    multiline: {
      delimiter: `semi`,
      requireLast: true,
    },
    multilineDetection: `brackets`,
    singleline: {
      delimiter: `semi`,
      requireLast: true,
    },
  } ],
  '@stylistic/multiline-ternary': [ `error`, `always` ],
  '@stylistic/new-parens': `off`,
  '@stylistic/newline-per-chained-call': [ `error`, {
    ignoreChainWithDepth: 2,
  } ],
  '@stylistic/no-confusing-arrow': [ `error`, {
    allowParens: true,
    onlyOneSimpleParam: true,
  } ],
  '@stylistic/no-extra-parens': [ `error`, `all`, {
    //    allowParensAfterCommentPattern: '',
    conditionalAssign: true,
    // enforceForArrowConditionals: false,
    enforceForFunctionPrototypeMethods: false,
    // enforceForNewInMemberExpressions: false,
    enforceForSequenceExpressions: false,
    ignoredNodes: [
      `ArrowFunctionExpression[body.type=ConditionalExpression]`,
      `MemberExpression[object.type=NewExpression]`,
      `SpreadElement[argument.type=ConditionalExpression]`,
      `SpreadElement[argument.type=LogicalExpression]`,
      `SpreadElement[argument.type=AwaitExpression]`,
    ],
    ignoreJSX: `all`,
    nestedBinaryExpressions: false,
    returnAssign: false,
    ternaryOperandBinaryExpressions: false,
  } ],
  '@stylistic/no-extra-semi': `error`,
  '@stylistic/no-floating-decimal': `error`,
  '@stylistic/no-mixed-operators': [ `error`, {
    allowSamePrecedence: true,
  } ],
  '@stylistic/no-mixed-spaces-and-tabs': `error`,
  '@stylistic/no-multi-spaces': [ `error`, {
    exceptions: {
      BinaryExpression: false,
      ImportDeclaration: false,
      Property: false,
      VariableDeclarator: false,
    },
    ignoreEOLComments: true,
    includeTabs: false,
  } ],
  '@stylistic/no-multiple-empty-lines': [ `error`, {
    max: 2,
    maxBOF: 2,
    maxEOF: 2,
  } ],
  '@stylistic/no-tabs': `error`,
  '@stylistic/no-trailing-spaces': [ `error`, {
    ignoreComments: false,
    skipBlankLines: false,
  } ],
  '@stylistic/no-whitespace-before-property': `error`,
  '@stylistic/nonblock-statement-body-position': `off`,
  '@stylistic/object-curly-newline': [ `error`, {
    ExportDeclaration: `always`,
    ImportDeclaration: `always`,
    ObjectExpression: {
      consistent: true,
      minProperties: 2,
      multiline: true,
    },
    ObjectPattern: {
      consistent: true,
      minProperties: 2,
      multiline: true,
    },
  } ],
  '@stylistic/object-curly-spacing': [ `error`, `always`, {
    arraysInObjects: true,
    objectsInObjects: true,
  } ],
  '@stylistic/object-property-newline': [ `error`, {
    allowAllPropertiesOnSameLine: false,
  } ],
  '@stylistic/one-var-declaration-per-line': [ `error`, `always` ],
  '@stylistic/operator-linebreak': [ `error`, `before`, {
    overrides: {
      '!=': `none`,
      '!==': `none`,
      '%=': `none`,
      '&&=': `none`,
      '&=': `none`,
      '**=': `none`,
      '*=': `none`,
      '+=': `none`,
      '-=': `none`,
      '/=': `none`,
      '<<=': `none`,
      '<=': `none`,
      '=': `ignore`,
      '==': `none`,
      '===': `none`,
      '>=': `none`,
      '>>=': `none`,
      '>>>=': `none`,
      '??=': `none`,
      '^=': `none`,
      '|=': `none`,
      '||=': `none`,
    },
  } ],
  '@stylistic/padded-blocks': [ `error`, `never` ],
  '@stylistic/padding-line-between-statements': [ `error`, {
    blankLine: `always`,
    next: `*`,
    prev: `*`,
  }, {
    blankLine: `any`,
    next: `expression`,
    prev: `expression`,
  }, {
    blankLine: `never`,
    next: [ `case`, `default` ],
    prev: `case`,
  }, {
    blankLine: `any`,
    next: `export`,
    prev: `export`,
  }, {
    blankLine: `any`,
    next: `import`,
    prev: `import`,
  }, {
    blankLine: `never`,
    next: `const`,
    prev: `const`,
  }, {
    blankLine: `never`,
    next: `let`,
    prev: `let`,
  }, {
    blankLine: `never`,
    next: `var`,
    prev: `var`,
  }, {
    blankLine: `never`,
    next: `function`,
    prev: `function-overload`,
  } ],
  '@stylistic/quote-props': [ `error`, `as-needed`, {
    keywords: true,
    numbers: false,
    unnecessary: true,
  } ],
  '@stylistic/quotes': [ `error`, `backtick`, {
    allowTemplateLiterals: `always`,
    avoidEscape: true,
  } ],
  '@stylistic/rest-spread-spacing': [ `error`, `never` ],
  '@stylistic/semi': [ `error`, `always`, {
    //    beforeStatementContinuationChars: 'any',
    omitLastInOneLineBlock: false,
    omitLastInOneLineClassBody: false,
  } ],
  //  '@stylistic/semi': 'off',
  '@stylistic/semi-spacing': [ `error`, {
    after: true,
    before: false,
  } ],
  '@stylistic/semi-style': [ `error`, `last` ],
  '@stylistic/space-before-blocks': [ `error`, `always` ],
  '@stylistic/space-before-function-paren': [ `error`, {
    anonymous: `always`,
    asyncArrow: `always`,
    named: `never`,
  } ],
  '@stylistic/space-in-parens': [ `error`, `never` ],
  '@stylistic/space-infix-ops': `error`,
  '@stylistic/space-unary-ops': [ `error`, {
    nonwords: false,
    //    overrides: {
    //      '*': true,
    //      '+': true,
    //      '-': true,
    //      '/': true,
    //    },
    words: true,
  } ],
  '@stylistic/spaced-comment': [ `error`, `always`, {
    block: {
      balanced: true,
      exceptions: [
        `*`,
      ],
      markers: [
        `!`,
      ],
    },
    line: {
      exceptions: [
        `-`,
        `+`,
      ],
      markers: [
        `/`,
      ],
    },
  } ],
  '@stylistic/switch-colon-spacing': [ `error`, {
    after: true,
    before: false,
  } ],
  '@stylistic/template-curly-spacing': [ `error`, `never` ],
  '@stylistic/template-tag-spacing': [ `error`, `never` ],
  '@stylistic/type-annotation-spacing': [ `error`, {
    after: true,
    before: true,
    overrides: {
      colon: {
        after: true,
        before: false,
      },
    },
  } ],
  '@stylistic/type-generic-spacing': `error`,
  '@stylistic/type-named-tuple-spacing': `error`,
  '@stylistic/wrap-iife': [ `error`, `any`, {
    functionPrototypeMethods: true,
  } ],
  '@stylistic/wrap-regex': `error`,
  '@stylistic/yield-star-spacing': [ `error`, {
    after: true,
    before: false,
  } ],
};
