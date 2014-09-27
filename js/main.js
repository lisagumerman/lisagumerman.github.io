$(document).ready(function () {
    $('a.box').on('click', popup);
    $('a.close').on('click', closeCurrent);

});

function popup() {
    var self = $(this).find('~div:first');
    self.addClass('popup-modal');
    self.fadeIn();
}

function closeCurrent() {
    var owner = $(this).parents("div.popup-modal:first");
    owner.fadeOut(400, function() {
        owner.removeClass('popup-modal');
    });

}