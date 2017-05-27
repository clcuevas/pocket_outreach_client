import DS from 'ember-data';

const { RESTSerializer } = DS;

export default RESTSerializer.extend({
  primaryKey: '_id',
  serializeId(id) {
    return id.toString();
  }
});
