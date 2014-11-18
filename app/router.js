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
		this.route('me');
		this.route('installations', function() {
			this.route('new');
			this.route('show', { path: ':installation_id' });
			this.route('edit', { path: ':installation_id/edit' });
		});
	});
});

export default Router;
