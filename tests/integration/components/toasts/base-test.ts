import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';

module('Integration | Component | toasts/base', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('options', {});
    await render(hbs`<Toasts::Base @options={{this.options}} />`);
    assert.dom().hasText('');
  });
});
