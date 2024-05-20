import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | toasts/base/body', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('options', {});
    await render(hbs`<Toasts::Base::Body @options={{this.options}} />`);
    assert.dom().hasText('');
  });
});
