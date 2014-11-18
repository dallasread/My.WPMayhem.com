import DS from 'ember-data';

var Installation = DS.Model.extend({
	name: DS.attr('string'),
	address: DS.attr('string'),
	disk_usage: DS.attr('string', { defaultValue: '0.00' }),
	db_usage: DS.attr('string', { defaultValue: '0.00' }),
	clone_id: DS.attr('string'),
	restore_id: DS.attr('string'),
	users: DS.hasMany('user', { async: true }),
	backups: DS.hasMany('backup', { async: true }),
	wp_prefix: DS.attr('string'),
	wp_admin_path: DS.attr('string', { defaultValue: '/backoffice' }),
	php_my_admin_path: DS.attr('string', { defaultValue: '/php-ma' }),
	created_at: DS.attr('string', { defaultValue: new Date().getTime() }),
	wp_admin: function() {
    return 'http://' + this.get('address') + this.get('wp_admin_path');
  }.property('address', 'wp_admin_path'),
	php_my_admin: function() {
    return 'http://' + this.get('address') + this.get('php_my_admin_path');
  }.property('address', 'php_my_admin_path')
});

Installation.reopenClass({
  FIXTURES: []
});

export default Installation;
