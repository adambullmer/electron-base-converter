import Ember from 'ember';

export default Ember.Controller.extend({
    inputAlphabet  : '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    outputAlphabet : '0123456789',

    input: '1VDOo8VLztZ5IZD1qJ9ray',
    output: '',

    presets: [{
        'label'    : 'binary',
        'alphabet' : '01',
    }, {
        'label'    : 'octal',
        'alphabet' : '01234567',
    }, {
        'label'    : 'decimal',
        'alphabet' : '0123456789',
    }, {
        'label'    : 'hex',
        'alphabet' : '0123456789abcdef',
    }, {
        'label'    : 'base62',
        'alphabet' : '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }]
});
