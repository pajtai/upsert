Upsert [![Build Status](https://travis-ci.org/pajtai/upsert.png?branch=master)](https://travis-ci.org/pajtai/upsert)
===

Takes an array and modifies it by either updating the object matched by the predicate, or inserting a new object:

`upsert(array, test, object)`

```javascript
var upsert = require('upsert')

upsert(
    array,
    function(item) {
        item.name = 'jane';
    },
    {
        degree: 'doctorate'
    });
```