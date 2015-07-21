Postflower.Views.Home = Backbone.View.extend({
  template: JST["home"],

  // initialize: function () {
  //   this.listenTo(Postflower.currentUser, "sync", Postflower._removeModalView);
  // },

  events: {
    "click signIn": "signIn"
  },

  signIn: function (event) {
    
  }
});
