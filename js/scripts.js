$(document).ready(function(){
  // Scroll Down
  $("#scrollDown").click(function(){
    $("html, body").animate({
      scrollTop:$("#scrollTo").offset().top},600)
  });
  $("#scrollToProjects").click(function(){
    $("html, body").animate({
      scrollTop:$("#projects").offset().top},600)
  });
  $("#scrollToBlog").click(function(){
    $("html, body").animate({
      scrollTop:$("#blog").offset().top},600)
  });
});

function parallax() {
  $(window).scroll(function() {
    var scrollAmount = $(window).scrollTop() / 5;
    scrollAmount = Math.round(scrollAmount);
    $('.has-parallax').css('backgroundPosition', '50% ' + scrollAmount + 'px');
  });
}
parallax();

function stickyNav() {
  $(window).scroll(function() {
    var $nav = $("nav");
    var $stickNav = $('.stickNav');
    var window_offset = $stickNav.offset().top - $(window).scrollTop();
    if (window_offset < $nav.height()) {
      $nav.addClass('stuckNav');
    }
    if (window_offset > $nav.height()) {
      $nav.removeClass('stuckNav');
    }
 });
}
stickyNav();