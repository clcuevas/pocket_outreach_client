import DS from 'ember-data';
import Ember from 'ember';

const { RESTSerializer } = DS;
const {
  String: EmberString
} = Ember;

export default RESTSerializer.extend({
  primaryKey: '_id',

  keyForAttribute(attr) {
    return EmberString.underscore(attr);
  },

  serializeId(id) {
    return id.toString();
  }
});
