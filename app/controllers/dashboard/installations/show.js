import Ember from 'ember';

export default Ember.ObjectController.extend({
	actions: {
		backupInstallation: function(installation, callback) {
			this.store.createRecord('backup', {
				name: new Date(),
				installation: installation
			}).save().then(function(backup) {
				window.firebase.child('installations/' + installation.id + '/backups/' + backup.id).set(true);
				if (typeof callback !== "undefined") { callback(backup); }
			});
		},
		restoreFromBackup: function(backup) {
			backup.get('installation').then(function(installation) {
				installation.set('restore_id', backup.id).save();
			});
		},
		cloneFromBackup: function(backup) {
			var e = this;
			backup.get('installation').then(function(installation) {
				var data = installation.toJSON();
				data.name += ' Clone';
				data.restore_id = backup.id;
				e.store.createRecord('installation', data).save().then(function(new_installation) {
					window.firebase.child('users/' + e.get('session.auth.uid') + '/installations/' + new_installation.id).set(true);
					window.firebase.child('installations/' + new_installation.id + '/users/' + e.get('session.auth.uid')).set(true);
					e.transitionToRoute('dashboard.installations.show', new_installation);
				});
			});
		}
	}
});
