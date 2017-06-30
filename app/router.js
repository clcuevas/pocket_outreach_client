import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about-us');
  this.route('contact-us');
  this.route('food-banks');
  this.route('hot-meal');
});

export default Router;
