import DS from 'ember-data';

var User = DS.Model.extend({
	name: DS.attr('string'),
	email: DS.attr('string'),
	created_at: DS.attr('string', { defaultValue: new Date().getTime() }),
	installations: DS.hasMany('installation', { async: true }),
	installations_count: DS.attr('number'),
	plan: DS.belongsTo('plan', { async: true }),
	coupon: DS.belongsTo('coupon', { async: true }),
	admin: DS.attr('boolean', { defaultValue: false }),
	credits: DS.attr('number', { defaultValue: 0 }),
	referrals: DS.hasMany('referrals', { embedded: true, inverse: 'user' }),
	notifications: DS.hasMany('notifications', { embedded: true, inverse: 'user' }),
	referral_token: DS.attr('string'),
	active: DS.attr('boolean', { defaultValue: true }),
	referrals_count: function() {
		var i = 0;
		this.get('referrals').forEach(function() {
			i += 1;
		});
		return i;
	}.property('referrals'),
	referral_url: function() {
		return "https://wpmayhem.com/refer/" + this.get('referral_token');
	}.property('referral_token')
});

export default User;
