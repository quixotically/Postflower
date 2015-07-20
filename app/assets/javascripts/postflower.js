window.Postflower = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(current_user_id) {
    this.currentUser = new Postflower.Models.CurrentUser({ id:
      current_user_id });
    this.currentUser.fetch();

    // this.header = new Postflower.Views.Header({ el: "#header" });

    new Postflower.Routers.UsersRouter();

    Backbone.history.start();
  }
};
