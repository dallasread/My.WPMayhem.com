import Ember from 'ember';

export default Ember.ArrayController.extend({
	needs: ['dashboard'],
	installations: Ember.computed.alias("controllers.dashboard.installations")
});
