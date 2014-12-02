import Ember from 'ember';

export default Ember.ArrayController.extend({
	needs: ['dashboard/admin/plans'],
	plans: Ember.computed.alias("controllers.dashboard/admin/plans.model")
});
