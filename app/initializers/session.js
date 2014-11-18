import Ember from 'ember';

export default {
  name: 'session',
  initialize: function(container, app) {
		var session = Ember.Object.extend({
			auth: null,
			user: null,
			init: function() {
				var e = this;
				window.firebase = new window.Firebase("https://wpmayhem.firebaseio.com");
				window.firebase.onAuth(function(auth) {
				  if (auth) {
						var store = container.lookup('store:main');
						e.set('auth', auth);
						e.set('user', store.find('user', auth.uid));
				  } else {
						e.set('auth', null);
						e.set('user', null);
				  }
				});
			}
		});
		
		app.register('session:main', session);
		app.inject('route', 'session', 'session:main');
		app.inject('controller', 'session', 'session:main');
	}
};
