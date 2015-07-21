Postflower._flashMessage = function (msg, type) {
  type === "error" ? $("#flash").addClass("error") :
    $("#flash").addClass("success");
  $("#flash").removeClass("hidden");

  if (msg instanceof Array) {
    $("#flash").html(JST["layouts/messages"]({ msgs: msg }));
  } else {
    $("#flash").html(msg);
  }
  window.setTimeout(function() {
    $("#flash").empty();
    $("#flash").removeClass("error success");
    $("#flash").addClass("hidden");
  }, 3000);
}
