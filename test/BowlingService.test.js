import BowlingService from '../src/BowlingService'
describe("BowlingService test", () => {

    it("BowlingService after 1st roll", () => {
        const Bowling = new BowlingService()
        Bowling.roll(10);
        Bowling.roll(3);
        expect(Bowling.isFirstRollofFrame).toBeFalsy();
        Bowling.roll(6);
        expect(Bowling.isFirstRollofFrame).toBeTruthy();
        expect(Bowling.hitsArray).toEqual([[10], [3, 6]]);
    });

    it("BowlingService can get score after any roll", () => {
        const Bowling = new BowlingService()
        Bowling.roll(10);
        Bowling.roll(3);
        Bowling.roll(6);
        expect(Bowling.getCurrentScore()).toEqual(28);
    });

    it("BowlingService can get current rount", () => {
        const Bowling = new BowlingService()
        Bowling.roll(10);
        Bowling.roll(3);
        Bowling.roll(6);
        expect(Bowling.getCurrentRound()).toEqual(3);
    });

    it("BowlingService can get right score with 2 extra strike", () => {
        const Bowling = new BowlingService()
        for (let i = 0; i < 12; i++) {
            Bowling.roll(10);
        }
        expect(Bowling.getCurrentScore()).toEqual(300);
    });

    it("BowlingService can get right score with 2 extra strike", () => {
        const Bowling = new BowlingService()
        for (let i = 0; i < 10; i++) {
            Bowling.roll(10);
        }
        Bowling.roll(6);
        Bowling.roll(4);
        expect(Bowling.getCurrentScore()).toEqual(286);
    });
});
