import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  classNames: [ 'js-index-page' ],

  actions: {
    getHotMealLocations(e) {
      e.preventDefault();
      // TODO: Need to get user's location when this action
      // is performed/ executed.
      this.get('getHotMealLocations')();
    }
  }
});
