import DS from 'ember-data';

var Backup = DS.Model.extend({
	name: DS.attr('string'),
	email: DS.attr('string'),
	created_at: DS.attr('string', { defaultValue: new Date().getTime() })
});

Backup.reopenClass({
  FIXTURES: []
});

export default Backup;
