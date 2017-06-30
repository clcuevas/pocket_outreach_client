import { moduleForComponent } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('index-page', 'Integration | Component | index page', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{index-page}}`);

  assert.equal(this.$('.js-index-page').length, 1, "component rendered");
});

test('should property get hot meal locations when button is clicked', function(assert) {
  assert.expect(2);

  let stubGetLocations = this.stub();
  this.set('getHotMealLocations', stubGetLocations);

  this.render(hbs`
    {{index-page getHotMealLocations=getHotMealLocations}}
  `);

  assert.equal(this.$('.js-hot-meal-thumbnail').length, 1, "the thumbnail exists");

  this.$('.js-hot-meal-thumbnail .js-thumbnail-service-type-btn').click();

  assert.ok(stubGetLocations.calledOnce, "successfully executed action");
});

test('should properly get food banks when button is clicked', function(assert) {
  assert.expect(2);

  let stubGetFoodBanks = this.stub();
  this.set('getFoodBanks', stubGetFoodBanks);

  this.render(hbs`
    {{index-page getFoodBanks=getFoodBanks}}
  `);

  assert.equal(this.$('.js-food-banks-thumbnail').length, 1, "the thumbnail exists");

  this.$('.js-food-banks-thumbnail .js-thumbnail-service-type-btn').click();

  assert.ok(stubGetFoodBanks.calledOnce, "successfully executed the action");
});
