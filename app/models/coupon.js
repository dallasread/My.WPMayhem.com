import DS from 'ember-data';

var Coupon = DS.Model.extend({
	stripe_token: DS.attr('string'),
	code: DS.attr('string'),
	discount: DS.attr('string'),
	percent_off: DS.attr('number'),
	amount_off: DS.attr('number'),
	duration: DS.attr('string', { defaultValue: 'once' }),
	users: DS.hasMany('users', { async: true }),
	active: DS.attr('boolean', { defaultValue: true }),
	users_count: DS.attr('number')
});

export default Coupon;
