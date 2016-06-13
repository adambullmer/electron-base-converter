/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
    var app = new EmberApp(defaults, {
        // Add options here
        }),
        fontDestination = {
            destDir: 'fonts'
        };

    // Use `app.import` to add additional libraries to the generated
    // output files.
    //
    // If you need to use different assets in different
    // environments, specify an object as the first parameter. That
    // object's keys should be the environment name and the values
    // should be the asset to use in that environment.
    //
    // If the library that you are including contains AMD or ES6
    // modules that you would like to import into your application
    // please specify an object with the list of modules as keys
    // along with the exports of each module as its value.

    app.import('bower_components/materialize/dist/css/materialize.css');
    app.import('bower_components/material-design-icons/iconfont/material-icons.css');
    // app.import('bower_components/material-design-lite/material.css');

    app.import('vendor/strint.js');
    app.import('bower_components/materialize/dist/js/materialize.js');
    // app.import('bower_components/material-design-lite/material.js');

    // Font Assets
    // app.import('bower_components/font-awesome/fonts/fontawesome-webfont.eot'   , fontDestination);
    // app.import('bower_components/font-awesome/fonts/fontawesome-webfont.svg'   , fontDestination);
    // app.import('bower_components/font-awesome/fonts/fontawesome-webfont.ttf'   , fontDestination);
    // app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff'  , fontDestination);
    // app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff2' , fontDestination);
    app.import('bower_components/material-design-icons/iconfont/MaterialIcons-Regular.eot'   , { destDir: 'assets' });
    app.import('bower_components/material-design-icons/iconfont/MaterialIcons-Regular.svg'   , { destDir: 'assets' });
    app.import('bower_components/material-design-icons/iconfont/MaterialIcons-Regular.ttf'   , { destDir: 'assets' });
    app.import('bower_components/material-design-icons/iconfont/MaterialIcons-Regular.woff'  , { destDir: 'assets' });
    app.import('bower_components/material-design-icons/iconfont/MaterialIcons-Regular.woff2' , { destDir: 'assets' });

    // app.import('bower_components/materialize/dist/font/material-design-icons/Material-Design-Icons.eot'   , { destDir: 'assets' });
    // app.import('bower_components/materialize/dist/font/material-design-icons/Material-Design-Icons.svg'   , { destDir: 'assets' });
    // app.import('bower_components/materialize/dist/font/material-design-icons/Material-Design-Icons.ttf'   , { destDir: 'assets' });
    // app.import('bower_components/materialize/dist/font/material-design-icons/Material-Design-Icons.woff'  , { destDir: 'assets' });
    // app.import('bower_components/materialize/dist/font/material-design-icons/Material-Design-Icons.woff2' , { destDir: 'assets' });

    app.import('bower_components/materialize/dist/fonts/roboto/Roboto-Bold.eot'   , { destDir: 'assets' });
    app.import('bower_components/materialize/dist/fonts/roboto/Roboto-Bold.ttf'   , { destDir: 'assets' });
    app.import('bower_components/materialize/dist/fonts/roboto/Roboto-Bold.woff'  , { destDir: 'assets' });
    app.import('bower_components/materialize/dist/fonts/roboto/Roboto-Bold.woff2' , { destDir: 'assets' });

    app.import('bower_components/materialize/dist/fonts/roboto/Roboto-Light.eot'   , { destDir: 'assets' });
    app.import('bower_components/materialize/dist/fonts/roboto/Roboto-Light.ttf'   , { destDir: 'assets' });
    app.import('bower_components/materialize/dist/fonts/roboto/Roboto-Light.woff'  , { destDir: 'assets' });
    app.import('bower_components/materialize/dist/fonts/roboto/Roboto-Light.woff2' , { destDir: 'assets' });

    app.import('bower_components/materialize/dist/fonts/roboto/Roboto-Medium.eot'   , { destDir: 'assets' });
    app.import('bower_components/materialize/dist/fonts/roboto/Roboto-Medium.ttf'   , { destDir: 'assets' });
    app.import('bower_components/materialize/dist/fonts/roboto/Roboto-Medium.woff'  , { destDir: 'assets' });
    app.import('bower_components/materialize/dist/fonts/roboto/Roboto-Medium.woff2' , { destDir: 'assets' });

    app.import('bower_components/materialize/dist/fonts/roboto/Roboto-Regular.eot'   , { destDir: 'assets' });
    app.import('bower_components/materialize/dist/fonts/roboto/Roboto-Regular.ttf'   , { destDir: 'assets' });
    app.import('bower_components/materialize/dist/fonts/roboto/Roboto-Regular.woff'  , { destDir: 'assets' });
    app.import('bower_components/materialize/dist/fonts/roboto/Roboto-Regular.woff2' , { destDir: 'assets' });

    app.import('bower_components/materialize/dist/fonts/roboto/Roboto-Thin.eot'   , { destDir: 'assets' });
    app.import('bower_components/materialize/dist/fonts/roboto/Roboto-Thin.ttf'   , { destDir: 'assets' });
    app.import('bower_components/materialize/dist/fonts/roboto/Roboto-Thin.woff'  , { destDir: 'assets' });
    app.import('bower_components/materialize/dist/fonts/roboto/Roboto-Thin.woff2' , { destDir: 'assets' });

    return app.toTree();
};
