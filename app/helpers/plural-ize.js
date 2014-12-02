import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(number, singular, plural) {
	var word = parseInt(number) === 1 ? singular : plural;
  return new Ember.Handlebars.SafeString(number + " " + word);
});