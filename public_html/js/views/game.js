var gameTemplate = require('views/scoreboard.js')
var mainView = Backbone.View.extend({
	template: gameTemplate,
	el: $('#game'),
	initialize: function() {
		this.render()
	},
	render: function() {
		this.$el.html(this.template())
	}
})