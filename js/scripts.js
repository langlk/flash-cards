$(document).ready(function() {
  $("li").click(function() {
    $(this).children(".term").toggle();
    $(this).children(".definition").toggle();
    if ($(this).hasClass("green-background")) {
      $(this).removeClass("green-background");
    } else {
      $(this).addClass("green-background");
    }
  });
});
