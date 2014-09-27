$(document).ready(function () {
    $('a.box').on('click', popup);

});

function popup() {
    var self = $(this).find('~div:first');
    self.addClass('popup-body');
    self.fadeIn();



//    if ($(section).hasClass("active-popup")) {
//        $(section).attr('aria-hidden', true).removeClass("active-popup");
//    } else {
//        $(section).attr('aria-hidden', false).addClass("active-popup");
//    }
}