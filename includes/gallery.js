// JavaScript Document
$(document).ready(function () {
    var tp = 0;
    //draw thumbnails
    $('.gallery_thumbnails').html($('.hidden_gallery_thumbnails').html());

    $('.gallery_thumbnails a').click(function (e) {

        e.preventDefault();

        $('.gallery_thumbnails a').removeClass('selected');
        $('.gallery_thumbnails a').children().animate({'opacity': '1'}, 500);

        $(this).addClass('selected');
        $(this).children().animate({'opacity': '.4'}, 500);

        var photo_caption = $(this).attr('title');
        var photo_fullsize = $(this).attr('href');
        var photo_preview = photo_fullsize.replace('_fullsize', '_preview');


        // Fade out preview, preload new image, fade preview back in
        $('.gallery_preview').fadeOut(500, function () {

            $('.gallery_preload_area').html('<img src="' + photo_preview + '" />');
            $('.gallery_preload_area img').imgpreload(function () {
                $('.gallery_preview').html('<a class="overlayLink" rel="gallery1" title="' + photo_caption + '" href="' + photo_fullsize + '" <img src="' + first_photo_preview + '">></a>');
                $('.gallery_preview').fadeIn(500);
            });

        });

    });
    $('.gallery_preview a img').fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',
        closeClick: 'True',
        closeBtn: 'False'
    });
    /*$('#up').hover(function(){
     //$(this).animate({"backgroundPosition":"0px 20px"},2000);
     //$(this).animate({top: "-20px"}, 500);
     $(this).css("backgroundPosition","0px 0px").animate({"backgroundPosition":"0px 20px"},4000);
     });
     $('#down').hover(function(){
     $(this).css("backgroundPosition","0px 0px").animate({"backgroundPosition":"0px -20px"},2000);
     });*/
    /*$('#down').hover(function(){
     $(this).css('background-position','top');
     });*/
    $('a.gallery_nav').click(function (e) {
        e.preventDefault();
        $('a.gallery_nav').removeClass('selected');


        if (this.id == 'down') {
            tp = tp - 100;
            $('.gallery_thumbnails').animate({top: "" + tp + "px"}, 500);
        }
        else if (tp != 0) {
            tp = tp + 100;
            $('.gallery_thumbnails').animate({top: "" + tp + "px"}, 500);
        }
    });

    //set the first pht
    var first_photo_caption = $('.gallery_thumbnails a').first().attr('title');
    var first_photo_fullsize = $('.gallery_thumbnails a').first().attr('href');
    var first_photo_preview = first_photo_fullsize.replace("_fullsize", "_preview");
    $('.gallery_preview').html('<a class="overlayLink" rel="gallery1" title="' + first_photo_caption + '" href="' + first_photo_fullsize + '" <img src="' + first_photo_preview + '">></a>');
    $('.gallery_caption').html('<p><a class="overlayLink zoom" title="' + first_photo_caption + '" href="' + first_photo_fullsize + '">View larger</a></p><p>' + first_photo_caption + '<a href="' + first_photo_fullsize + '" <img src="' + first_photo_preview + '">></a></p>');


});