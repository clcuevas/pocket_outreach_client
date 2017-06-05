import { moduleFor } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';

moduleFor('controller:index', 'Unit | Controller | index', {
  needs: [
    'model:hotMeal'
  ]
});

test('should GET hot meal locations', function(assert) {
  assert.expect(6);

  this.server = sinon.fakeServer.create();
  this.server.respondWith('GET', '/api/hot-meal?latitude=47.673554&longitude=-122.387062', [
    200,
    { 'Content-Type': 'application/json' },
    `{
      "hot_meals": [
        {
          "_id": "5932d8b107fde37001608bac",
          "name_of_program": "Saint Luke's Episcopal Church",
          "__v": 0,
          "day_time": "Fridays: 11:30 A.M. - 12:30 P.M.",
          "location": "5710 22nd Ave. NW  Seattle",
          "meal_served": "Lunch",
          "people_served": "OPEN TO ALL",
          "longitude": "-122.3844451",
          "latitude": "47.6704036"
        },
        {
          "_id": "5932d8b207fde37001608bcd",
          "name_of_program": "Monday Feeding Program",
          "__v": 0,
          "day_time": "Mondays: 12:30  - 1:00 P.M.",
          "location": "Woodland Park Pres. Church 225 N. 70th, Seattle",
          "meal_served": "Lunch",
          "people_served": "OPEN TO ALL",
          "longitude":"-122.355481",
          "latitude":"47.67938239999999"
        },
        {
          "_id": "5932d8b107fde37001608b85",
          "name_of_program": "Phinney Neighborhood Association",
          "__v": 0,
          "day_time": "Tuesdays: 5:00 - 6:00 P.M.",
          "location": "St. John's Lutheran 5515 Phinney Ave N., Seattle",
          "meal_served": "Dinner",
          "people_served": "OPEN TO ALL",
          "longitude": "-122.354731",
          "latitude":"47.6688384"
        }
      ]
    }`
  ]);

  const ctrl = this.subject();

  assert.ok(ctrl.get('getHotMealLocations'), "the method exists");
  assert.notOk(this.server.requested, "a request to the server has not been made");

  // Lets execute the task
  ctrl.get('getHotMealLocations').perform();

  assert.ok(this.server.requestedOnce, "a request to the server has been made");
  assert.equal(this.server.responses.length, 1, "we have a response");
  assert.equal(this.server.responses[0].response[0], 200);
  assert.ok(JSON.parse(this.server.responses[0].response[2]).hasOwnProperty('hot_meals'));
});
