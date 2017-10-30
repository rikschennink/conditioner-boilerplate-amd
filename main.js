require(['./node_modules/conditioner-core/dist/conditioner-core.js'], function(conditioner) {

    // apply custom settings
    conditioner.addPlugin({

        // converts module aliases to paths
        moduleSetName: (name) => '/ui/' + name + '.js',

    });

    // lets go!
    conditioner.hydrate( document.documentElement );

});
