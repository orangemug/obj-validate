# obj-validate (work in progress)
Validate an object

    objValidate(obj, validator, opts);

Example

    objValidate({
      a: "hello",
      b: "nooooo"
    }, {
      a: someValidatorFn
    }, {
      debug: false
    });

Where `someValidatorFn` must throw an error on fail


## License
MIT
