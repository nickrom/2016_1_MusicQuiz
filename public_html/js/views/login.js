var loginTemplate = require('tmpl/login')
var loginView = Backbone.View.extend({
	template: loginTemplate,
	el: $('#login'),
	initialize: function() {
		this.render()
	},
	render: function() {
		this.$el.html(this.template())
	}
})