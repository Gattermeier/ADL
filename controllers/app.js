/**
 * Created by M. Gattermeier on 10/23/14.
 * http://www.gattermeier.net
 */

requirejs.config({
    paths: {
         jquery: ['//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min','../libs/jquery/dist/jquery.min']
        ,bootstrap: ['//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min','../libs/bootstrap/dist/js/bootstrap.min']
        ,easyab: '../assets/js/easyab.min'
        ,ab:'../assets/js/ab'
        ,vue: '../libs/vue/dist/vue'
        ,offcanvas:'../libs/jasny-bootstrap/js/offcanvas'
        ,'jquery-cookie': '../libs/jquery-cookie/jquery-cookie'
        ,jq_onload: 'jq_onload'
        ,jq_social: 'jq_social'
        ,jq_events: 'jq_events' // ADL custom jquery based DOM interactions
        ,events: 'events' // events without dependencies
    },
    shim: {
         'bootstrap':{deps: ['jquery']}
        ,'offcanvas': {deps: ['bootstrap','jquery']}
        ,'jquery-cookie':{deps: ['jquery']}
        ,'jq_onload': {deps: ['jquery']}
        ,'jq_social': {deps: ['jquery']}
        ,'jq_events':{deps: ['jquery']}
        ,'ab':{deps: ['easyab','jquery']}    }
});

requirejs(['events'], function( _e ) {
    // non depended events code
    return {};
});

requirejs(['vue'], function(vue) {

    return {};
});

requirejs(['jquery','bootstrap','offcanvas'], function($,_bootstrap,_off) {

    console.log('off canvas loaded');
    return {}

});

requirejs(['jquery','bootstrap', 'jq_events'], function( $ , _bootstrap , _jqe ) {
    // here goes all JS code depending on jquery and bootstrap
    // events is the place standard jquery dependend DOM interactions live

    $("#socialmediabar2014 .nav-tabs a").click(function (e) {
        var tab = $(this);
        if (tab.parent('li').hasClass('active')) {
            window.setTimeout(function () {
                $(".tab-pane").removeClass('active');
                tab.parent('li').removeClass('active');
            }, 1);
        }
    });

    // social media widget for left sidebar



    // load G+ in the social media widget explicitly
    $("#socialmediabar2014 a.googleplus").click(function (e) {
        gapi.plus.go();
    });



    console.log('finished');
    return {};
});



requirejs(['jquery','easyab','ab'], function($,_easyab,_ab) {
    console.log('ab loaded');
    return {}
});

