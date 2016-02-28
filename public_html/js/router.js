define([
    'backbone',
    'views/main',
    'views/login',
    'views/signup',
    'views/game',
    'views/scoreboard'
], function(
    Backbone,
    mainView,
    loginView,
    signupView,
    gameView,
    scoreboardView
){

    var Router = Backbone.Router.extend({
        routes: {
            'scoreboard': 'scoreboardAction',
            'game': 'gameAction',
            'login': 'loginAction',
            'signup': 'signupAction',
            '*default': 'defaultActions'
        },
        defaultActions: function () {
            //console.log('default');
            mainView.show()
        },
        scoreboardAction: function () {
            //console.log('score')
            scoreboardView.show()
        },
        gameAction: function () {
            //console.log('game')
            gameView.show()
        },
        loginAction: function () {
            //console.log('login')
            loginView.show()
        },
        signupAction: function () {
            signupView.show()
        }
    });

    return new Router();
});