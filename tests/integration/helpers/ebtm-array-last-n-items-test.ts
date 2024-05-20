import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';

module('Integration | Helper | ebtm-array-last-n-items', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('inputValue', [1, 2, 3, 4, 5]);
    this.set('n', 3);

    await render(hbs`{{ebtm-array-last-n-items this.inputValue this.n}}`);

    assert.dom().hasText('1,2,3');
  });
});
