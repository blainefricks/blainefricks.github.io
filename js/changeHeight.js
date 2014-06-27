//hange Height based on Window Height
function changeHeight() {
    var windowHeight = $(window).height();
    var footerHeight = $("footer").height();
    $(".window-height").css({
        "height": windowHeight
    });
    $(".window-minheight").css({
      "min-height": windowHeight
    });
    $(".page-holder").css({
      "padding-bottom" : footerHeight
    });
}
window.addEventListener('resize', changeHeight);
changeHeight();
