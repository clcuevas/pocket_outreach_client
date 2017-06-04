import DS from 'ember-data';
import Ember from 'ember';

const { RESTAdapter } = DS;
const {
  String: EmberString
} = Ember;

export default RESTAdapter.extend({
  namespace: 'api',
  host: 'http://localhost:3000',

  pathForType(modelName) {
    return EmberString.pluralize(modelName);
  }
});
