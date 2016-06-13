import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'header',

    didInsertElement: function () {
        $('.button-collapse').sideNav();
    }
});
