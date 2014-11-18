import Ember from 'ember';

export default Ember.ObjectController.extend({
	actions: {
		updateInstallation: function(installation) {
			installation.save();
			this.transitionToRoute('dashboard.installations.show', installation);
			return false;
		},
		deleteInstallation: function(installation) {
			if (confirm('Are you sure you want to delete this installation?')) {
				installation.destroyRecord();
				this.transitionToRoute('dashboard');
			}
		}
	}
});
