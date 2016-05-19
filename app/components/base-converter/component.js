/**
 * Uses an experimental string math library (strint) to accomodate
 * for numbers larger than what javascript/nodejs can handle.
 *
 */

import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['row'],

    converter: Ember.inject.service(),

    inputAlphabet  : '',
    outputAlphabet : '',

    input  : '',
    output : '',

    actions: {
        convert: function () {
            let converter     = this.get('converter'),
                encodedString = converter.convert(this.get('input'), this.get('inputAlphabet'), this.get('outputAlphabet'));

            this.set('output', encodedString);
        }
    }
});
