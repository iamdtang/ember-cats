import Ember from 'ember';

export default Ember.Controller.extend({
  mostRecentAdoptedCat: Ember.computed('model', function() {
    return this.get('model')
      .sortBy('adopted_at')
      .reverseObjects()
      .objectAt(0);
  })
});
