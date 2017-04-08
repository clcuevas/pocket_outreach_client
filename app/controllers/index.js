import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  actions: {
    alertMe() {
      alert('Yay, it worked!');
    }
  }
});
