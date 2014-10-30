/**
 * Created by matthias on 10/30/14.
 */

requirejs.config({
    paths: {
        jquery: ['//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min','../libs/jquery/dist/jquery.min']
        ,bootstrap: ['//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min','../libs/bootstrap/dist/js/bootstrap.min']
        ,offcanvas:'../libs/jasny-bootstrap/js/offcanvas'

    },
    shim: {
        'bootstrap':{deps: ['jquery']}
        ,'offcanvas': {deps: ['bootstrap','jquery']}
    }
});

requirejs(['jquery','bootstrap','offcanvas'], function($,_bootstrap,_off) {

    console.log('off canvas loaded');
    return {}

});
