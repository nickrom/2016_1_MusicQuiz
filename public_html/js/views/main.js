var mainTemplate = require('views/main.js')
var mainView = Backbone.View.extend({
	template: mainTemplate,
	initialize: function() {
		this.render()
	},
	render: function() {
		this.$el.html(this.template())
	}
})