import { getTotalScore, sumFromArray } from './helpers/scoreHelpers.js'
export default class BowlingService {
    constructor() {
        this.totalFrameRound = 10;
        this.hitsArray = [];
        this.isFirstRollofFrame = true;
        this.currentRound = 1;
        this.currentframeScore = [];
        this.extraRoll = 0
    }

    roll(pinsHit) {
        // console.log("running pins hit", pinsHit)
        if (this.isExtraRound) {
            this.currentframeScore.push(pinsHit);
        }
        if (this.isFirstRollofFrame) {
            // console.log("this.isFirstRollofFrame TRUE", pinsHit)
            this.currentframeScore.push(pinsHit);
            if (pinsHit === 10) {
                this.goToNextFrame()
            } else {
                this.goToNextRoll();
            }
        } else if (this.currentRound <= this.totalFrameRound) {
            // console.log("this.isFirstRollofFrame FALSE", pinsHit)
            this.currentframeScore.push(pinsHit);
            this.goToNextFrame()
        }
        console.log("current round ->", this.currentRound)
    }

    getCurrentScore() {
        console.log("getCurrentScore() ->", getTotalScore(this.pinsHit))
        return getTotalScore(this.pinsHit)
    }

    goToNextFrame() {
        if (this.currentRound === 10 && sumFromArray(this.currentframeScore) === 10) {
            // one more
            this.extraRoll = 1
        } else if (this.currentRound === 10 && this.currentframeScore.length === 1) {
            // two more
            this.extraRoll = 2
        }

        this.hitsArray.push(this.currentframeScore)
        this.currentframeScore = [];
        this.isFirstRollofFrame = true;
        this.currentRound++
    }

    goToNextRoll() {
        this.isFirstRollofFrame = false;
    }

    outputScore() {
        console.log(this.hitsArray);
        // console.log("getCurrentScore() ->", getTotalScore(this.hitsArray))
    }

    getCurrentRound() {
        return this.currentRound;
    }

    isLastRoll() {
        return this.currentRound >= this.totalFrameRound
    }
}