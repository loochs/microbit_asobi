class Arm {
    temp0: number
    chest_point: number
    constructor(temp0: number, chest_point: number) {
        this.temp0 = temp0
        this.chest_point = chest_point
    }

    stay() {
        led.plot(0, this.chest_point)
        led.plot(1, this.chest_point)
        led.plot(3, this.chest_point)
        led.plot(4, this.chest_point)
    }

    handsDown(which: string) {
        if (which == "right") {
            led.plot(0, this.chest_point + 1)
            led.plot(1, this.chest_point)
        }

        else if (which == "left") {
            led.plot(3, this.chest_point)
            led.plot(4, this.chest_point + 1)
        }
    }

    handsUp(which: string) {
        if (which == "right") {
            led.plot(0, this.chest_point - 1)
            led.plot(1, this.chest_point)
        }

        else if (which == "left") {
            led.plot(3, this.chest_point)
            led.plot(4, this.chest_point - 1)
        }
    }
}

class Body {
    temp0: number
    hip_point: number
    chest_point: number
    leg: Leg
    arm: Arm
    constructor(temp0: number, hip_point: number, chest_point: number) {
        this.temp0 = temp0
        this.hip_point = hip_point
        this.chest_point = chest_point
        this.leg = new Leg(this.temp0, this.hip_point)
        this.arm = new Arm(this.temp0, this.chest_point)
    }

    handsDownRight() {
        this.arm.handsDown("right")
        this.pause()
    }

    handsDownLeft() {
        this.arm.handsDown("left")
        this.pause()
    }

    handsDown() {
        this.arm.handsDown("right")
        this.arm.handsDown("left")
        this.pause()
    }

    handsUpRight() {
        this.arm.handsUp("right")
        this
    }

    handsUpLeft() {
        this.arm.handsUp("left")
    }

    handsUp() {
        this.arm.handsUp("right")
        this.arm.handsUp("left")
    }

    hip_change(x: number) {
        this.hip_point = x
        this.leg.set_hip(this.hip_point)
    }

    straight() {
        this.arm.stay()
        led.plot(2, 0)
        led.plot(2, this.chest_point)
        this.hip_change(2)
        led.plot(this.hip_point, 2)
        this.leg.stand()
        this.pause()
    }

    shake(which: string) {
        this.arm.stay()
        led.plot(2, 0)
        led.plot(2, 1)
        if (which == "right") {
            this.hip_change(3)
            led.plot(this.hip_point, 2)
        }

        else if (which == "left") {
            this.hip_change(1)
            led.plot(this.hip_point, 2)
        }
        this.leg.stand()
        this.pause()
    }
    pause() {
        basic.pause(this.temp0)
    }
}

class Leg {
    temp0: number
    hip_point: number
    constructor(temp0: number, hip_point: number) {
        this.temp0 = temp0
        this.hip_point = hip_point
    }

    set_hip(hip_point: number) {
        this.hip_point = hip_point
    }

    stand() {
        led.plot(this.hip_point - 1, 3)
        led.plot(this.hip_point - 1, 4)
        led.plot(this.hip_point + 1, 3)
        led.plot(this.hip_point + 1, 4)
    }
}

class Man {
    body: Body
    temp0: number
    constructor(temp0: number) {
        this.body = new Body(temp0, 2, 1);
    }

    handDown() {
        basic.clearScreen()
        this.body.straight()
        this.pause()
        this.body.handsDownLeft()
        this.pause()
        this.body.handsDownRight()
        this.pause()
    }

    handsUp() {
        basic.clearScreen()
        this.body.straight()
        this.pause()
        this.body.handsUpLeft()
        this.pause()
        this.body.handsUpRight()
        this.pause()
    }

    standStraight() {
        basic.clearScreen()
        this.body.straight()
        this.pause()
    }

    shakeHip() {
        basic.clearScreen()
        this.body.shake("right")
        this.pause()
        basic.clearScreen()
        this.body.shake("left")
        this.pause()
    }

    pause() {
        basic.pause(this.temp0)
    }
}

const man = new Man(100)

input.onButtonPressed(Button.A, function () {
    man.standStraight()
    man.shakeHip()
    man.standStraight()
})

input.onButtonPressed(Button.B, function () {
    man.standStraight()
    man.handDown()
    man.handsUp()
})