$(document).ready(function () {
    $("#fade").on('click', function() {
//        var owner = $(document).find('div.popup-modal:first');
//        closeDialog(owner);
        $("#joes").css({
            "fill": "red"
        });
    });
    $('a.box').on('click', popup);
    $('a.close').on('click', closeCurrent);
    $('#joes').click(function() {
        $("#joes").css({
            "fill" : "red"
        });
    });
});

function popup() {
    var self = $(this).find('~div:first');
    self.addClass('popup-modal');
    self.fadeIn();
    $("#fade").fadeIn();
}

function closeCurrent() {
    var owner = $(this).parents("div.popup-modal:first");
    closeDialog(owner);
}

function closeDialog(owner) {
    $("#fade").fadeOut();
    owner.fadeOut(400, function() {
        owner.removeClass('popup-modal');
    });
}