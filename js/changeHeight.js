//hange Height based on Window Height
function changeHeight() {
    var windowHeight = $(window).height();
    var footerHeight = $("footer").height();
    $(".window-height").css({
        "height": windowHeight
    });
    $(".window-minheight").css({
      "min-height": windowHeight * 2
    });
    $(".page-holder").css({
      "padding-bottom" : footerHeight + 1
    });
}
window.addEventListener('resize', changeHeight);
changeHeight();
