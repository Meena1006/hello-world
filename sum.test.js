import sum from "./sum.js";


describe("sum function", () => {    

        // these are unit test cases for sum.js file. we are using jest framework to write the test cases.
        test("adds 1 + 2 to equal 3", () => {
            expect(sum(1, 2)).toBe(3);
        });

        // we need to define a script as test : "node --experimental-vm-modules node_modules/.bin/jest" in package.json file to run the test cases.

        test("adds 5 + 7 to equal 12", () => {
            expect(sum(5, 7)).toBe(12);
        });

});