define([
	'backbone',
	'tmpl/main'
], function(
	Backbone,
	tmpl
) {
	var mainView = Backbone.View.extend({
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

	return new mainView()
})