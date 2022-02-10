import { throws, equal } from 'assert';
import divide from "../../src/operations/divide.js";

describe("divide_error", function(){
    it("should return an error if the divisor is 0", function(){
        throws(() => divide(2, 0));
    });
});

describe("divide_success", function(){
    it("should return 2 if the divider is 2 and the divisor is 1", function(){
        const result = divide(2, 1);
        equal(result, 2);
    });
});