$(document).ready(function(){
  // Scroll Down
  $("#scrollDown").click(function(){
    $("html, body").animate({
      scrollTop:$("#scrollTo").offset().top},600)
  });
  $("#scrollToProjects").click(function(){
    $("html, body").animate({
      scrollTop:$("#projects").offset().top - 90},600)
  });
  $("#scrollToBlog").click(function(){
    $("html, body").animate({
      scrollTop:$("#blog").offset().top - 90},600)
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
  var $stickNav = $('.stickNav');
  $(window).scroll(function() {
    var $nav = $("nav");
    var window_offset = $stickNav.offset().top - $(window).scrollTop();
    if (window_offset < $nav.height()) {
      $nav.addClass('stuckNav');
    }
    if (window_offset > $nav.height()) {
      $nav.removeClass('stuckNav');
    }
  });
  $(window).scroll(function() {
    var $blogNav = $(".blog-nav");
    var window_offset = $stickNav.offset().top - $(window).scrollTop();
    if (window_offset < $blogNav.height()) {
      $blogNav.addClass('stuckNav');
    }
    if (window_offset > $blogNav.height()) {
      $blogNav.removeClass('stuckNav');
    }
  });
}
stickyNav();

// Change Height based on Window Height
function changeHeight() {
    var windowHeight = $(window).height();
    var windowHeight50 = windowHeight * 50/100;
    var footerHeight = $("footer").height();
    $(".window-height").css({
        "height": windowHeight
    });
    $(".window-height50").css({
        "height": windowHeight50
    });
    $(".page-holder").css({
      "padding-bottom" : footerHeight + 1,
      "min-height": windowHeight
    });
    $("section.blog-hero").css({
        "min-height" : .75 * windowHeight
    })
}
window.addEventListener('resize', changeHeight);
changeHeight();