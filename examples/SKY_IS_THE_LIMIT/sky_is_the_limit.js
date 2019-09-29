function countUP (step: number) {
    if (mode == 1) {
        count += step
    }
}
function resetCondition () {
    count = 0
    mode = 0
    time = 3000
    x = 0
    y = 4
}
function callReady (num: number) {
    i = num
    while (i >= 0) {
        basic.showNumber(i)
        i += -1
    }
}
input.onButtonPressed(Button.A, function () {
    countUP(1)
})
input.onButtonPressed(Button.B, function () {
    countUP(1)
})
input.onButtonPressed(Button.AB, function () {
    if (mode == 0) {
        callReady(3)
        basic.clearScreen()
        mode = 1
        start_time = input.runningTime()
        while (input.runningTime() - start_time <= time) {
            basic.showNumber(count)
        }
        mode = 0
        basic.pause(3000)
        basic.showIcon(IconNames.Heart)
        for (let i = 0; i < 3; i++) {
            basic.showNumber(count)
        }
    }
    basic.clearScreen()
    resetCondition()
})
let start_time = 0
let i = 0
let y = 0
let x = 0
let time = 0
let count = 0
let mode = 0
resetCondition()