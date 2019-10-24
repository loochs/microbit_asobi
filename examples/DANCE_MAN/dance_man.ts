class Arm {
    temp0: number
    chest_point: number
    constructor(temp0: number, chest_point: number) {
        this.temp0 = temp0
        this.chest_point = chest_point
    }

    stay() {
        led.plot(0, this.chest_point + 1)
        led.plot(1, this.chest_point)
        led.plot(3, this.chest_point)
        led.plot(4, this.chest_point + 1)
    }

    handsDown() {
        this.handsDownLeft()
        this.handsDownRight()
    }

    handsDownLeft() {
        led.plot(0, this.chest_point + 1)
        led.plot(1, this.chest_point)
    }

    handsDownRight() {
        led.plot(3, this.chest_point)
        led.plot(4, this.chest_point + 1)
    }

    handsUp() {
        this.handsUpLeft()
        this.handsUpRight()
    }

    handsUpLeft() {
        led.unplot(0, this.chest_point + 1)
        led.plot(0, this.chest_point - 1)
        led.plot(1, this.chest_point)
    }

    handsUpRight() {
        led.plot(3, this.chest_point)
        led.unplot(4, this.chest_point + 1)
        led.plot(4, this.chest_point - 1)
    }
}

class Body {
    temp0: number
    hipPointX: number
    hipPointY: number
    chestPointX: number
    chestPointY: number
    neckPointX: number
    neckPointY: number
    leg: Leg
    arm: Arm
    constructor(temp0: number,
        neckPointX = 2, neckPointY = 0,
        chestPointX = 2, chestPointY = 1,
        hipPointX = 2, hipPointY = 2, ) {
        this.temp0 = temp0
        this.hipPointX = hipPointX
        this.hipPointY = hipPointY
        this.chestPointX = chestPointX
        this.chestPointY = chestPointY
        this.neckPointX = neckPointX
        this.neckPointY = neckPointY
        this.leg = new Leg(this.temp0, this.hipPointX, this.hipPointY)
        this.arm = new Arm(this.temp0, this.chestPointY)
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
        this.arm.handsDownRight()
        this.pause()
    }

    handsDownLeft() {
        this.arm.handsDownLeft()
        this.pause()
    }

    handsDown() {
        this.arm.handsDown()
        this.pause()
    }

    handsUpRight() {
        this.arm.handsUpRight()
        this.pause()
    }

    handsUpLeft() {
        this.arm.handsUpLeft()
        this.pause()
    }

    handsUp() {
        this.arm.handsUpRight()
        this.arm.handsUpLeft()
        this.pause()
    }

    plotChest() {
        led.plot(this.chestPointX, this.chestPointY)
    }

    plotHip() {
        led.plot(this.hipPointX, this.hipPointY)
    }

    plotNeck() {
        led.plot(this.neckPointX, this.neckPointY)
    }

    straight(how: string) {
        this.arm.stay()
        this.plotNeck()
        this.plotChest()
        this.shakeHipCenter()
        this.plotHip()

        if (how == "wide") {
            this.leg.wideStand()
        }
        else if (how == "normal") {
            this.leg.normalStand()
        }
        this.pause()
    }

    shakeHipCenter() {
        this.hipPointX = 2
        this.leg.set_hip(this.hipPointX)
    }

    shakeHipLeft() {
        this.hipPointX = 1
        this.leg.set_hip(this.hipPointX)
    }

    shakeHipRight() {
        this.hipPointX = 3
        this.leg.set_hip(this.hipPointX)
    }

    shake(which: string, how: string) {
        this.arm.stay()
        this.plotNeck()
        this.plotChest()
        if (which == "right") {
            this.shakeHipRight()
            this.plotHip()
        }

        else if (which == "left") {
            this.shakeHipLeft()
            this.plotHip()
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
    footPointLeftX: number
    footPointLeftY: number
    footPointRightX: number
    footPointRightY: number
    legPointLeftX: number
    legPointLeftY: number
    legPointRightX: number
    legPointRightY: number
    hipPointX: number
    hipPointY: number
    constructor(temp0: number, 
        hipPointX: number, hipPointY: number) {
        this.temp0 = temp0
        this.hipPointX = hipPointX
        this.hipPointY = hipPointY
        this.legPointLeftX = this.hipPointX - 1
        this.legPointLeftY = this.hipPointY + 1
        this.legPointRightX = this.hipPointX + 1
        this.legPointRightY = this.hipPointY + 1
        this.footPointLeftX = this.legPointLeftX - 1
        this.footPointLeftY = this.legPointLeftY + 1
        this.footPointRightX = this.legPointRightX + 1
        this.footPointRightY = this.legPointRightY + 1
    }

    footUpLeft() {
        this.update()
        this.plotLegLeft()
        this.unplotFootLeft()
        this.plotFootLeftUp()
    }

    footUpRight() {
        this.update()
        this.plotLegRight()
        this.unplotFootRight()
        this.plotFootRightUp()
    }

    footUp() {
        this.footUpLeft()
        this.footUpRight()
    }

    normalStand() {
        this.update()
        this.plotLegLeft()
        this.plotFootLeft()
        this.plotLegRight()
        this.plotFootRight()
    }

    plotLegLeft() {
        led.plot(this.legPointLeftX, this.legPointLeftY)
    }

    plotLegRight() {
        led.plot(this.legPointRightX, this.legPointRightY)
    }

    plotFootLeft() {
        led.plot(this.footPointLeftX, this.footPointLeftY)
    }

    plotFootRight() {
        led.plot(this.footPointRightX, this.footPointRightY)
    }

    plotFootLeftUp() {
        led.plot(this.footPointLeftX, this.footPointLeftY - 1)
    }

    plotFootRightUp() {
        led.plot(this.footPointRightX, this.footPointRightY - 1)
    }

    unplotLegLeft() {
        led.unplot(this.legPointLeftX, this.legPointLeftY)
    }

    unplotLegRight() {
        led.unplot(this.legPointRightX, this.legPointRightY)
    }

    unplotFootLeft() {
        led.unplot(this.footPointLeftX, this.footPointLeftY)
    }

    unplotFootRight() {
        led.unplot(this.footPointRightX, this.footPointRightY)
    }

    set_hip(hipPoint: number) {
        this.hipPointX = hipPoint
    }

    update() {
        this.legPointLeftX = this.hipPointX - 1
        this.legPointLeftY = this.hipPointY + 1
        this.legPointRightX = this.hipPointX + 1
        this.legPointRightY = this.hipPointY + 1
        this.footPointLeftX = this.legPointLeftX - 1
        this.footPointLeftY = this.legPointLeftY + 1
        this.footPointRightX = this.legPointRightX + 1
        this.footPointRightY = this.legPointRightY + 1
    }

    wideStand() {
        // led.plot(this.hipPoint - 1, this.legPoint)
        // led.plot(this.hipPoint - 2, this.legPoint + 1)
        // led.plot(this.hipPoint + 1, this.legPoint)
        // led.plot(this.hipPoint + 2, this.legPoint + 1)
    }
}

class Man {
    body: Body
    temp0: number
    constructor(temp0: number) {
        this.body = new Body(temp0);
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
        man.standStraight(how)
    }
})

input.onButtonPressed(Button.AB, function () {
    man.standStraight(how)
    for (let index = 0; index < 4; index++) {
        man.standStraight(how)
        man.shakeHip(how)
        man.handsDown(how)
        man.handsUp(how)
    }
})