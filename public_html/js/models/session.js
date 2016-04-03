define(function(require){

    var Backbone = require('backbone')
    var $ = require('jquery')
    var User = require('models/')

    var Session = Backbone.Model.extend({

    	default: {
    		authorized: false
    	},

    	initialize: function() {

        },

        login: function () {

        },

        logout: function () {

        },

        signup: function () {
            
        }
    }

        return new Session()

    });

