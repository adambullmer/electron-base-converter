import Ember from 'ember';

export default Ember.Service.extend({
    data: [
        {
            'base'     : 2,
            'label'    : 'binary',
            'alphabet' : '01',
        }, {
            'base'     : 8,
            'label'    : 'octal',
            'alphabet' : '01234567',
        }, {
            'base'     : 10,
            'label'    : 'decimal',
            'alphabet' : '0123456789',
        }, {
            'base'     : 16,
            'label'    : 'hex',
            'alphabet' : '0123456789abcdef',
        }, {
            'base'     : 62,
            'label'    : 'base62',
            'alphabet' : '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        }
    ],

    getByBase: function (base) {
        return this.get('data').findBy('base', base);
    },

    getByAlphabet: function (alphabet) {
        return this.get('data').findBy('alphabet', alphabet);
    }
});
