/**
 * Created by matthias on 10/30/14.
 */

requirejs.config({
    paths: {
        jquery: '../libs/jquery/dist/jquery.min'
        ,bootstrap: '../libs/bootstrap/dist/js/bootstrap.min'
        ,offcanvas:'../libs/jasny-bootstrap/js/offcanvas'
        ,easyab: '../assets/js/easyab.min'
        ,ab:'../assets/js/ab'
        ,vue: '../libs/vue/dist/vue'

    },
    shim: {
        'bootstrap':{deps: ['jquery']}
        ,'offcanvas': {deps: ['bootstrap','jquery']}
        ,'ab':{deps: ['easyab','jquery']}

    }
});

requirejs(['vue'], function(vue) {

    console.log('vue loaded');
    return {}

});

requirejs(['jquery','bootstrap','offcanvas'], function($,_bootstrap,_off) {

    console.log('off canvas loaded');
    return {}

});

requirejs(['jquery','easyab','ab'], function($,_easyab,_ab) {
    console.log('ab loaded');
    return {}
});