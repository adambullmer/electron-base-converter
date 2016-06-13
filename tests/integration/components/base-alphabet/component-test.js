import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('base-alphabet', 'Integration | Component | base alphabet', {
    integration: true
});

test('it renders', function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });"

    this.render(hbs`{{base-alphabet}}`);

    assert.ok(this.$('input'));
    assert.equal(this.$().text().trim(), 'base0');
});

test('it shows the base, based on the length of the alphabet', function (assert) {
    this.set('alphabet', '01');
    this.render(hbs`{{base-alphabet alphabet=alphabet}}`);

    assert.equal(this.$().text().trim(), 'base2');

    this.set('alphabet', '0123456789');
    assert.equal(this.$().text().trim(), 'base10');
});

test('it passes along the placeholder', function (assert) {
    this.render(hbs`{{base-alphabet placeholder="I'm a placeholder"}}`);
    assert.equal(this.$('input').attr('placeholder'), "I'm a placeholder");
});

test('it passes along the readonly flag', function (assert) {
    this.render(hbs`{{base-alphabet readonly=""}}`);
    assert.equal(this.$('input').prop('readonly'), true);
});
