import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['user'],
	actions: {
		redirectIfNotAuthenticated: function(transition) {
			if (!this.get('session.user')) {
			  this.set('previousTransition', transition);
				this.transitionToRoute('login');
			}
			return false;
		},
		redirectIfAuthenticated: function() {
			if (this.get('session.user')) {
				this.transitionToRoute('dashboard');
			}
			return false;
		},
		login: function(user, update_attrs) {
			var e = this;
			
			if (typeof user !== 'object') {
				user = {
					email: e.get('email'),
					password: e.get('password')
				};
			}
			
			window.firebase.authWithPassword(user, function(error, auth) {
			  if (error === null) {
			    var userController = e.get('controllers.user');
				  var previousTransition = userController.get('previousTransition');
					
					if (typeof update_attrs === 'object') {
						window.firebase.child('users/' + auth.uid).set(update_attrs);
					}
			    
					if (previousTransition) {
						userController.set('previousTransition', null);
						previousTransition.retry();
					} else {
						e.transitionToRoute('dashboard');
					}
			  } else {
			    alert("invalid");
			  }
			});
			
			return false;
		},
		logout: function() {
			if (confirm('Are you sure you want to log out?')) {
				window.firebase.unauth();
				this.transitionToRoute('login');
			}
			return false;
		}
	}
});
