import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const { K } = Ember;

moduleForComponent('thumbnail-service-type', 'Integration | Component | thumbnail service type', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.set('myAction', K);
  this.render(hbs`{{thumbnail-service-type myAction=myAction}}`);

  assert.equal(this.$('.js-thumbnail-service-type').length, 1, "component rendered");
});

test('should properly handle onClick event', function(assert) {
  assert.expect(2);

  let actionCalled = false;
  this.set('myAction', () => {
    actionCalled = true;
  });

  this.render(hbs`{{thumbnail-service-type myAction=myAction}}`);

  assert.equal(actionCalled, false, "action has not been called");

  // Lets perform the onClick event
  this.$('.js-thumbnail-service-type-btn').click();

  assert.equal(actionCalled, true, "action was called successfully");
});

test('should properly render passed in attrs', function(assert) {
  assert.expect(3);

  this.set('myAction', K);
  this.set('myTitle', 'Booyah!');
  this.set('icon', 'my-icon');
  this.set('buttonText', 'Yeah boi');

  this.render(hbs`
    {{thumbnail-service-type
      myAction=myAction
      title=myTitle
      iconName=icon
      buttonText=buttonText}}
  `);

  assert.equal(this.$('.js-thumbnail-service-type-title').text().trim(), 'Booyah!', "title rendered correctly");
  assert.equal(this.$('.js-thumbnail-service-type-btn').text().trim(), 'Yeah boi', "button text rendered correctly");
  assert.equal(this.$(`.ui-${this.get('icon')}`).length, 1, "we have the icon class present");
});
