Postflower.Routers.UsersRouter = Backbone.Router.extend({
  initialize: function () {
    this.$rootEl = $("#main");
  },

  routes: {
    '': 'home',
    'users/:id': 'show'
  },

  home: function () {
    //var callback = this.home.bind(this);

    this._swapView(new Postflower.Views.Home());
  },

  show: function (id) {
    //var callback = this.show.bind(this, id);

    var user = new Postflower.Models.User({ id: id });
    user.fetch();

    var view = new Postflower.Views.UserShow({
      model: user
    });

    this._swapView(view);
  }
});
