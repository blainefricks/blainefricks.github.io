$(document).ready(function(){
  // Scroll Down
  $("#scrollDown").click(function(){
    $("html, body").animate({
      scrollTop:$("#scrollTo").offset().top},600)
  });
  // Parallax
  $(window).scroll(function() {
    var scrollAmount = $(window).scrollTop() / 5;
    scrollAmount = Math.round(scrollAmount);
    $('.has-parallax').css('backgroundPosition', '50% ' + scrollAmount + 'px');
  });
});
