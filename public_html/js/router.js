define(function(require){

    var Backbone = require('backbone'),
        MainView = require('views/main'),
        LoginView = require('views/login'),
        SignupView = require('views/signup'),
        GameView = require('views/game'),
        ScoreboardView = require('views/scoreboard')
    var $page = $('#page');
    var Router = Backbone.Router.extend({
        routes: {
            'scoreboard': 'scoreboardAction',
            'game': 'gameAction',
            'login': 'loginAction',
            'signup': 'signupAction',
            '*default': 'defaultActions'
        },
        defaultActions: function () {
            MainView.show()
        },
        scoreboardAction: function () {
            //var scoreboard = new scoreboardView()
            //$page.append(scoreboardView.render().$el)
            ScoreboardView.show()
        },
        gameAction: function () {
            GameView.show()
            //$page.append(GameView.render().$el)
        },
        loginAction: function () {
            LoginView.show()
            //LoginView.show()
            //$page.append(LoginView.render().$el)
        },
        signupAction: function () {
            SignupView.show()
            //$page.append(SignupView.render().$el)
        }
    });

    return new Router();
});