import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		if (params.installation_id) {
			return this.store.find('installation', params.installation_id);
		}
  },
	deactivate: function() {
		this.controller.model.rollback();
	}
});
