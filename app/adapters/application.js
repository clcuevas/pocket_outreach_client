import DS from 'ember-data';

const { RESTAdapter } = DS;

export default RESTAdapter.extend({
  namespace: 'api',
  host: 'http://localhost:3000'
});
