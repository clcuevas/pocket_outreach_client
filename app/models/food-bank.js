import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  address: attr('string'),
  cityFeature: attr('string'),
  commonName: attr('string'),
  latitude: attr('string'),
  longitude: attr('string'),
  // eslint-disable-next-line ember/no-empty-attrs
  location: attr(),
  website: attr('string'),
  hours: attr('string'),
  phone: attr('string')
});
