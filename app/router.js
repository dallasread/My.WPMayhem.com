import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('register');
	this.route('login', { path: '/' });
	this.route('password');
	this.route('dashboard', function() {
		this.route('status');
		
		this.route('me', function() {
			this.route('profile');
			this.route('referrals');
			this.route('billing');
			this.route('notifications');
		});
		
	  this.route('help', function() {
	  	this.route('install');
	  	this.route('publish');
	  	this.route('backup');
	  	this.route('restore');
	  	this.route('clone');
	  });
		
	  this.route('admin', function() {
	  	this.route('servers');
			this.route('plans');
			this.route('coupons');
			this.route('users', function() {
				this.route('installations', { path: ':user_id/installations' });
			});
	  });
		
		this.route('installations', function() {
			this.route('new');
			this.route('show', { path: ':installation_id' });
			this.route('edit', { path: ':installation_id/edit' });
		});
	});
});

export default Router;
