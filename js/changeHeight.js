//hange Height based on Window Height
function changeHeight() {
    var windowHeight = $(window).height();
    var footerHeight = $("footer").height();
    $(".window-height").css({
        "height": windowHeight
    });
    $(".page-holder").css({
      "padding-bottom" : footerHeight + 1,
      "min-height": windowHeight * 2
    });
}
window.addEventListener('resize', changeHeight);
changeHeight();
