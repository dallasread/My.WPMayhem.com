import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function(transition) {
		this.controllerFor('login').send('redirectIfNotAuthenticated', transition);
	},
	setupController: function(controller) {
    controller.set('installations', this.store.findAll('installation'));
  }
});
