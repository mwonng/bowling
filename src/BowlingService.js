import { getTotalScore, sumFromArray } from './helpers/scoreHelpers.js'
export default class BowlingService {
    constructor() {
        this.totalFrameRound = 10;
        this.hitsArray = [];
        this.isFirstRollofFrame = true;
        this.currentRound = 1;
        this.currentframeScore = [];
        this.extraArray = [];
    }

    roll(pinsHit) {
        if (this.currentRound > this.totalFrameRound) {
            this.goExtraRoll(pinsHit);
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

    goToNextRoll() {
        const currScoreArr = [...this.currentframeScore]
        this.hitsArray.push(currScoreArr)
        this.isFirstRollofFrame = false;
    }

    goExtraRoll(hits) {
        this.extraArray.push(hits)
    }

    getCurrentScore() {
        const length = this.hitsArray.length > 10 ? 10 : this.hitsArray.length
        this.hitsArray.push(this.extraArray)
        return getTotalScore(this.hitsArray, length)
    }

    goToNextFrame() {
        if (!this.isFirstRollofFrame) {
            this.hitsArray.pop()
        }

        const currScoreArr = [...this.currentframeScore]
        this.hitsArray.push(currScoreArr)

        this.currentframeScore = [];
        this.isFirstRollofFrame = true;
        this.currentRound++
    }

    outputScore() {
        console.log("Total score is:", this.getCurrentScore());
    }

    getCurrentRound() {
        return this.currentRound;
    }
}