import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		createInstallation: function() {
			var installation = this.store.createRecord('installation', {
				name: this.get('name'),
				address: this.get('address')
			}).save();
			this.set('name', '');
			this.set('address', '');
			this.transitionToRoute('dashboard.installations.show', installation);
			return false;
		}
	}
});
