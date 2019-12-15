(function($){


    $(function() {
        $('body').initTrendSC();
    });


    $.fn.initTrendSC = function() {


        /*-----------------------------------------------------------------------------------*/
        /*  TOGGLE
        /*-----------------------------------------------------------------------------------*/


        $(this).off('click', '.trend-toggle-title > a');
        $(this).on('click', '.trend-toggle-title > a', function (e) {

            
            // grab current toggle heading and body
            var toggleHeading = $(this).parents('.trend-toggle-heading');
            var toggleBody = toggleHeading.next('.trend-toggle-body');

            // slideToggle body on each click
            toggleBody.slideToggle(300);

            // toggleClass on heading and body elements
            toggleHeading.toggleClass('active');
            toggleBody.toggleClass('open');

            e.preventDefault(); // avoids default link behaviour


        });


        /*-----------------------------------------------------------------------------------*/
        /*  TABS
        /*-----------------------------------------------------------------------------------*/

        // set tabs state on load
        $('.trend-tabs').each( function (e) {

            // activate first heading and body onLoad for each tabs set
            $('> .trend-tab-headings > li:first-child', this).addClass('active');
            $('> .trend-tab-contents > div:first-of-type', this).addClass('open');

        });        

        $(this).off('click', '.trend-tab-headings > li a');
        $(this).on('click', '.trend-tab-headings > li a', function (e) {

            
            // grab clicked tab ID
            var tabID = $(this).attr('href').substr(1);

            // grab current set of tabs
            var tabsSet = $(this).parents('.trend-tabs');

            // grab target heading and body elements
            var targetHeading = $(this).parent();
            var targetBody = tabsSet.find('.trend-tab-contents > #'+ tabID);

            // remove classes from each heading and body element in the set
            $('> .trend-tab-headings > li', tabsSet).removeClass('active');
            $('> .trend-tab-contents > div', tabsSet).removeClass('open');

            // add classes on target heading and content elements
            targetHeading.addClass('active');
            targetBody.addClass('open');

            e.preventDefault(); // avoids default link behaviour

        });



    };

}(jQuery));