import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['login'],
	actions: {
		register: function() {
			if (this.get('email') && this.get('password')) {
				var e = this;
				var user = {
					email: e.get('email'),
					password: e.get('password')
				};
				
				window.firebase.createUser(user, function(error) {
				  if (error === null) {
						e.get('controllers.login').send('login', user, {
							email: user.email,
							name: e.get('name'),
							referral_token: window.md5(user.email, 987)
						});
				  } else {
				    alert(error);
				  }
				});
			} else {
				alert("Use valid data.");
			}
		}
	}
});
