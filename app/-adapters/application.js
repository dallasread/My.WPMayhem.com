import DS from 'ember-data';

window.firebase = new window.Firebase("https://wpmayhem.firebaseio.com");

export default DS.FirebaseAdapter.extend({
  firebase: window.firebase
});