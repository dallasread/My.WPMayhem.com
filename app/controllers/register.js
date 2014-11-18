import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['user'],
	actions: {
		register: function() {
			if (this.get('email') && this.get('password')) {
				window.firebase.createUser({
					email: this.get('email'),
					password: this.get('password')
				}, function(error) {
				  if (error === null) {
				    console.log("User created successfully");
						//this.transitionToRoute('login');
				  } else {
				    console.log("Error creating user:", error);
				  }
				});
			} else {
				alert("Use valid data.");
			}
		}
	}
});
