import { describe, it, expect } from "vitest";

describe("sorting array", () => {
    const array = [10, 1000, -10, 30, 60, 50];

    it("native sorting", () => {
        const expected = [-10, 10, 30, 60, 1000];
        expect(array.sort((a, b) => a - b)).toEqual(expected);
    });
});