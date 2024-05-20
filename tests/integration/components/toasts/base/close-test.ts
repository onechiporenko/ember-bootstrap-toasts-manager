import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | toasts/base/close', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('options', {});
    this.set('onClose', () => {});
    await render(
      hbs`<Toasts::Base::Close @options={{this.options}} @onClose={{this.onClose}} />`,
    );
    assert.dom().hasText('');
  });
});
