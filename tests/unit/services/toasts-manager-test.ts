import { setupTest } from 'dummy/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Service | toasts-manager', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const service = this.owner.lookup('service:toasts-manager');
    assert.ok(service);
  });
});
