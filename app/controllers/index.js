import Ember from 'ember';
import { task } from 'ember-concurrency';
import withTestWaiter from 'ember-concurrency-test-waiter/with-test-waiter';

const { Controller } = Ember;

export default Controller.extend({
  getHotMealLocations: withTestWaiter(task(function * () {
    let meals = [];

    try {
      let locations = yield this.store.query('hotMeal', {
        latitude: 47.673554,
        longitude: -122.387062
      });
      locations.forEach((meal) => meals.push(meal));

      let transition = this.transitionToRoute('hot-meal');
      transition.data.hotMealLocations = meals;

      return transition;
    } catch (err) {
      // TODO: Maybe do something better with the error
      throw err;
    }
  }))
});
