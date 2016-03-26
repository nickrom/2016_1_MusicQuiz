define(function (require) {

	var Backbone = require('backbone')
	var Tmpl = require('tmpl/signup')
	var User = require('models/user')

	var SignupView = Backbone.View.extend({
		events: {
			"submit ": "submit"
		},

		template: Tmpl,
		model: User,

		initialize: function() {
			this.render()
			/*//this.listenTo(this.model, "change", this.render)
			this.fields = {
		        'login': this.$el.find('.sign-form__login'),
		        'email': this.$el.find('sign-form__email'),
		        'password': this.$el.find('sign-form__password'),
		        'submitPassword': this.$el.find('sign-form__submit-password')
		    }
		    console.log(this.fields.login.val())
		    this.errorField = this.$el.find('.sign-form-error')
*/
		},

		render: function() {
			this.$el.html(this.template)
			//this.$el.find('.sign-form-error').text('2refwd')
			return this;
		},

		submit: function(e) {
			e.preventDefault()

			fields = {
		        'login': this.$el.find('.sign-form__login'),
		        'email': this.$el.find('.sign-form__email'),
		        'password': this.$el.find('.sign-form__password'),
		        'submitPassword': this.$el.find('.sign-form__submit-password')
		    }

		    errorField = this.$el.find('.sign-form-error').text('')

			//errorField.text('2refwd')
			var userData = {
        		login: fields.login.val(),
        		email: fields.email.val()
      		};
			
			var user = new User()
			var error = user.validate(userData)
			
			if (error != undefined ) {
				console.log(error)
				console.log(fields.email)
				//errorField.text(error)
				var  a =1
			} 
			else {
				alert('YOU SIGNED UP')
			}

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

	return new SignupView()
})