var validation = {};

/**
 * Value must exist
 */
validation.required = function(v, k) {
  if(v === undefined) {
    throw new ValidationError("'"+k+"' not defined");
  }
}

/**
 * Value is optional
 */
validation.optional = function(v, k) {
  // No-op
}

/**
 * Is the values length correct?
 *
 * @param opts.min - minimum length (inclusive)
 * @param opts.max - maximum length (inclusive)
 */
validation.length = function(opts) {
  return function(v, k) {
    if(v === undefined) {
      return;
    }

    var len = v.length;

    if(opts.min && len < opts.min) {
      throw "'"+k+"' must be >"+opts.min+" chars";
    }

    if(opts.max && len > opts.max) {
      throw "'"+k+"' must be <"+opts.max+" chars";
    }
  }
}


module.exports = validation;
