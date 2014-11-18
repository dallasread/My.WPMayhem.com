import Ember from 'ember';

export default Ember.ObjectController.extend({
	previousTransition: null,
	actions: {
		redirectIfNotAuthenticated: function(transition) {
			if (1 === 1) {
			  this.set('previousTransition', transition);
				this.transitionToRoute('login');
			}
		}
	}
});