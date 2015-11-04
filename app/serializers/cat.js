import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {
      cats: payload
    };

    return this._super(store, primaryModelClass, payload, id, requestType);
  },

  keyForRelationship: function(key, relationship) {
    if (relationship === 'belongsTo') {
      return key.underscore() + "_id";
    }
  }
});
