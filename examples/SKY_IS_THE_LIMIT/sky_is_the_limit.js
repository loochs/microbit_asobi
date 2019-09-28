input.onButtonPressed(Button.A, function () {
    if (mode == 1) {
        count += 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (mode == 1) {
        count += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (mode == 0) {
        basic.showNumber(3)
        basic.showNumber(2)
        basic.showNumber(1)
        basic.showNumber(0)
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
})
let start_time = 0
let time = 0
let mode = 0
let count = 0
count = 0
mode = 0
time = 3000
let x = 0
let y = 4
