import DS from 'ember-data';
import Ember from 'ember';

const { JSONAPISerializer } = DS;
const {
  String: EmberString
} = Ember;

export default JSONAPISerializer.extend({
  primaryKey: 'id',

  keyForAttribute(attr) {
    return EmberString.underscore(attr);
  },

  serializeId(id) {
    return id.toString();
  }
});
