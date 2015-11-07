import { moduleForModel, test } from 'ember-qunit';
import Pretender from 'pretender';
import Ember from 'ember';

(function() {

var server;

moduleForModel('cat', 'Unit | Serializer | cat', {
  needs: ['serializer:cat', 'model:home'],
  afterEach() {
    server.shutdown();
  }
});

test('it serializes array responses', function(assert) {
  server = new Pretender(function() {
    this.get('/cats', function() {
      var response = [
        { "id": 1, "name": "Tubby" },
        { "id": 2, "name": "Spot" },
        { "id": 3, "name": "Chestnut" }
      ];

      return [200, { "Content-Type": "application/json" }, JSON.stringify(response)];
    });
  });

  return this.store().findAll('cat').then((cats) => {
    assert.equal(cats.get('length'), 3);
  });
});

test('belongsTo relationship uses foreign keys in the format XXX_id', function(assert) {
  server = new Pretender(function() {
    this.get('/cats', function() {
      var response = [
        { "id": 1, "name": "Tubby",    "home_id": 1 },
        { "id": 2, "name": "Spot",     "home_id": 1  },
        { "id": 3, "name": "Chestnut", "home_id": 1  }
      ];

      return [200, { "Content-Type": "application/json" }, JSON.stringify(response)];
    });
  });

  Ember.run(() => {
    this.store().push({
      data: {
        id: '1',
        type: 'home',
        attributes: {
          address: '123 Ocean Boulevard, Miami, FL'
        }
      }
    });
  });

  return this.store().findAll('cat').then((cats) => {
    assert.equal(cats.objectAt(0).get('home.address'), '123 Ocean Boulevard, Miami, FL');
  });
});

})();
