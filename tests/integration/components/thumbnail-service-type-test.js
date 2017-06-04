import { moduleForComponent } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('thumbnail-service-type', 'Integration | Component | thumbnail service type', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.set('myAction', () => {});
  this.render(hbs`{{thumbnail-service-type myAction=myAction}}`);

  assert.equal(this.$('.js-thumbnail-service-type').length, 1, "component rendered");
});

test('should properly handle onClick event', function(assert) {
  assert.expect(2);

  let stubAction = this.stub();
  this.set('myAction', stubAction);

  this.render(hbs`{{thumbnail-service-type myAction=myAction}}`);

  assert.notOk(stubAction.called, false, "action has not been called");

  // Lets perform the onClick event
  this.$('.js-thumbnail-service-type-btn').click();

  assert.ok(stubAction.calledOnce, true, "action was called successfully");
});

test('should properly render passed in attrs', function(assert) {
  assert.expect(3);

  this.set('myAction', () => {});
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
