$(function() {
    new WOW().init();
});

$(function(){
    $("#toggle").click(function() {
        $("#overlay").slideToggle();
    });
});

$(function() {
    $('.menu_aboutme').click(function() {
        $("html,body").animate({scrollTop:$(".about").offset().top});
        $("#overlay").slideToggle();
    });

    $('.menu_skill').click(function() {
        $("html,body").animate({scrollTop:$(".skill").offset().top});
        $("#overlay").slideToggle();
    });
      
    $('.menu_service').click(function() {
        $("html,body").animate({scrollTop:$(".service").offset().top});
        $("#overlay").slideToggle();
    });

    $('.menu_works').click(function() {
        $("html,body").animate({scrollTop:$(".portfolio").offset().top});
        $("#overlay").slideToggle();
    });

    $('.menu_contact').click(function() {
        $("html,body").animate({scrollTop:$(".footer").offset().top});
        $("#overlay").slideToggle();
    });

    $(".fadein").waypoint(function(direction) {
        if (direction === "down") {
            $(this.element).addClass("fadeInUp");
            this.destroy();
        }
    }, { offset: "100%" });

});