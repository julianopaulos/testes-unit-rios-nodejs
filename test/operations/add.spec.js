import { equal } from 'assert';
import add from '../../src/operations/add.js';
describe("add", function() {
    it("should return the value 5 when the values 2 and 3 are passed.", function() {
        const result = add(2, 3);
        equal(result, 5);
    });
});