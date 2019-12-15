/*-----------------------------------------------------------------------------------

    Primary function to ajaxify load more button
 
-----------------------------------------------------------------------------------*/

(function($) {
	
$(function() { 	//same as $(document).ready(); (Document is ready when the only HTML DOM is loaded, NOT its content e.g Images, Videos etc)


    // capture click event and proceed
    $('body').on('click', '.load-more a', function (e){


        // helper variables
        var nextPage = parseInt( $('.load-more a').attr('data-page') ) + 1;
        var maxPage = parseInt( $('.load-more a').attr('data-pages') );

        var loadMoreText = $('.load-more a span').html();
        var loadingText = $('.load-more a').attr('data-loading-text');


        // Are there more posts to load?
        if(nextPage <= maxPage) {
        

            // Show that we're working.
            $('.load-more a span').html(loadingText);


            $.ajax({
                url: 'portfolio-page-'+ nextPage +'.php',
                data: { paged: nextPage },
                dataType: "html",
                success: function(response) {

                    // store response in variable
                    var newEntries = $(response);

                    // append response & fadeIn
                    newEntries.imagesLoaded( function(){
                
                        $("#portfolio-grid").isotope( 'insert', newEntries );

                    });

                    // update page number
                    $('.load-more a').attr('data-page', nextPage);

                    // increase page number
                    nextPage++;

                    // update button text else hide
                    if(nextPage <= maxPage) {
                        $('.load-more span').text(loadMoreText);
                    } else {
                        $('.load-more').fadeOut();
                    }


                }
            });



        }   
        
        e.preventDefault();
    });






});

	
})(jQuery);