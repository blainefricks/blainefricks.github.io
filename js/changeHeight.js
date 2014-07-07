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
}
window.addEventListener('resize', changeHeight);
changeHeight();
