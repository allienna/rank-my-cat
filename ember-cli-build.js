/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');
var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');

module.exports = function (defaults) {
    var app = new Angular2App(defaults, {
        vendorNpmFiles: []
    });

    var myTree = new Funnel('bower_components', {
            files: [
                'bootstrap/dist/css/bootstrap.min.css',
                'bootstrap/dist/js/bootstrap.min.js',
                'jquery/dist/jquery.min.js'
            ],
            destDir: 'vendor'
        }) ;
    var appTree = app.toTree();
    return mergeTrees([myTree, appTree]);
}
;
