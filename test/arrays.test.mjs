import { describe, it, expect } from "vitest";

describe("array introspecting", () => {
    const array = [10, 1000, -10, 30, 60];

    it("includes", () => {
        const objects = [
            {x:4},
            {x:5}
        ];
        expect(array.includes(1000)).toBeTruthy();
        expect(array.includes(200)).toBeFalsy();
        expect(array.includes({x:4})).toBeFalsy();
    });

    it("testing for array ob objects", () => {
        expect(objects.find(ovj.x === 4)).toBeTruthy();
        expect(objects.find(ovj.x === 1)).toBeFalsy();
    });

    it("testing for all elements match acondition", () => {
        expect(array.every(num => num % 2 === 0)).toBeTruthy();
        expect(array.some(num => num % 2 !== 0)).toBeFalsy();
    });
});