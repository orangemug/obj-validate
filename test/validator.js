var assert        = require("assert");
var objValidate   = require("../");
var validationFns = require("../lib/fns");

var TEST_OBJ = {
  foo: {
    bar: {
      notme: false
    },
    baz: {
      target: "hello"
    }
  }
}

describe("obj-by-key", function() {

  it("should succeed if valid", function() {
    objValidate(TEST_OBJ, {
      "foo": {
        "baz": {
          "target": validationFns.length({max: 7})
        }
      }
    });
  });

  it("should fail if not valid", function() {
    var thrown;
    try {
      objValidate(TEST_OBJ, {
        "foo": {
          "baz": {
            "target": validationFns.length({max: 4})
          }
        }
      });
    } catch(err) {
      thrown = err;
    }

    assert.equal(thrown, "'foo.baz.target' must be <4 chars");
  });

  it("should log missing validations if debug set", function() {
    var msg;
    var oldWarn = console.warn;
    console.warn = function(_msg) {
      msg = _msg;
    };

    objValidate(TEST_OBJ, {
      "foo": {
        "baz": {
          "target": validationFns.length({max: 7})
        }
      }
    }, {debug: true});
    
    console.warn = oldWarn;

    assert.equal(msg, "Missing validation for foo.bar.notme")
  });

  it("should accept multiple validation fns", function() {
    var fnACalled, fnBCalled;
    function fnA() {fnACalled = true}
    function fnB() {fnBCalled = true}

    objValidate(TEST_OBJ, {
      "foo": {
        "baz": {
          "target": [
            fnA, fnB
          ]
        }
      }
    });

    assert(fnACalled);
    assert(fnBCalled);
  });

});
