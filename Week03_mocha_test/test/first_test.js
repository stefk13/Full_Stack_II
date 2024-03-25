var assert = require('assert');

describe('Test Array methods', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });

    it('should return index 1 when the value is present', function () {
      assert.equal([1, 2, 3].indexOf(2), 1);
    });

    it('should return index 1 when the value is present', function () {
      assert.notEqual([1, 2, 3].indexOf(2), 2);
    });
  });
});