import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		createInstallation: function() {
			var e = this;
			this.store.createRecord('installation', {
				name: this.get('name'),
				address: this.get('address')
			}).save().then(function(installation) {
				window.firebase.child('users/' + e.get('session.auth.uid') + '/installations/' + installation.id).set(true);
				window.firebase.child('installations/' + installation.id + '/users/' + e.get('session.auth.uid')).set(true);
				e.set('name', '');
				e.set('address', '');
				e.transitionToRoute('dashboard.installations.show', installation);
			});
		}
	}
});
