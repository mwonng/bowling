## Install
### requirement

install Node latest version [here](https://nodejs.org/en/download/)

go to downloaded folder
```bash
# init project using npm
$ npm install

# or
# init project by yarn
$ yarn
```

## How to run
```
$ yarn dev
```


## Optional requirement:
Have optional requirement included.
>if time permits implement the rules for the last frame (i.e, 10th frame)
>
>In the last frame, if the bowler bowls a spare, they get another bowl. The score of this frame is the sum of the three bowls.
>In the last frame, if the bowler bowls a strike, they get another 2 bowls. The score of this frame is the sum of the three bowls
>If one has a strike for every roll, their score is 300i

## Assumption
- it won't have any invalid input, which means it will always has a vaild frame, for example it won't in half of one frame or end with only 9 frames.
- getScore function won't be called if a game not finished yet.
- all input roll should be valid until it finished and you should always have 10 frames and sometimes might be 11 or 12 frames, but code dont have this concern done in logic.

## Concerns
- according to requirement, it is not describe if get score can be in the middle of a frame which is not done yet or not. if it is yes, it would be more complex because current score is not accurated. especially with the optional requirement. for example: if user in `10 | 4` right now, should application can be called getScore or not?

- according to cli, user can only type every roll they did, so it might be not clear for user understand when to finish in a round

## Highlights
- Optional part done
- input validate
- Partialy fix concers above but not sure if is reasonable or not because im not really play bowling. can get score in any roll
- max roll protection as 12 as max according to optional part
