import DS from 'ember-data';

var User = DS.Model.extend({
	name: DS.attr('string'),
	email: DS.attr('string'),
	created_at: DS.attr('string', { defaultValue: new Date().getTime() }),
	installations: DS.hasMany('installation', { async: true })
});

User.reopenClass({
  FIXTURES: []
});

export default User;
