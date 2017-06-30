module.exports = {
  env: {
    'embertest': true
  },
  globals: {
    'server': true,
    'sinon': true
  },
  rules: {
    'new-cap': [ 'error', { capIsNewExceptions: [ 'A', '$.Event' ] } ]
  }
};
