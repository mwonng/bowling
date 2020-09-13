require = require("esm")(module)
import BowlingService from './src/BowlingService.js'
const readline = require('readline');

const Bowling = new BowlingService()
let rollList = []

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let i = 1;
const pinRegex = RegExp('^([1-9]|10)$');

console.log("please input your every roll hit, type 'exit' will be finish this match");
function waitForUserInput() {
    rl.question(`Roll ${i} hits: `, function (answer) {
        if (answer.toLowerCase() === "exit" || i > 12) {
            rl.close();
            //TODO: validate here
            rollList.forEach(pins => {
                Bowling.roll(pins);
            });
            Bowling.outputScore()
        } else if (!pinRegex.test(answer)) {
            console.log("invalid pin, please enter again")
            waitForUserInput();
        } else {
            i++;
            rollList.push(Number(answer))
            waitForUserInput();
        }
    });
}
waitForUserInput();