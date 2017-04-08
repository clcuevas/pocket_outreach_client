import Ember from 'ember';
import layout from '../templates/components/thumbnail-service-type';

const { Component } = Ember;

export default Component.extend({
  layout,
  classNames: [
    'col-xs-12',
    'ui-thumbnail-service-type',
    'js-thumbnail-service-type'
  ]
});
