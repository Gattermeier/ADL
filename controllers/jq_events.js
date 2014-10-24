/**
 * Created by M. Gattermeier on 10/23/14.
 * http://www.gattermeier.net
 */

define(['jquery'], function ($) {
    // jquery based events on the DOM
    
    $("#year").text( (new Date).getFullYear() );
    
    return {};  
});