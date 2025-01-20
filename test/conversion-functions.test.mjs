import {describe, it, expect} from 'vitest';
import { myParseInt } from '../conversion-functions.mjs';
import { myToStringFromIntNumber } from '../conversion-functions.mjs';
//Unit test is AAA - Arranging / Act / Assertion
describe("myParseInt test suit", () => {
    it("regular string with positive integer number", () => {
        const strNum = "12" //Arranging
        const res = myParseInt(strNum) +2; //Act
        expect(res).toBe(14) //Assertion
    });
    it("regular string with negative integer number", () => {
        expect(myParseInt("-12")).toBe(-12);
    });

    it("string with number following +", () => {
        expect(myParseInt("+12")).toBe(12);
    });

    it("null", () => {
        expect(myParseInt()).toBeNaN;
    });

    it("float number inside a string", () => {
        expect(myParseInt("12.35")).toBe(12);
    });

    it("string beginning with the space", () => {
        expect(myParseInt(" 12")).toBe(12);
    });

    it("string in middle of a string", () => {
        expect(myParseInt("12 35")).toBe(12);
    });

    it("first symbol is not a number", () => {
        expect(myParseInt("a1")).toBeNaN();
    });

    it("regular string with negative integer number", () => {
        expect(myParseInt("-12")).toBe(-12);
    });

    it("string begins from ++", () => {
        expect(myParseInt("++12")).toBeNaN();
    });

    it("space following -", () => {
        expect(myParseInt("- 12")).toBeNaN();
    });
})

describe("myToStringFromIntNumber test suite", () => {
    it("positive float number", () => {
        expect(myToStringFromIntNumber(12.35)).toBe("12");
    });

    it("negative integer number", () => {
        expect(myToStringFromIntNumber(-12)).toBe("-12");
    });

    it("positive string with + sign", () => {
        expect(myToStringFromIntNumber("+12")).toBe("12");
    });

    it("string with invalid characters at the start", () => {
        expect(myToStringFromIntNumber("a1")).toBe("");
    });

    it("string with valid characters followed by invalid", () => {
        expect(myToStringFromIntNumber("1a")).toBe("1");
    });

    it("empty input", () => {
        expect(myToStringFromIntNumber()).toBe("");
    });

    it("empty string", () => {
        expect(myToStringFromIntNumber("")).toBe("");
    });

    it("null input", () => {
        expect(myToStringFromIntNumber(null)).toBe("");
    });

    it("string with spaces and valid number", () => {
        expect(myToStringFromIntNumber("   -12   ")).toBe("-12");
    });

    it("string with multiple + signs", () => {
        expect(myToStringFromIntNumber("++12")).toBe("");
    });

    it("string with spaces followed by invalid characters", () => {
        expect(myToStringFromIntNumber("  - 12")).toBe("");
    });
});