import Ember from 'ember';

export default Ember.Component.extend({
    alphabet    : '',
    placeholder : '',
    readonly    : null,

    base: function () {
        return 'base' + this.get('alphabet').length;
    }.property('alphabet')
});
