/**
 * Created by kevinhumphries on 28/05/2014.
 */
_ = require('underscore');

const base_port = _.random(10000, 20000);

var simservice = require("../app/simservice")(( { base_port: base_port}));
var util = require("util");
var should = require("should");
var request = require('superagent');

var assert = require('assert');

const numbers_service_name = 'test-service';

const calculation_process_name = "calculation";
const addition_entity_name = "addition";
const deduction_entity_name = "deduction";

const servicedescriptor= {name : "fred"}
simservice.register_service(servicedescriptor);
simservice.start

describe('simservice is defined', function () {
    it('service has url', function () {
        simservice.url().should.equal("http://localhost:" + base_port);
    });
});
simservice.start();


describe('simservice is there', function () {
    before(function () {
    });
    var link_to_get_calculation_process_home;
    it('should respond to a get /fred' , function (done) {
        request.get(simservice.url() + '/' + servicedescriptor.name).end(function (res) {
            res.statusCode.should.equal(200);
            done();
        });
    });

});

