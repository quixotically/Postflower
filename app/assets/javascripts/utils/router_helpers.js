Backbone.Router.prototype._requireSignedIn = function (callback) {
  if (!Postflower.currentUser.isSignedIn()) {
    Postflower._flashMessage("You must be signed in to perform that action", "error");
    this._goHome();
    // does this execute?
    return false;
  }

  return true;
}

Backbone.Router.prototype._goHome = function () {
	Backbone.history.navigate('', { trigger: true });
}

Backbone.Router.prototype._swapView = function (view) {
  this._currentView && this._currentView.remove();
  this._currentView = view;
  this.$rootEl.html(view.render().$el);
}
