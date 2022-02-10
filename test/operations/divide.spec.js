const assert = require('assert');
const divide = require("../../src/operations/divide");

describe("divide", function(){
    it("should return an error if the divisor is 0", function(){
        assert.throws(() => divide(2, 0));
    });
});