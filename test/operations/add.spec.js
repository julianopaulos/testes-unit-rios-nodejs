const assert = require('assert');
const add  = require('../../src/operations/add');
describe("add", function() {
    it("should return the value 5 when the values 2 and 3 are passed.", function() {
        const result = add(2, 3);
        assert.equal(result, 5);
    });
});