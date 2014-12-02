import DS from 'ember-data';

var User = DS.Model.extend({
	user: DS.belongsTo('user', { async: true }),
	invitee: DS.belongsTo('user', { async: true }),
	created_at: DS.attr('string', { defaultValue: new Date().getTime() })
});

export default User;
