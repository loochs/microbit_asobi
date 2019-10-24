function setMyNumber (num: number) {
    my_number = Math.randomRange(1, num)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == my_number) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(my_number)
})
input.onButtonPressed(Button.B, function () {
    setMyNumber(max_range)
})
let my_number = 0
let max_range = 0
max_range = 3
setMyNumber(max_range)
basic.forever(function () {
	
})
