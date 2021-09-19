(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    //Highlight top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 100
});

//Closes the Responsive menu when item clicked
$('.navbar-collapse ul li a').click(function(){
    $('.navbar-toggle').click();
});

//Offset for main Navigation
$('#mainNav').affix({
    offset:{
        top:50
    }
})
//light box plugin
$(function(){
    $('[rel="lightbox]"').lightbox();
});


})(jQuery); // End of use strict