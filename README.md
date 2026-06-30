# @muigui/code-style

Shared Code Lint and Style Configurations.

It includes:
  - ESLint
  - Check-File
  - Perfectionist
  - Stylistic; and
  - Typescript-ESLint

This list may be updated by adding, removing/replacing and/or updating existing configurations.

## Using Code Lint and Style

### All (JavScript + TypeScript) defaults

Create an `eslint.config.[cm]?[jt]sx?` file in your project root.

Depending on the type of project, and how you are using it, you may want to just simply export the default JavaScript and TypeScript configurations. I.e.

```typescript
export {
  default,
} from '@muigui/code-style';
```

If you want to use one or the other, you could do this:

#### JavScript defaults only


```javascript
export {
  default,
} from '@muigui/code-style/js';
// Or
export {
  default,
} from '@muigui/code-style/javascript';
```

#### TypeScript defaults only

If you want to use one or the other, you could do this:

```typescript
export {
  default,
} from '@muigui/code-style/ts';
// Or
export {
  default,
} from '@muigui/code-style/typescript';
```

### Adding ignore files

If you have other files, globs you'd like to ignore, as part of the `eslint.config.[cm]?[jt]sx?` file, you could use:

```typescript

import CODE_STYLE from '@muigui/code-style';

const ignore = CODE_STYLE.find(({ name }) =>
  name === `@muigui/code-style/ignore`);

if (Array.isArray(ignore?.ignores)) {
  ignore?.ignores.push(`./src/path/to/file.ts`);
  ignore?.ignores.push(`./src/path/**/to/**/globs/*.js`);
}

export default CODE_STYLE;
```

### Changing other configurations

These work in the exact same way as changing the ignore files above. You simply:

1. Create an `eslint.config.[cm]?[jt]sx?` file (extension depends on your project and preferences)
2. Import the entire `CODE_STYLE` as the `default` configuration from `@muigui/code-style`
3. Find each configuration you want to make changes to
   
   The easiest way to do this, is by matching on each configuration's `name` property.
   
   You can easily find this by going through the files in the `lib` folder
4. Add a check to ensure your configuration was found/does exist, or you can use chaining/nullish coalescing if you prefer
5. Modify the configuration(s) you need/want to modify
   
   If you're creating an entirely new object, then please remember to assign it back to the `default` imported `CODE_STYLE` or your changes won't be picked up; and finally
6. Export the entitre `CODE_STYLE` as the `default` export configuration.

## Using TSConfig

In any project you're using `@muigui/code-style` in, that is also a TypeScript project, there are two, "ready to use" files:

1. [tsconfig.json](/muigui/code-style/blob/main/tsconfig.json); and
2. [tsconfig.elsint.json](/muigui/code-style/blob/main/tsconfig.eslint.json) available.

These are both configured for use with: `@muigui/code-style`.

At the same time, **they are not mandatory**. It is completely at **your discretion**. 

### `tsconfig.json`

This file is used for validating and building the actual files that are part of your project. 

### What does this mean, exactly?

It means that it should be used, and set up to ignore, files like `*.spec.mtsx` `*.test.t]s`, `./test/**/*.ts`, etc, etc…

Here is an example of what a `tsconfig.json` file that is used by a project that will transpile from TypeScript (`./src/*`), to JavaScript (`./dist/*`), might look like: 

```json
{
  "extends": "@muigui/code-style/tsconfig.json",
  "compilerOptions": {
    "noEmit": false,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "exclude": [
    "./dist/**/*",

    "./src/**/*.test.*js*",
    "./src/**/*.test.*ts*",

    "./test/**/*"
  ],
  "include": [
    "./src/**/*"
  ]
}
```

### `tsconfig.eslint.json`

This file is used internally by the `@muigui/code-style` library. It should be used to run the actual code lint and style configurations against all source files. 

### What does this mean, exactly?

It means that it should be used, and set up to include all files requiring verification (`lint` + `style`) in your project.

Here is an example of what a `tsconfig.eslint.json` file that is used by a project, might look like: 

```json
{
  "extends": "@muigui/code-style/tsconfig.eslint.json",
  "compilerOptions": {
    "noEmit": true,
    "rootDir": "./"
  },
  "exclude": [
    "./dist/**/*"
  ],
  "include": [
    "./eslint.config.[cm]?[jt]sx?",

    "./src/**/*",

    "./test/**/*"
  ]
}
```

**N/B**: You don't need to use the exact same `extends` as is used in this example.

If you have many changes in your `tsconfig.json` file, and want to avoid duplicating it all in both files, you could simply set `extends` to:  `./tsconfig.json`.

Then all you would need to do is add/update the following:

1. Add: `compilerOptions.noEmit: true`

   As this is just for code lint and style, we do not need to generate any actual files.
2. Add: `compilerOptions.rootDir: "./"`

   We need the root to be the project root, so we can pick up the `eslint.config.[cm]?[jt]sx?` file
3. The: `exclude: string[]`

   Should only contain something like `./dist/**/*` or whatever your `compilerOptions.outDir` is called
4. The: `include: string[]`

   Should only contain file references and globs, to all files you need verified, in your project, as well as the `eslint.config.[cm]?[jt]sx?` file (as seen in the example above).
