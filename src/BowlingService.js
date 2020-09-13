import { getTotalScore, sumFromArray } from './helpers/scoreHelpers.js'
export default class BowlingService {
    constructor() {
        this.totalFrameRound = 10;
        this.hitsArray = [];
        this.isFirstRollofFrame = true;
        this.currentRound = 1;
        this.currentframeScore = [];
        this.extraRoll = 0;
        this.extraArray = [];
    }

    roll(pinsHit) {
        if (this.currentRound > this.totalFrameRound) {
            this.goExtraRoll(pinsHit);
        }

        if (this.extraRoll === 0 && this.currentRound > this.totalFrameRound) {
            this.currentframeScore.push(pinsHit);
        }

        if (this.isFirstRollofFrame && this.currentRound <= this.totalFrameRound) {
            this.currentframeScore.push(pinsHit);
            if (pinsHit === 10) {
                this.goToNextFrame()
            } else {
                this.goToNextRoll();
            }
        } else if (this.currentRound <= this.totalFrameRound) {
            this.currentframeScore.push(pinsHit);
            this.goToNextFrame()
        }
    }

    goExtraRoll(hits) {
        this.extraArray.push(hits)
    }

    getCurrentScore() {
        this.hitsArray.push(this.extraArray)
        return getTotalScore(this.hitsArray, this.totalFrameRound)
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
        console.log("Total score is:", this.getCurrentScore());
    }

    getCurrentRound() {
        return this.currentRound;
    }

    isLastRoll() {
        return this.currentRound === this.totalFrameRound
    }
}