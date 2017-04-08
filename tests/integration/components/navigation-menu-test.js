import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('navigation-menu', 'Integration | Component | navigation menu', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{navigation-menu}}`);

  assert.equal(this.$('.js-navigation-menu').length, 1, "component rendered");
});
