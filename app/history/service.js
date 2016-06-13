import Ember from 'ember';

export default Ember.Service.extend({
    model       : [],
    modelSortBy : ['date:desc'],
    sortedModel : Ember.computed.sort('model', 'modelSortBy'),

    add: function (input, output, inputAlphabet, outputAlphabet) {
        this.get('model').addObject({
            date           : new Date(),
            input          : input,
            output         : output,
            inputAlphabet  : inputAlphabet,
            outputAlphabet : outputAlphabet
        });
    }
});
