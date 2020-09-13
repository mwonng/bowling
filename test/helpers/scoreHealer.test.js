import { sumFromArray, getTotalScore, getFrameScore } from '../../src/helpers/scoreHelpers'

describe("scoreHelper test", () => {
    it("sumFromArray() should return sum of paras", () => {
        expect(sumFromArray([2, 5])).toBe(7);
        expect(sumFromArray([2, 5, 7])).toBe(14);
        expect(sumFromArray([10])).toBe(10);
    });

    it("getTotalScore() should return sum of paras", () => {
        expect(getTotalScore([[2, 5], [2, 4]])).toBe(13);
    });

    it("getTotalScore() should sum next two frame if it is strike", () => {
        expect(getTotalScore([[10], [2, 4], [2, 6]])).toBe(38);
    });

    it("getTotalScore() should sum next frame if it is clear", () => {
        expect(getTotalScore([[2, 3], [6, 4], [1, 6], [3, 6]])).toBe(38);
    });

    it("getTotalScore() should sum next two frame if it is strike", () => {
        expect(getTotalScore([[10], [6, 4], [1, 6], [3, 6]])).toBe(60);
    });

    it("getFrameScore() should return current index's sume", () => {
        const pinArray = [[10], [6, 4], [1, 6], [3, 6]];
        expect(getFrameScore(pinArray, 0)).toBe(20);
        expect(getFrameScore(pinArray, 1)).toBe(11);
        expect(getFrameScore(pinArray, 2)).toBe(7);
        expect(getFrameScore(pinArray, 3)).toBe(9);
    });
});
