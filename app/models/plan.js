import DS from 'ember-data';

var Plan = DS.Model.extend({
	stripe_token: DS.attr('string'),
	permalink: DS.attr('string'),
	name: DS.attr('string'),
	amount: DS.attr('number'),
	interval: DS.attr('number'),
	trial_period: DS.attr('number'),
	active: DS.attr('boolean', { defaultValue: true }),
	users: DS.hasMany('users', { async: true }),
	users_count: DS.attr('number')
});

export default Plan;
