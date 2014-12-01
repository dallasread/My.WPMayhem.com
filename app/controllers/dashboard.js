import Ember from 'ember';

export default Ember.ObjectController.extend({
	needs: ['login', 'dashboard'],
	installations: (function() {
    return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
      sortProperties: ['name'],
      content: this.get('session.user.installations')
    });
  }).property('session.user.installations')
});
