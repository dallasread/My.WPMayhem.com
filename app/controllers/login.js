import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['user'],
	actions: {
		redirectIfNotAuthenticated: function(transition) {
			if (!this.get('session.auth')) {
			  this.set('previousTransition', transition);
				this.transitionToRoute('login');
			}
		},
		redirectIfAuthenticated: function() {
			if (this.get('session.auth')) {
				this.transitionToRoute('dashboard');
			}
		},
		login: function() {
			var e = this;
				
			if (this.get('email') && this.get('password')) {

				window.firebase.authWithPassword({
				  email: this.get('email'),
				  password: this.get('password')
				}, function(error, authData) {
				  if (error === null) {
				    var userController = e.get('controllers.user');
					  var previousTransition = userController.get('previousTransition');
						if (previousTransition) {
							userController.set('previousTransition', null);
							previousTransition.retry();
						} else {
							e.transitionToRoute('dashboard');
						}
				  } else {
				    console.log("Error authenticating user:", error);
				  }
				});
			} else {
				alert("enter valid data");
			}
		}
	}
});
