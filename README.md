# obj-validate [![Build Status](https://travis-ci.org/orangemug/obj-validate.svg?branch=master)](https://travis-ci.org/orangemug/obj-validate)
Validate an object

    objValidate(obj, validator, opts);

For example

    objValidate({
      single: "hello",
      multi: "hell yeah!",
      missing: "nooooo"
    }, {
      single: someValidatorFn,
      multi: [someValidatorFn, someValidatorFn]
    }, {
      debug: false
    });

Where `someValidatorFn` must throw an error on fail. The validator object specifies validator functions for the object leaves, which can be an array or a plain function.


## Debug
Passing `{debug: true}` as the last arg will cause any object leaves missing validator functions to be logged out.


## Validator functions
There are some example validator functions at [fns.js](/fns.js)

    var fns = require("obj-validator/fns");
    Object.keys(fns) // => ["required", "optional", "length"];


## License
MIT
