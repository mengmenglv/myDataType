var assert = require("assert");
describe("DataType", function() {
  describe("isNumber", function() {

  var a = 1;
  it(" is number", function(done) {
      assert.equal(true, DataType.isNumber(a));
      done();
  });
  var b = "aaaaaa";
  it(" is string", function(done) {
      assert.equal(true, DataType.isString(b));
      done();
  });
  var c = false;
  it(" is boolean", function(done) {
      assert.equal(true, DataType.isBoolean(c));
      done();
  });
});
});