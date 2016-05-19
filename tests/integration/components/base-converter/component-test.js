import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const converterStub = Ember.Service.extend({
    convertCallCount: 0,
    convert(/*input, inputAlphabet, outputAlphabet*/) {
        this.set('convertCallCount', this.get('convertCallCount') + 1);
        return '1';
    }
});

moduleForComponent('base-converter', 'Integration | Component | base converter', {
    integration: true,

    beforeEach: function () {
        // resets the call counter
        converterStub.convertCallCount = 0;

        this.register('service:converter', converterStub);
        // Calling inject puts the service instance in the test's context,
        // making it accessible as "converter" within each test
        this.inject.service('converter', { as: 'converter' });
    }
});

test('it renders', function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });"

    this.render(hbs`{{base-converter}}`);

    assert.equal(this.$('input').length, 4);
    assert.equal(this.$('button').length, 1);
});

test('it converts when the button is clicked', function (assert) {
    this.render(hbs`{{base-converter}}`);
    this.$('button').click();

    assert.strictEqual(this.$('input[name="convertOutput"]').val(), '1', `the output element should have a value of 1, actually had a value of ${this.$('input[name="convertOutput"]').val()}`);
    assert.equal(this.get('converter.convertCallCount'), 1, `Convert should only be called once. It was called ${this.get("converter.convertCallCount")} times`);
});

test('it assigns the output to the supplied output variable', function (assert) {
    this.set('output', '');
    this.render(hbs`{{base-converter output=output}}`);
    this.$('button').click();

    assert.strictEqual(this.get('output'), '1', '');
    assert.equal(this.get('converter.convertCallCount'), 1, `Convert should only be called once. It was called ${this.get("converter.convertCallCount")} times`);
});
