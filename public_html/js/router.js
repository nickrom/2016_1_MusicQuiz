define(function(require){

    var Backbone = require('backbone'),
        mainView = require('views/main'),
        loginView = require('views/login'),
        signupView = require('views/signup'),
        gameView = require('views/game'),
        scoreboardView = require('views/scoreboard')

    var Router = Backbone.Router.extend({
        routes: {
            'scoreboard': 'scoreboardAction',
            'game': 'gameAction',
            'login': 'loginAction',
            'signup': 'signupAction',
            '*default': 'defaultActions'
        },
        defaultActions: function () {
            mainView.show()
        },
        scoreboardAction: function () {
            //var scoreboard = new scoreboardView()
            scoreboardView.show()
        },
        gameAction: function () {
            gameView.show()
        },
        loginAction: function () {
            loginView.show()
        },
        signupAction: function () {
            signupView.show()
        }
    });

    return new Router();
});