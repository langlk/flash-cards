$(document).ready(function() {
  $("li").click(function() {
    $(this).children(".term").toggle();
    $(this).children(".definition").toggle();
  });
});
