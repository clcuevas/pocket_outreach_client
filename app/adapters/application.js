import DS from 'ember-data';

const { JSONAPIAdapter } = DS;

export default JSONAPIAdapter.extend({
  namespace: 'api',
  host: 'http://localhost:3000'
});
