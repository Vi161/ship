$(document).ready(function() {
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
