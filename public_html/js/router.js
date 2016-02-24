define([
    'backbone'
], function(
    Backbone
){

    var Router = Backbone.Router.extend({
        routes: {
            'scoreboard': 'scoreboardAction',
            'game': 'gameAction',
            'login': 'loginAction',
            '*default': 'defaultActions'
        },
        defaultActions: function () {
            console.log('default')
        },
        scoreboardAction: function () {
            console.log('score')
        },
        gameAction: function () {
            console.log('game')
        },
        loginAction: function () {
            console.log('login')
            var view = require('views/login')
        }
    });

    return new Router();
});