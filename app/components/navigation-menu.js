import Ember from 'ember';
import layout from '../templates/components/navigation-menu';

const { Component } = Ember;

export default Component.extend({
  layout,
  classNames: [ 'ui-navigation-menu', 'js-navigation-menu' ]
});
