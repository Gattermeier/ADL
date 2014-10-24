define(['jquery'], function ($) {
    // jquery based events on the DOM
    $("#year").text( (new Date).getFullYear() );
    
    return {};  
});