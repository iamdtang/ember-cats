import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('controller:dashboard', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('it shows the latest cat added to my family', function(assert) {
  var controller = this.subject();

  controller.set('model', [
    Ember.Object.create({
      id: 1,
      name: 'Tubby',
      adopted_at: new Date('2015-09-25T21:44:24.6496202Z')
    }),
    Ember.Object.create({
      id: 2,
      name: 'Biscuit',
      adopted_at: new Date('2015-10-21T23:30:54.217Z')
    }),
    Ember.Object.create({
      id: 3,
      name: 'Chester',
      adopted_at: new Date('2015-09-29T21:37:33.1677559Z')
    }),
    Ember.Object.create({
      id: 4,
      name: 'Fiona',
      adopted_at: new Date('2015-10-07T19:24:36.763Z')
    })
  ]);

  assert.equal(controller.get('mostRecentAdoptedCat.name'), 'Biscuit');
});
