var objByPath = require("obj-by-path");
var objLeaves = require("obj-leaves");

module.exports = function(obj, validateObj, opts) {
  opts = opts || {};

  objLeaves(obj, function(k, v) {
    var validateFn, dispKey;

    try {
      validateFn = objByPath(validateObj, k);
    } catch(err) {
      // TODO: Validate error and rethrow if not expected
    }

    dispKey = k.join(".");

    if(!validateFn && opts.debug) {
      console.log("Missing validation for "+dispKey);
    } else if(validateFn) {
      if(validateFn instanceof Array) {
        validateFn.forEach(function(fn) {
          fn(v, dispKey);
        });
      } else {
        validateFn(v, dispKey);
      }
    }
  });
}
