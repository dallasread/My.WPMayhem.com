import Ember from 'ember';
import DS from 'ember-data';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

Ember.Route.reopen({
  render: function() {
    this._super();
    window.scrollTo(0, 0);
  }
});

loadInitializers(App, config.modulePrefix);

export default App;
