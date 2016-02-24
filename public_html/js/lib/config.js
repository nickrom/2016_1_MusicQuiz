require.config({
	baseUrl: "js",
	paths: {
        'underscore': "lib/underscore.js",
        'backbone': "lib/backbone.js",
        'jquery': "lib/jquery.js"
    },
    shim: {
    	'jquery': {
    		exports: 'jQuery'
    	},
    	'underscore': {
    		exports: '_'
    	},
    	'backbone': {
    		deps: ['underscore', 'jquery'],
    		exports: 'Backbone'
    	}
    },
    waitSeconds: 15
});