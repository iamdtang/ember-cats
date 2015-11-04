import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  home: DS.belongsTo('home', { async: false })
});
