Upsert [![Build Status](https://travis-ci.org/pajtai/upsert.png?branch=master)](https://travis-ci.org/pajtai/upsert)
===

### Description

Takes an array and modifies it by either updating the object matched by the predicate, or inserting a new object:

`upsert(array, test, object)`

```javascript
var upsert = require('upsert')

upsert(
    arrayOfPeople,
    function(item) {
        return 'jane' === item.name;
    },
    {
        name: 'jane',
        degree: 'doctorate'
    });
```

If the test doesn't match anything in the array, "object" will be pushed onto the array. If the test matches something
in the array, then object will be extended onto what was matched.

If there are multiple matches, only the first one is modified.

The array that is passed in is modified, and it is also - for convenience - returned.

### Usage

[npm install --save upsert](https://www.npmjs.com/package/upsert)

To run the tests do, `npm install && npm test`.
