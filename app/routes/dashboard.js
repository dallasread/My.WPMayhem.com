import Ember from 'ember';

export default Ember.Route.extend({
	setupController: function(controller) {
    controller.set('installations', this.store.findAll('installation'));
  }
});
