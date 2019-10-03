function doSomething (start: number, end: number) {
    answer = Math.randomRange(start, end)
}
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Yuika")
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.EigthNote)
    basic.pause(1000)
    basic.clearScreen()
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == answer) {
        basic.showIcon(IconNames.Happy)
        doSomething(start, end)
    } else {
        basic.showIcon(IconNames.Sad)
        doSomething(start, end)
    }
})
let answer = 0
let end = 0
let start = 0
start = 1
end = 3
radio.setGroup(1)
doSomething(start, end)
basic.forever(function () {
    if (input.lightLevel() < 1) {
        basic.showIcon(IconNames.Heart)
        basic.pause(1000)
        basic.clearScreen()
    }
})
