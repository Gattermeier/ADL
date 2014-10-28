/**
 * Created by M. Gattermeier on 10/23/14.
 * http://www.gattermeier.net
 */

define(['jquery'], function ($) {
    // jquery based events on the DOM

    // Keep date in footer to current year
    $("#year").text( (new Date).getFullYear() );

    //toggle off canvas menu
    $('[data-toggle=offcanvas]').click(function () {
        $('.row-offcanvas').toggleClass('active');
    });

    return {};  
});