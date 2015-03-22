// JavaScript Document
var count = 0;
//var play=true;
$(document).ready(function () {
    $("#description").hide();
    $('.panel img').imgpreload(function () {
        $("#description").show(1500);
        $(".panel:eq(0)").fadeIn(3000);
    });

});
function playSlideshow() {
    $("#description").hover(function () {
        play = false;
        $('.play').css('background-position', 'left');
        $('.play').fadeIn(500);
    }, function () {
        play = true;
        $('.play').css('background-position', 'right');
        $('.play').fadeOut(1500);
    });

}

function slideshow() {
    while (count < 6) {
        $(".panel:eq(" + count + ")").animate({opacity: '0'}, 1500);
        count++;
        if (count == 6) {
            count == 0;
        }
        $(".panel:eq(" + count + ")").animate({opacity: '1'}, 1500);
    }

}