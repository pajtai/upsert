'use strict';

var chai = require('chai'),
    upsert = require('../index.js');

chai.should();

describe('upsert', function() {

    it('should modify existing object', function() {

        var ar = [{a:1, b:2}];

        upsert(ar, function(item) {return 1 === item.a }, { a: 2 });

        ar.should.deep.equal([{a:2, b:2}]);
    });

    it('should only modify first object found', function() {
        var ar = [{a:1}, {a:1, b:2}];

        upsert(ar, function(item) {return 1 === item.a }, { a: 2 });

        ar.should.deep.equal([{a:2}, {a:1, b:2}]);
    });

    it('should add object', function() {
        var ar = [];

        upsert(ar, function(item) {return 1 === item.a }, { a: 2 });

        ar.should.deep.equal([{a:2}]);
    });

    it('should return the array being modified', function() {
        var ar = [];

        upsert(ar).should.equal(ar);
    });
});