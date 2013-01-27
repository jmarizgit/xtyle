define(["jquery"], function($){
    $("#loadcontent").load("pages/home.html");
    
    // navigation link handler
    $('nav.menu').on('click', 'a', function(e) {
        e.preventDefault();
        var url = $(this).attr('href');
        $('nav.menu a').removeClass("active");
        $(this).addClass("active");
        $("#loadcontent").load(url);
        $('html, body').animate({ scrollTop: 0 }, 0);
    });
});