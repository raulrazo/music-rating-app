module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-empty': [0, 'always'],
    'subject-empty': [0, 'always'],
    // PUTtING THIS HERE TO TEST COMMIT
    //   TODO Add Scope Enum Here
    // 'scope-enum': [2, 'always', ['yourscope', 'yourscope']],
    // 'type-enum': [
    //   2,
    //   'always',
    //   [
    //     'feat',
    //     'fix',
    //     'docs',
    //     'chore',
    //     'style',
    //     'refactor',
    //     'ci',
    //     'test',
    //     'perf',
    //     'revert',
    //     'vercel',
    //   ],
    // ],
  },
};
