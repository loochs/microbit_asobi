input.onButtonPressed(Button.A, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
})
music.onEvent(MusicEvent.BackgroundMelodyEnded, function () {
    control.reset()
})
let ball = game.createSprite(0, 0)
let goal_x = Math.randomRange(2, 4)
let goal_y = Math.randomRange(2, 4)
let goal = game.createSprite(goal_x, goal_y)
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 200) {
        ball.change(LedSpriteProperty.X, 1)
    }
    if (input.acceleration(Dimension.X) < -200) {
        ball.change(LedSpriteProperty.X, -1)
    }
    if (input.acceleration(Dimension.Y) > 200) {
        ball.change(LedSpriteProperty.Y, 1)
    }
    if (input.acceleration(Dimension.Y) < -200) {
        ball.change(LedSpriteProperty.Y, -1)
    }
    if (ball.isTouching(goal)) {
        ball.delete()
        music.beginMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.OnceInBackground)
        goal.set(LedSpriteProperty.Blink, 1)
        basic.pause(3000)
        goal.delete()
        basic.showString("Goal!")
        while (true) {
            basic.showIcon(IconNames.Happy)
            basic.clearScreen()
        }
    }
    basic.pause(500)
})