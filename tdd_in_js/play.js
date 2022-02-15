// Node's  Assert module (out of the box)
//set of assertion methods we can use for testing

const assert = require('assert')

assert.equal(true , true);// wont' generate any out in the console
// assert.equal(true, false); // will generate an assertion error


assert.equal(1, '1');//loose equality won't generate assertion errors

assert.strictEqual(1, '1');// Performs a strict type and memory check
assert.strictEqual([1, 2], [1, 2]); //Will generate an error due to arrays have seperate memory locations

//most commonly used
assert.deepStrictEqual([1,2], [1,2]); //Performs a strict type comparison, but doesn't worry about the memory register