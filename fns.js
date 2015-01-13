var validation = {};

validation.required = function(v, k) {
  if(v === undefined) {
    throw new ValidationError("'"+k+"' not defined");
  }
}

/**
 * opts.min
 * opts.max
 */
validation.length = function(opts) {
  return function(v, k) {
    validation.required(v, k);

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
