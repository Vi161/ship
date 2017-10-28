$(document).ready(function() {
//    --------hide div-----------
    $(function(){
        $('.main__block4__hide').hide();
        $a = $('.main__block4__button');
        $a.on('click', function(event) {
            event.preventDefault();
            $a.not(this).next().slideUp(500);
            $(this).next().slideToggle(500);
        });
    });

    $("#owl-demo").owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        autoPlay: 2000,
        pagination: false

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });
    $("#owl-demo1").owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        autoPlay: 2000

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
    });
});
