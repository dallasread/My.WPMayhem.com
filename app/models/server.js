import DS from 'ember-data';

var Server = DS.Model.extend({
	ip: DS.attr('string'),
	location: DS.attr('string'),
	installations: DS.hasMany('installation', { async: true }),
	installations_count: DS.attr('number'),
	active: DS.attr('boolean', { defaultValue: true })
});

export default Server;
