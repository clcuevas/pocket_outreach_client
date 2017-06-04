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
  this.set('getLocations', stubGetLocations);

  this.render(hbs`
    {{index-page getHotMealLocations=getLocations}}
  `);

  assert.equal(this.$('.js-thumbnail-service-type-btn').length, 1, "the button exists");

  this.$('.js-thumbnail-service-type-btn').click();

  assert.ok(stubGetLocations.calledOnce, "successfully executed action");
});
