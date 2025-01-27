import { describe, it, expect } from "vitest";
import { myMap, myReduce } from "../arrays.mjs";
const array = [10, 1000, -10, 30, 60];
describe("map / reduce", () => {
    array.map = myMap();
    array.reduce = myReduce();

    it("myMap testing", () => {
        const expected = [10, 1001, -7, 33, 64] //array of elements where each element will be converted to element + index
        expect(array.map((e, index) => e + index)).toEqual(expected);
    });

    it("myReduce testing", () => {
        // TODO
        // write two reduce methods for taking sum of all array numbers
        // and minimal and maximal values for only one reduce call
    });
});