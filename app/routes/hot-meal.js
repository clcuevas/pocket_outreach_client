import Ember from 'ember';

const { Route } = Ember

export default Route.extend({
  // Before we populate the model and render the view for this route,
  // we want to make sure we have the 'hotMealLocations' data. If we
  // don't, then this is because a browser refresh happened. When this
  // happens, we want to navigate the user back to the home view so
  // they can 'regenerate' their locations.
  beforeModel(transition) {
    if (!transition.data.hotMealLocations) {
      this.transitionTo('index');
    }
  },

  model(params, transition) {
    return transition.data.hotMealLocations;
  }
});
