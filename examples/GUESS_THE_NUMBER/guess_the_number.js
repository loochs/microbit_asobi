input.onButtonPressed(Button.A, function () {
    choice += 1
    if (choice > max) {
        choice += -1
    }
    basic.showNumber(choice)
})
input.onButtonPressed(Button.B, function () {
    choice += -1
    if (choice < min) {
        choice += 1
    }
    basic.showNumber(choice)
})
input.onButtonPressed(Button.AB, function () {
    if (choice == ansewer) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    ansewer = Math.randomRange(min, max)
    choice = 0
})
let ansewer = 0
let choice = 0
let max = 0
let min = 0
min = 1
max = 3
choice = 1
basic.showNumber(choice)