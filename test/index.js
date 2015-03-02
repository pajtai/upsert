'use strict';

var chai = require('chai'),
    upsert = require('../index.js');

chai.should();

describe('upsert', function() {

   it('should modify existing object', function() {

       var ar = [{a:1}];

       upsert(ar, function(item) {return 1 === item.a }, { a: 2 });

       ar.pop().should.deep.equal({a:2});
       ar.length.should.equal(0);
   });

    it('should add object', function() {
        var ar = [];

        upsert(ar, function(item) {return 1 === item.a }, { a: 2 });

        ar.pop().should.deep.equal({a:2});
        ar.length.should.equal(0);
    });
});