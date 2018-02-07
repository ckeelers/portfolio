$(function() {
  $(".navigation a").on('click', function(){
    $(".navigation a").removeClass("selected");
    $(this).addClass("selected");
  });
});
