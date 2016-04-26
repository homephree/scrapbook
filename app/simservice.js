var Simservice = function (parameters) {
    var express = require('express');
    var body_parser = require('body-parser');
    var logger = require('morgan');
    var _ = underscore = require("underscore");
    var mongoose = require('mongoose');
    var uuid = require("node-uuid");
    var forms = require("forms-mongoose");
    var request = require('superagent');
    parameters.base_port = parameters.base_port || 5000

    var _register = {};
    var app = express();
    var uri = 'http://localhost:' + (parameters.base_port)

    app.use(body_parser());
    app.use(logger('dev'));

    function register_get(path, action) {
        console.log("register GET " + path);
        app.get(path, function (req, res) {
            return action( req, res);
        });
    }

    function register_post(path, action) {
        console.log("register POST " + path);
        app.post(path, function (req, res) {
            return action( req, res);
        });
    }

    function register_put(path, action) {
        console.log("register PUT " + path);
        app.put(path, function (req, res) {
            return action( req, res);
        });
    }

    var register_service = function do_register_service(service_descriptor) {
        var service_path = '/' + service_descriptor.name;

        register_get(service_path,
            function getsometestdata( req, res) {

                res.json({
                    name: service_descriptor.name
                });
            });
        return service_descriptor;
    }

    register_get('/', function ( req, res) {
        res.send("Simservice! Simservice! <br><em>It's only a demo</em><br>Shhhhhh!...");
    });

    var start = function do_start() {
        app.listen((parameters.base_port));
        console.log(app.port)
    }

    function stop() {
    }

    return {
        start: start,
        url: function(){ return uri},
        register_service: register_service
    };


}

module.exports = Simservice;
