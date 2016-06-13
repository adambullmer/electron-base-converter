import Ember from 'ember';

export default Ember.Controller.extend({
    inputAlphabet  : '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    outputAlphabet : '0123456789',

    input: '1VDOo8VLztZ5IZD1qJ9ray',
    output: '',

    history: Ember.inject.service(),

    actions: {
        convert: function () {
            this.get('history').add(this.get('input'), this.get('output'), this.get('inputAlphabet'), this.get('outputAlphabet'));
        }
    }
});
