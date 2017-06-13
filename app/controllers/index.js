import Ember from 'ember';
import { task } from 'ember-concurrency';
import withTestWaiter from 'ember-concurrency-test-waiter/with-test-waiter';

const { Controller } = Ember;

export default Controller.extend({
  getHotMealLocations: withTestWaiter(task(function * () {
    let meals = [];

    try {
      let locations = yield this.store.query('hotMealLocation', {
        latitude: 47.673554,
        longitude: -122.387062,
        limit: 20
      });
      locations.forEach((meal) => meals.push(meal));

      let transition = this.transitionToRoute('hot-meal');
      transition.data.hotMealLocations = meals;

      return transition;
    } catch (err) {
      // TODO: Maybe do something better with the error
      throw err;
    }
  })),

  getFoodBanks: withTestWaiter(task(function * () {
    let foodBanks = [];

    try {
      let locations = yield this.store.query('foodBank', {
        latitude: 47.673554,
        longitude: -122.387062,
        limit: 20
      });
      locations.forEach((foodBank) => foodBanks.push(foodBank));

      let transition = this.transitionToRoute('food-banks');
      transition.data.foodBanks = foodBanks;

      return transition;
    } catch (err) {
      // TODO: Add better error handler
      throw err;
    }
  }))
});
