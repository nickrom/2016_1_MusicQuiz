define(function(require) {

	var Backbone = require('backbone'),
		tmpl = require('tmpl/game'),
		WaveSurfer = require('wavesurfer'),
		SinglePlayer = require('views/game/singleplayer');


	var gameView = Backbone.View.extend({
		template: tmpl,
		events: {
			/*"click .container__game ": "playAudio",
			"click .song_name": "stopAudio",*/
			"click .game__type#single": "singlePlayer",
			"click .game__type#multi": "multiPlayer",
			"click ": "cancel",
		},
		initialize: function() {
			this.render()
		},

		render: function() {
			this.$el.html(this.template)
			return this;
		},

		show: function () {
            this.trigger('show');
            this.$el.show();
        },

		hide: function() {
			this.$el.hide()
		},

		singlePlayer: function() {
			this.$('.game__type').hide()
			this.$('.game-field').show()
			SinglePlayer();

		},

		multiPlayer: function() {
			this.$('.game__type').hide()
			this.$('.search-opponent').show()
		},

		playAudio: _.once(function() {

			
		}),

		stopAudio: function() {
			$('#audio')[0].stop()
		},


	})

	return gameView;

});