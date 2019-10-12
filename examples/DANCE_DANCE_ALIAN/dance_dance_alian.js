input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . # . #
            # # # # .
            . . # . .
            # # . # .
            . . . . #
            `)
        basic.showLeds(`
            . . # . .
            # # # # #
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . # . .
            . # # # #
            . . # . .
            . # . # #
            # . . . .
            `)
        basic.showLeds(`
            . . # . .
            # # # # #
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . # . .
            . # # # #
            . . # . .
            . # . # #
            # . . . .
            `)
        basic.showLeds(`
            . . # . .
            # # # # #
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            . . # . #
            # # # # .
            . . # . .
            # # . # .
            . . . . #
            `)
        basic.showLeds(`
            . . # . .
            # # # # #
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
basic.showLeds(`
    . . # . .
    # # # # #
    . . # . .
    . # . # .
    # . . . #
    `)
