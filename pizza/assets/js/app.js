$(function() {
    
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();
    
    /* Fixed Header */
    checkscroll(scrollOffset);
    
    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        
        checkscroll(scrollOffset);
        
    });
    
    function checkscroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }
    
    
    /* smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
        var $this = $(this),
            blockid = $this.data('scroll'),
            blockOffset = $(blockid).offset().top;
        
        $("#nav a").removeClass("active");
        $this.addClass("active");
        
        
        $("html, body").animate({
           scrollTop: blockOffset 
        }, 600);
    });
    
    
    
    /* Menu nav toggle */
    
    
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();
        
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });
    
    
    
    
    
    
        
        
});