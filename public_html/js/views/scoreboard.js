var scoreTemplate = require('views/scoreboard.js')
var mainView = Backbone.View.extend({
	template: scoreTemplate,
	el: $('#score'),
	initialize: function() {
		this.render()
	},
	render: function() {
		this.$el.html(this.template())
	}
})