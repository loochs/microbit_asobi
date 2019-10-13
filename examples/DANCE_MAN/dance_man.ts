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

        else if (which == "both") {
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

        else if (which == "both") {
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
    constructor(temp0: number, hip_point = 2, chest_point = 1) {
        this.temp0 = temp0
        this.hip_point = hip_point
        this.chest_point = chest_point
        this.leg = new Leg(this.temp0, this.hip_point)
        this.arm = new Arm(this.temp0, this.chest_point)
    }

    footUpLeft() {
        this.leg.footUpLeft()
        this.pause()
    }

    footUpRight() {
        this.leg.footUpRight()
        this.pause()
    }

    footUp() {
        this.leg.footUp()
        this.pause()
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
        this.arm.handsDown("both")
        this.arm.handsDown("both")
        this.pause()
    }

    handsUpRight() {
        this.arm.handsUp("right")
        this.pause()
    }

    handsUpLeft() {
        this.arm.handsUp("left")
        this.pause()
    }

    handsUp() {
        this.arm.handsUp("both")
        this.arm.handsUp("both")
        this.pause()
    }

    hip_change(x: number) {
        this.hip_point = x
        this.leg.set_hip(this.hip_point)
    }

    straight(how: string) {
        this.arm.stay()
        led.plot(2, 0)
        led.plot(2, this.chest_point)
        this.hip_change(2)
        led.plot(this.hip_point, 2)

        if (how == "wide") {
            this.leg.wideStand()
        }
        else if (how == "normal") {
            this.leg.normalStand()
        }
        this.pause()
    }

    shake(which: string, how: string) {
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

        if (how == "wide") {
            this.leg.wideStand()
        }

        else if (how == "normal") {
            this.leg.normalStand()
        }
        this.pause()
    }
    pause() {
        basic.pause(this.temp0)
    }
}

class Leg {
    temp0: number
    hip_point: number
    leg_point: number
    constructor(temp0: number, hip_point: number, leg_point = 3) {
        this.temp0 = temp0
        this.hip_point = hip_point
        this.leg_point = leg_point
    }

    footUpLeft() {
        led.plot(this.hip_point - 1, this.leg_point)
        led.unplot(this.hip_point - 1, this.leg_point + 1)
        led.plot(this.hip_point - 2, this.leg_point)
    }

    footUpRight() {
        led.plot(this.hip_point + 1, this.leg_point)
        led.unplot(this.hip_point + 1, this.leg_point + 1)
        led.plot(this.hip_point + 2, this.leg_point)
    }

    footUp() {
        this.footUpLeft()
        this.footUpRight()
    }

    normalStand() {
        led.plot(this.hip_point - 1, this.leg_point)
        led.plot(this.hip_point - 1, this.leg_point + 1)
        led.plot(this.hip_point + 1, this.leg_point)
        led.plot(this.hip_point + 1, this.leg_point + 1)
    }

    set_hip(hip_point: number) {
        this.hip_point = hip_point
    }

    wideStand() {
        led.plot(this.hip_point - 1, this.leg_point)
        led.plot(this.hip_point - 2, this.leg_point + 1)
        led.plot(this.hip_point + 1, this.leg_point)
        led.plot(this.hip_point + 2, this.leg_point + 1)
    }
}

class Man {
    body: Body
    temp0: number
    constructor(temp0: number) {
        this.body = new Body(temp0, 2, 1);
    }

    footUp(how: string) {
        basic.clearScreen()
        this.body.straight(how)
        this.pause()
        this.body.footUp()
        this.pause()
    }

    footUpLeft(how: string) {
        basic.clearScreen()
        this.body.straight(how)
        this.pause()
        this.body.footUpLeft()
        this.pause()
    }

    footUpRight(how: string) {
        basic.clearScreen()
        this.body.straight(how)
        this.pause()
        this.body.footUpRight()
        this.pause()
    }

    handsDown(how: string) {
        basic.clearScreen()
        this.body.straight(how)
        this.pause()
        this.body.handsDownLeft()
        this.pause()
        this.body.handsDownRight()
        this.pause()
    }

    handsUp(how: string) {
        basic.clearScreen()
        this.body.straight(how)
        this.pause()
        this.body.handsUpLeft()
        this.pause()
        this.body.handsUpRight()
        this.pause()
    }

    handsUpRight(how: string) {
        basic.clearScreen()
        this.body.straight(how)
        this.pause()
        this.body.handsUpLeft()
        this.pause()
    }

    standStraight(how: string) {
        basic.clearScreen()
        this.body.straight(how)
        this.pause()
    }

    shakeHip(how: string) {
        basic.clearScreen()
        this.body.shake("right", how)
        this.pause()
        basic.clearScreen()
        this.body.shake("left", how)
        this.pause()
    }

    pause() {
        basic.pause(this.temp0)
    }
}

const man = new Man(100)
let how = "normal" // or "wide"

input.onButtonPressed(Button.A, function () {
    man.standStraight(how)
    for (let index = 0; index < 4; index++) {
        man.shakeHip(how)
        man.standStraight(how)

    }
})

input.onButtonPressed(Button.B, function () {
    man.standStraight(how)
    for (let index = 0; index < 4; index++) {
        man.handsDown(how)
        man.handsUp(how)
        man.footUpLeft(how)
        man.footUpRight(how)
        man.footUp(how)
    }
})

input.onButtonPressed(Button.AB, function () {
    man.standStraight(how)
    for (let index = 0; index < 4; index++) {
        man.shakeHip(how)
        man.handsDown(how)
        man.handsUp(how)
    }
})