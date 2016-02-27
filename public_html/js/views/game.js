define([
	'backbone',
	'tmpl/game'
], function(
	Backbone,
	tmpl
) {
	var gameView = Backbone.View.extend({
		template: tmpl,

		initialize: function() {
			//TODO
		},

		render: function() {
			this.$el.html(this.template)
			return this;
		},

		show: function() {
			$('#page').html(this.render().el);
			return this;
		},

		hide: function() {
			this.$el.html('')
			return this;
		}
	})

	return new gameView()
})