require.config({
	baseUrl: "js",
	paths: {
        'underscore': "lib/underscore",
        'backbone': "lib/backbone",
        'jquery': "lib/jquery"
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