// check-file rules
export default {
  'check-file/filename-naming-convention': [ `error`, {
    '**/*.{js,jsx,mjs,mjsx,mts,mtsx,ts,tsx}': `KEBAB_CASE`,
  }, {
    ignoreMiddleExtensions: true,
  } ],
  'check-file/folder-naming-convention': [ `error`, {
    'src/**/': `KEBAB_CASE`,
  } ],
};
