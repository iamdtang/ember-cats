import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  adopted_at: DS.attr('date'),
  home: DS.belongsTo('home', { async: false })
});
