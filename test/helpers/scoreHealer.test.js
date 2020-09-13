import { sumFromArray, getTotalScore, getFrameScore } from '../../src/helpers/scoreHelpers'

describe("scoreHelper test", () => {
    it("sumFromArray() should return sum of paras", () => {
        expect(sumFromArray([2, 5])).toBe(7);
        expect(sumFromArray([2, 5, 7])).toBe(14);
        expect(sumFromArray([10])).toBe(10);
    });

    it("getTotalScore() should return sum of paras", () => {
        expect(getTotalScore([[2, 5], [2, 4], [2, 1]], 3)).toBe(16);
    });

    it("getTotalScore() should sum next two frame if it is strike", () => {
        expect(getTotalScore([[10], [2, 4], [2, 6]], 3)).toBe(30);
        expect(getTotalScore([[10], [6, 4], [1, 6], [3, 6]], 4)).toBe(47);

    });

    it("getTotalScore() should sum next frame if it is spare", () => {
        expect(getTotalScore([[2, 3], [6, 4], [1, 6], [3, 6]], 4)).toBe(32);
    });

    it("getTotalScore() should sum full strike", () => {
        expect(getTotalScore([[10], [10], [10], [10], [10], [10], [10], [10], [10], [10], [10], [10]])).toBe(300);
    });

    it("getTotalScore() should sum extre one if last one is spare", () => {
        expect(getTotalScore([[10], [10], [10], [10], [10], [10], [10], [10], [10], [10], [6, 4]])).toBe(286);
        expect(getTotalScore([[10], [10], [10], [10], [10], [10], [10], [10], [10], [6, 4], [5]])).toBe(271);
    });

    it("getTotalScore() should not sum extra if last one is not spare", () => {
        expect(getTotalScore([[10], [10], [10], [10], [10], [10], [10], [10], [10], [6, 3]])).toBe(264);
    });


    it("getFrameScore() should return current index's sum", () => {
        const pinArray = [[10], [6, 4], [1, 6], [3, 6]];
        expect(getFrameScore(pinArray, 0)).toBe(20);
        expect(getFrameScore(pinArray, 1)).toBe(11);
        expect(getFrameScore(pinArray, 2)).toBe(7);
        expect(getFrameScore(pinArray, 3)).toBe(9);
    });

    it("getFrameScore() should return current index's sum if not finished", () => {
        const pinArray = [[10], [4, 6]];
        expect(getFrameScore(pinArray, 0)).toBe(20);
        expect(getFrameScore(pinArray, 1)).toBe(10);
    });
});
