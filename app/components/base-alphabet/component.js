import Ember from 'ember';

export default Ember.Component.extend({
    alphabet    : '',
    placeholder : '',
    readonly    : null,

    presets: Ember.inject.service(),

    didInsertElement: function () {
        this.$('.dropdown-button').dropdown();
    },

    base: function () {
        var alphabet = this.get('alphabet'),
            preset   = this.get('presets').getByAlphabet(alphabet);

        if (preset !== undefined) {
            return preset.label;
        }

        return 'base ' + alphabet.length;
    }.property('alphabet'),

    actions: {
        usePreset: function (alphabet) {
            this.set('alphabet', alphabet);
        }
    }
});
