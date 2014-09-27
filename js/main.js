$(document).ready(function () {
    $("#fade").on('click', function () {
        var owner = $(document).find('div.popup-modal:first');
        closeDialog(owner);
    });
    $('a.box').on('click', popup);
    $('a.close').on('click', closeCurrent);
 
});

function popup() {
    var self = $(this).find('~div:first');
    self.addClass('popup-modal');
    self.fadeIn();
    $("#fade").fadeIn();

    setupMudwagon();
}

function setupMudwagon() {
    $("#mudwagon-slider-1").slider();
    $("#mudwagon-slider-2").slider();
    $("#mudwagon-slider-3").slider();
}

function closeCurrent() {
    var owner = $(this).parents("div.popup-modal:first");
    closeDialog(owner);
}

function closeDialog(owner) {
    $("#fade").fadeOut();
    owner.fadeOut(400, function () {
        owner.removeClass('popup-modal');
    });
}



function playSound(audioFile) {
    var audio = new Audio(audioFile);
    audio.play();
}


$(document).ready(function () {
//$('body').on(click, 'a', function(){
//     var section = $(this).attr('id');
//     popup("#" + section + "-popup");
//}
//$('body').on(click, '.close, #fade', function(){
//     popup(".active-popup");

    $("#the-archive-slideshow").flexslider({ animationLoop: false, slideshow: false, controlNav: false, prevText: "<<", nextText: ">>" });
});
//function popup(section) {
//     $("#fade").fadeToggle();
//     if ( $(section).hasClass("active-popup"){
//         $(section).attr('aria-hidden',true).removeClass("active-popup");
//         }
//    else { $(section).attr('aria-hidden',false).addClass("active-popup");
//}
