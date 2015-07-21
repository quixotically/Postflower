Backbone.Router.prototype.sessionNew = function (callback) {
  if (!this._requireSignedOut(callback)) { return; }
  var view = new Postflower.Views.SessionNew({
    callback: callback
  });

  Postflower._swapView(view);
}

Backbone.Router.prototype._requireSignedIn = function (callback) {
  if (!Postflower.currentUser.isSignedIn()) {
    Postflower._flashMessage("You must be signed in to perform that action", "error");
    callback = callback || this._goHome.bind(this);
    this.sessionNew(callback);
    return false;
  }

  return true;
}

Backbone.Router.prototype._requireSignedOut = function  (callback) {
  if (Postflower.currentUser.isSignedIn()) {
    callback = callback || this._goHome.bind(this);
    callback();
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
