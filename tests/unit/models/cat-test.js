import { moduleForModel, test } from 'ember-qunit';

moduleForModel('cat', 'Unit | Model | cat', {
  // Specify the other units that are required for this test.
  needs: ['model:home']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
