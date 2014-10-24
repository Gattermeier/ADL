/**
 * Created by Gattermeier on 10/23/14.
 */
requirejs.config({
    paths: {
        jquery: ['//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js','lib/jquery-2.1.1.min'],
        bootstrap: ['//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min','./lib/bootstrap.min']
    },
    shim: {
        'bootstrap':{deps: ['jquery']}
    }
});
 
requirejs(['jquery','bootstrap'], function($){
    // here goes all JS code depending on jquery and bootstrap 
    return {};
}); 
