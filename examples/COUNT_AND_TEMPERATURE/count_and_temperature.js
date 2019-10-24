input.onButtonPressed(Button.A, function () {
    if (mode == 0) {
        count = 0
        basic.showNumber(count)
    } else {
        basic.showNumber(input.temperature())
    }
})
input.onGesture(Gesture.Shake, function () {
    if (mode == 0) {
        count = count + 1
        basic.showNumber(count)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (mode == 0) {
        mode = 1
        basic.showNumber(mode)
    } else {
        mode = 0
        basic.showNumber(mode)
    }
})
let count = 0
let mode = 0
mode = 0
basic.showNumber(mode)
