export const getTotalScore = (frameScoreArr, maxRound = 10) => {
    let totalScore = 0;
    for (let i = 0; i < maxRound; i++) {
        totalScore = totalScore + getFrameScore(frameScoreArr, i)
    }
    return totalScore
}

export const getFrameScore = (frameScoresArr, currIndex) => {
    if (frameScoresArr[currIndex].length === 1 && currIndex < 10) {
        // getNextTwoRoll()
        return sumFromArray(frameScoresArr[currIndex]) + getNextRollsScore(frameScoresArr, currIndex, 2)
    } else if (sumFromArray(frameScoresArr[currIndex]) === 10 && currIndex < 10) {
        // getNextOneRoll()
        return sumFromArray(frameScoresArr[currIndex]) + getNextRollsScore(frameScoresArr, currIndex, 1)
    } else {
        return sumFromArray(frameScoresArr[currIndex])
    }
}

export const getNextRollsScore = (arrayOfFrameScore, curr, lengthOfRoll) => {
    if (arrayOfFrameScore[curr + 1].length === lengthOfRoll) {
        return sumFromArray(arrayOfFrameScore[curr + 1])
    } else if (lengthOfRoll === 1) {
        return arrayOfFrameScore[curr + 1][0];
    } else {
        return sumFromArray(arrayOfFrameScore[curr + 1]) + arrayOfFrameScore[curr + 2][0];
    }
}

export const sumFromArray = (arr) => {
    return Number(arr.reduce((acc, curr) => acc + curr, 0))
}