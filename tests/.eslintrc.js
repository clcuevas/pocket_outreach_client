module.exports = {
  env: {
    'embertest': true
  },
  globals: {
    'server': true
  },
  rules: {
    'new-cap': [ 'error', { capIsNewExceptions: [ 'A', '$.Event' ] } ]
  }
};
