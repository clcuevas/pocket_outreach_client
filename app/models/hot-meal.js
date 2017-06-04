import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  dayTime: attr('string'),
  location: attr('string'),
  mealServed: attr('string'),
  nameOfProgram: attr('string'),
  peopleServed: attr('string'),
  latitude: attr('string'),
  longitude: attr('string')
});
