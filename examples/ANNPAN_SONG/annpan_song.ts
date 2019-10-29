function そうだ () {
    for (let index = 0; index < 2; index++) {
        music.playTone(494, music.beat(BeatFraction.Whole))
    }
    music.playTone(392, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Half))
}
input.onButtonPressed(Button.A, function () {
    恐れないで()
    友達さ()
})
function 恐れないで () {
    for (let index = 0; index < 3; index++) {
        music.playTone(330, music.beat(BeatFraction.Half))
    }
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
}
function みんなの () {
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
}
function 為に () {
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
}
function 友達さ () {
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Quarter))
}
basic.forever(function () {
	
})
