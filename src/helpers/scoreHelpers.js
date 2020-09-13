export const getTotalScore = (frameScoreArr) => {
    let totalScore = 0;
    for (let i = 0; i < frameScoreArr.length; i++) {
        totalScore = totalScore + getFrameScore(frameScoreArr, i)
    }
    return totalScore
}

export const getFrameScore = (arrayOfFrameScore, currIndex) => {
    if (arrayOfFrameScore[currIndex].length === 1 && currIndex < 10) {
        return sumFromArray(arrayOfFrameScore[currIndex]) + sumFromArray(arrayOfFrameScore[currIndex + 1]) + sumFromArray(arrayOfFrameScore[currIndex + 2])
    } else if (sumFromArray(arrayOfFrameScore[currIndex]) === 10) {
        return sumFromArray(arrayOfFrameScore[currIndex]) + sumFromArray(arrayOfFrameScore[currIndex + 1])
    }
    if (sumFromArray(arrayOfFrameScore[currIndex]) < 10) {
        return sumFromArray(arrayOfFrameScore[currIndex])
    }
}

export const sumFromArray = (arr) => {
    return Number(arr.reduce((acc, curr) => acc + curr, 0))
}