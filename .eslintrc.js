module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: [
    'ember'
  ],
  extends: [
    'eslint:recommended'
  ],
  env: {
    'browser': true,
    'es6': true
  },
  rules: {
    'array-bracket-spacing': [ 'error', 'always' ],
    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'block-spacing': 'error',
    'brace-style': 'error',
    'camelcase': 'error',
    'comma-dangle': 'error',
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'curly': 'error',
    'dot-notation': 'error',
    'eqeqeq': 'error',
    'func-call-spacing': 'error',
    'indent': [ 'error', 2 ],
    'keyword-spacing': [ 'error', { 'before': true, 'after': true } ],
    'new-cap': [ 'error', { 'capIsNewExceptions': [ 'A' ] } ],
    'new-parens': 'error',
    'no-duplicate-imports': 'error',
    'no-global-assign': 'error',
    'no-loop-func': 'error',
    'no-multiple-empty-lines': 'error',
    'no-nested-ternary': 'error',
    'no-restricted-globals': [ 'error', 'event' ],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-tabs': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-vars': [ 'error', { vars: 'all', args: 'none' } ],
    'no-var': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': [ 'error', 'always' ],
    'object-shorthand': 'error',
    'one-var': [ 'error', 'never' ],
    'operator-linebreak': [ 'error', 'after' ],
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quotes': 'off',
    'radix': 'error',
    'rest-spread-spacing': 'error',
    'space-before-function-paren': [ 'error', 'never' ],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'template-curly-spacing': 'error',

    // Custom rules
    'ember/avoid-leaking-state-in-components': 'error',
    'ember/closure-actions': 'error',
    'ember/jquery-ember-run': 'error',
    'ember/local-modules': 'error',
    'ember/no-empty-attrs': 'error',
    'ember/no-function-prototype-extensions': 'error',
    'ember/no-on-calls-in-components': 'error',
    'ember/no-side-effects': 'error',
    'ember/use-brace-expansion': 'error'
  }
};
