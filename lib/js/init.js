/*-----------------------------------------------------------------------------------

 	Custom JS - All front-end jQuery
 
-----------------------------------------------------------------------------------*/

(function($) {
	
$(function() { 	//same as $(document).ready(); (Document is ready when the only HTML DOM is loaded, NOT its content e.g Images, Videos etc)



/*-----------------------------------------------------------------------------------*/
/*  Back to Top
/*-----------------------------------------------------------------------------------*/


        var topLink = $('#back-to-top');

        function msBackToTop(topLink) {
            
            if($(window).scrollTop() > 0) {
                topLink.fadeIn(200);
            } else {
                topLink.fadeOut(200);
            }
        }
        
        $(window).scroll( function() {
            msBackToTop(topLink);
        });
        
        topLink.find('a').click( function() {
            $('html, body').stop().animate({scrollTop:0}, 500);
            return false;
        });


/*-----------------------------------------------------------------------------------*/
/*  Flexslider
/*-----------------------------------------------------------------------------------*/


        $('.media').imagesLoaded( function(){
                
            $(this).flexslider({
                slideshow: false,
                prevText: '',           //String: Set the text for the "previous" directionNav item
                nextText: '',
                smoothHeight: true
            });

        });                       


/*-----------------------------------------------------------------------------------*/
/*  Collapseable Menu
/*-----------------------------------------------------------------------------------*/
            

        $('.widget_nav_menu ul ul').hide();
        
        $(".widget_nav_menu ul li:has(> ul)").click(function(){

            $(this).children('ul').slideToggle();

        });


/*-----------------------------------------------------------------------------------*/
/*  Tumblr Style PhotoGrid
/*-----------------------------------------------------------------------------------*/


        $('.photoset-grid').photosetGrid({
            gutter: '3px',
            highresLinks: true
        });


/*-----------------------------------------------------------------------------------*/
/*  Off-Canvas Sidebar
/*-----------------------------------------------------------------------------------*/


        $.slidebars({
            scrollLock: true // true or false
        });


/*-----------------------------------------------------------------------------------*/
/*  Portfolio LightBox
/*-----------------------------------------------------------------------------------*/


        $('.image-stack, .photoset-grid, .flexslider .slides').magnificPopup({ 

            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image',
            gallery:{
                enabled: true
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it
                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function 
                opener: function(openerElement) {
                  return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }           

        });


/*-----------------------------------------------------------------------------------*/
/*  IsoTope - Filter
/*-----------------------------------------------------------------------------------*/


        // cache container
        var $containerMasonry = $('#portfolio-grid');

        // filter portfolio items
        $('body').on('click', '.widget_filter a', function (e){   

            var selector = $(this).attr('data-filter');
            $containerMasonry.isotope({ filter: selector });

            $('.widget_filter a').removeClass('active');
            $(this).addClass('active');

            e.preventDefault(); // avoids default link behaviour

        });                


        // execute AFTER images loading
        $containerMasonry.imagesLoaded( function(){
            
            // initialize isotope
            $containerMasonry.isotope({

                itemSelector : '.portfolio',
                layoutMode: 'fitRows'

            });

        });


/*-----------------------------------------------------------------------------------*/
/*  Primary Navigation
/*-----------------------------------------------------------------------------------*/


        var pathname = (window.location.pathname.match(/[^\/]+$/)[0]);

        $('#primary-nav a').each(function() {

            if ($(this).attr('href') == pathname) {
                $(this).parents('li').addClass('active');
            } else {
                $(this).parents('li').removeClass('active');
            }

        });     


/*-----------------------------------------------------------------------------------*/
/*  Form Placeholder
/*-----------------------------------------------------------------------------------*/


        $(":input[placeholder]").placeholder();


/*-----------------------------------------------------------------------------------*/
/*  Form Validation
/*-----------------------------------------------------------------------------------*/


        $("#contact-form, #comments-form").validate();



});

	
})(jQuery);