export default [ {
  format: [ `camelCase` ],
  prefix: [],
  selector: [ `default` ],
  types: [],
}, {
  format: [ `camelCase` ],
  prefix: [],
  selector: [ `accessor` ],
  types: [],
}, {
  format: [ `PascalCase` ],
  prefix: [],
  selector: [ `class` ],
  types: [],
}, {
  format: [ `camelCase` ],
  prefix: [],
  selector: [ `classMethod` ],
  types: [],
}, {
  format: [ `camelCase`, `snake_case` ],
  prefix: [],
  selector: [ `classProperty` ],
  types: [],
}, {
  format: [ `PascalCase`, `UPPER_CASE`, `camelCase` ],
  prefix: [],
  selector: [ `enum` ],
  types: [],
}, {
  format: [ `UPPER_CASE`, `snake_case` ],
  prefix: [],
  selector: [ `enumMember` ],
  types: [],
}, {
  format: [ `camelCase` ],
  prefix: [],
  selector: [ `function` ],
  types: [],
}, {
  format: [ `PascalCase`, `UPPER_CASE`, `camelCase` ],
  prefix: [],
  selector: [ `import` ],
  types: [],
}, {
  format: [ `PascalCase` ],
  prefix: [],
  selector: [ `interface` ],
  types: [],
}, {
  format: [ `camelCase` ],
  modifiers: [],
  prefix: [],
  selector: [ `objectLiteralMethod` ],
  types: [],
}, {
  custom: {
    match: true,
    regex: `^[a-z]+(\\.?[A-Za-z0-9]+){0,}`,
  },
  format: null,
  modifiers: [ `requiresQuotes` ],
  prefix: [],
  selector: [
    `objectLiteralMethod`,
    `objectLiteralProperty`,
  ],
  types: [],
}, {
  format: [ `camelCase`, `snake_case` ],
  prefix: [],
  selector: [ `objectLiteralProperty` ],
  types: [],
}, {
  format: [ `camelCase`, `snake_case` ],
  prefix: [],
  selector: [ `parameter` ],
  types: [],
}, {
  format: [ `camelCase`, `snake_case` ],
  prefix: [],
  selector: [ `parameterProperty` ],
  types: [],
}, {
  format: [ `PascalCase`, `UPPER_CASE`, `camelCase` ],
  prefix: [],
  selector: [ `typeAlias` ],
  types: [],
}, {
  format: [ `camelCase` ],
  prefix: [],
  selector: [ `typeMethod` ],
  types: [],
}, {
  format: [ `PascalCase`, `UPPER_CASE` ],
  prefix: [],
  selector: [ `typeParameter` ],
  types: [],
}, {
  format: [ `PascalCase`, `UPPER_CASE` ],
  prefix: [],
  selector: [ `typeProperty` ],
  types: [],
}, {
  format: [ `camelCase`, `snake_case` ],
  prefix: [],
  selector: [ `variable` ],
  types: [],
} ];
