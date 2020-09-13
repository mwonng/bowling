import BowlingService from './src/BowlingService.js'

const Bowling = new BowlingService()

// const rollResult = [3, 7, 10, 2, 4, 6, 2, 5, 3, 5, 5, 10, 4, 2, 4, 6, 4, 5]
const rollResult = [10, 10, 10, 10, 10, 10, 10, 10, 10, 6, 4, 5]

rollResult.forEach(pins => {
    Bowling.roll(pins);
})


Bowling.outputScore()
