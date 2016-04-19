define(function (require) {

	var Backbone = require('backbone'),
		tmpl = require('tmpl/game'),
		Audio = require('models/audio'),
		WaveSurfer = require('lib/wavesurfer');


	var gameView = Backbone.View.extend({
		template: tmpl,
		events: {
			"click .container__game ": "playAudio",
			"click .song_name": "stopAudio"
		},
		initialize: function() {
			this.render()
			/*var wavesurfer = WaveSurfer.create({
			    container: '#waveform',
			    waveColor: 'violet',
			    progressColor: 'purple'

			});
			wavesurfer.load('/api/user/stream/')*/
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

		playAudio: function() {
			//var audio = new Audio()
			$('#audio')[0].play()
			//audio.getAudio()
		},

		stopAudio: function() {
			$('#audio')[0].stop()
		},


	})

	return new gameView()
});