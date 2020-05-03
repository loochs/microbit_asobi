let ごさ = 0
let そくていけっか = 0
let ほせいしたけっか = 0
function ごさのよそく (そくていち: number) {
    ごさ = そくていち * 0.5605 + 0.3471
}
basic.forever(function () {
    そくていけっか = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P0,
    PingUnit.Centimeters
    )
    ごさのよそく(そくていけっか)
    ほせいしたけっか = そくていけっか + ごさ
    basic.showNumber(Math.round(ほせいしたけっか))
    basic.pause(1000)
})