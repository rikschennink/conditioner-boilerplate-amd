require(['./node_modules/conditioner-core/umd/conditioner-core.js'], function(conditioner) {

    // apply custom settings
    conditioner.addPlugin({

        // converts module aliases to paths
        moduleSetName: function(name) { return '/ui/' + name + '.js' },

        // setup AMD require
        moduleImport: function(name) {
            return new Promise(function(resolve) {
                require([name], function(module) {
                    resolve(module);
                });
            });
        }

    });

    // lets go!
    conditioner.hydrate( document.documentElement );

});