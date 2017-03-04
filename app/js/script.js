jQuery(document).ready(function() {
    var controller = $.superscrollorama();

    controller.addTween('#fade-it', TweenMax.from( $('#fade-it'), 3, {css:{opacity: 0}}));
    controller.addTween('#fly-it', TweenMax.from( $('#fly-it'), 1, {css:{right:'1000px'}, ease:Quad.easeInOut}));
    controller.addTween('#spin-it', TweenMax.from( $('#spin-it'), .25, {css:{opacity:0, rotation: 720}, ease:Quad.easeOut}));
    controller.addTween('#scale-it', TweenMax.fromTo( $('#scale-it'), .25, {css:{opacity:0, fontSize:'20px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, fontSize:'240px'}, ease:Quad.easeInOut}));
    controller.addTween('#smush-it', TweenMax.fromTo( $('#smush-it'), .25, {css:{opacity:0, 'letter-spacing':'30px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, 'letter-spacing':'-10px'}, ease:Quad.easeInOut}), 0, 100); // 100 px offset for better timing

    jQuery('main.registration a[href^="#"], main.registration a[href^="."]').click(function() {
        var scroll_el = jQuery(this).attr('href');
        if (jQuery(scroll_el).length != 0) {
            jQuery('html, body').animate({
                scrollTop: jQuery(scroll_el).offset().top-70
            }, 1200);
        }
        return false;
    });
});
