'use strict';

var _ = require('lodash');

module.exports = upsert;

function upsert(array, test, obj) {
    var result = _.find(array, test);

    if (result) {
        _.extend(result, obj);
    } else {
        array.push(obj);
    }
};