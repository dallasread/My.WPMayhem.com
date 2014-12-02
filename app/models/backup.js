import DS from 'ember-data';

var Backup = DS.Model.extend({
	name: DS.attr('string'),
	installation: DS.belongsTo('installation', { async: true }),
	started_at: DS.attr('string', { defaultValue: new Date().getTime() }),
	finished_at: DS.attr('string'),
	duration: function() {
    return parseInt(this.get('finished_at')) - parseInt(this.get('started_at'));
  }.property('started_at', 'finished_at')
});

export default Backup;
