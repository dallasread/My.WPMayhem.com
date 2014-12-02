import DS from 'ember-data';

var Notification = DS.Model.extend({
	user: DS.belongsTo('user', { async: true }),
	other: DS.belongsTo('user', { async: true }),
	installation: DS.belongsTo('installation', { async: true }),
	backup: DS.belongsTo('backup', { async: true }),
	message: DS.attr('string'),
	read: DS.attr('boolean', { defaultValue: false }),
	created_at: DS.attr('string', { defaultValue: new Date().getTime() })
});

export default Notification;
