import { describe, it, expect } from "vitest";

describe("iterating elements of array", () => {
    const ar = [1, 2, 3, 4];

    it("printing out of elements usinf for-in", ()=> {
        for(let i in ar) {
            console.log(ar[i]);
        }
    });

    it("printing out of elements usinf for-of", ()=> {
        for(let num of ar) {
            console.log(ar[num]);
        }
    });

    it("printing out elements  using forEach method", () => {
        ar.forEach(e => console.log(e));
    });

    it("printing out index and element from array", () => {
        ar.forEach((e, i) => console.log(`index: ${i}; element: ${e}`))
    });
});