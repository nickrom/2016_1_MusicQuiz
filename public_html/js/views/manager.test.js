define(function(require) {

  //QUnit.module('views/viewManager');

  var Backbone = require('backbone');
  var ViewManager = require('views/viewManager');

    QUnit.test("viewManager - экземпляр Backbone.View", function() {
        QUnit.ok(viewManager instanceof Backbone.View, "viewManager - экземпляр Backbone.View");
    });

    QUnit.test("Добавление/скрытие вьюх", function() {
        var v = Backbone.View.extend({
          initialize: function() {

          },

          show: function() {
            rhis.trigger('show');
          }
        })

        var v1 = new v();

        viewManager.addView(v1);

        v1.show();
        QUnit.ok();
        v1.hide();
        QUnit.ok();
    });


});