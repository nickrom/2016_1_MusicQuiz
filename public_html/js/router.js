define([
    'backbone',
    'views/main',
    'views/login',
    'views/game',
    'views/scoreboard'
], function(
    Backbone,
    mainView,
    loginView,
    gameView,
    scoreboardView
){

    var Router = Backbone.Router.extend({
        routes: {
            'scoreboard': 'scoreboardAction',
            'game': 'gameAction',
            'login': 'loginAction',
            '*default': 'defaultActions'
        },
        defaultActions: function () {
            //console.log('default');
            mainView.show();
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
        }
    });

    return new Router();
});