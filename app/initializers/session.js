import Ember from 'ember';

export default {
  name: 'session',
  initialize: function(container, app) {
		var session = Ember.Object.extend({
			auth: false,
			init: function() {
				var e = this;
				window.firebase = new window.Firebase("https://wpmayhem.firebaseio.com");
				window.firebase.onAuth(function(auth) {
				  if (auth) {
						var user = { id: auth.uid };
						e.set('auth', user);
						
						window.firebase.child('users/' + user.id).on('value', function(snapshot) {
							var user = snapshot.val();
							
							if (user) {
								user.id = auth.uid;
								e.set('auth', user);
							}
						});
				  } else {
						console.log('logged out');
						e.set('auth', false);
				  }
				});
			}
		});
		
		app.register('session:main', session);
		app.inject('route', 'session', 'session:main');
		app.inject('controller', 'session', 'session:main');
	}
};
