var assert = require("assert");
var fns    = require("../lib/fns");

describe("obj-by-key/fns", function() {

  describe("required", function() {
    it("success", function() {
    	fns.required(true, "key");
    });

    it("fail", function() {
			var thrown;
			try {
				fns.required(undefined, "key");
			} catch(err) {
				thrown = err;
			}

			assert(thrown);
    });
  });

  describe("optional", function() {
    it("success", function() {
    	fns.optional(true, "key");
    });

    it("fail", function() {
    	fns.optional(undefined, "key");
    });
  });

  describe("length", function() {
    it("success", function() {
			var fn = fns.length({min: 2, max: 4});
			fn("aa",   "key");
			fn("aaaa", "key");
    });

    it("fail", function() {
			var thrown, fn = fns.length({min: 2, max: 4});

			thrown = null;
			try { fn("aaaaa", "key"); } catch(err) { thrown = err; }
			assert(thrown);

			thrown = null;
			try { fn("a", "key"); } catch(err) { thrown = err; }
			assert(thrown);
    });
  });

});
