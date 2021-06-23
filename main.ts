namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Flower = SpriteKind.create()
    export const Fireball = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    while (玩家.overlapsWith(寶寶)) {
        寶寶.setPosition(寶寶X, 0)
        障礙物.setPosition(障礙物X, 0)
    }
    pause(1000)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundImage(img`
        ccccccccccccccccccccccccccccccccccccccccfffffffffffcfffffffffffffffffffffffffffffffffffffffffffcfff22ffcccccfccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccfffffffffffcffffffffffffffffffffffffffffffffffffffffffcffff222fccccffccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccfff222ffffcfffffffffffffffffffffffffffffffffffffffffffcfffff22fcccffffcccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccfff222ffffcffffffffffffffffffffffffffffffffffffffffffffcffff22fcccffffccfccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccfff22ffffccffffffffffffffffffffffffffffffffffffffffffffcfffffffcccfffffcfccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccfccccccccccccccccccfff2fffffcffffffffffffffffffffffffffffffffffffffffffffffcffffffcccfffffcfccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccfccccccccccccccccccfffffffffcffffffffffffffffffffffffffffffffffffffffffffffcffffffcccfffffffccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccfcccfccccccccccccccfffffffffcfffffffffffffffffffffffffffffffffffffffffffffffcfffffcccfffffffccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccfccffccccccccccccccffffffffcffffffffffffffffffffffffffffffffffffffffffffffffcfffffcccfffffffccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccfcffcccccccfcccccccffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffcffffcccf2fffffccccccccccccccccccfcccccccccccccccccccccccccccc
        cccccccccccccccccccccfffccccccccffccccccfffffffcffffffffffffffffffffffffffffffffffffffffffffffffffcffffcccf22ffffcfccccccccccccccccfcccccccccccccccfffffffcccccc
        ccccccccccccccccccccfcfccccccccfffccccccffff2ffcfffffffffffffffffffffffffffffffffffffffffffffffffffcfffcccf22ffffcfccccccfcccccccccfcccccccccccccfffc22222fccccc
        ccccccccccccccccccccccfccfccccffffccccccfff222cffffffffffffffffffffffffffcfffffffffffffffffffffffffcfffcccff2ffffcfccccccffccccccccfccccccccccccffcc222c222fcccc
        ccccccccccccccccccccccfccfccccffffccccccfff2ffcffffffffffffffffffffffffffcffffffffffffffffffffffffffcffcccfffffffffccccccffccccccccfcccccccccccfcccc22c22c2fcccc
        cccccccccccccccccccccccffcccccffffccccccff22ffcffffffffffffffffffffffffffcfffffffffffffffffffffffffffcfcccfffffffffccccccff2cccccfcffccccccccccfcccc2ccc2222cccc
        cccccccccccccccccccccccfcccccfffffccccccff2ffcfffffffffffffffffffffffffffcfffffffffffffffffffffffffffcfcccfffffffffccccccff2cccccfcfcffccccccccfccccccccc222fccc
        ccccccccccccccccccccccffccccffffffccccccfffffcfffffffffffffffffffffffffffcffffffffffffffffffffffffffffcfccfffff2fffccccccfff22ccccffcccfcccccccfccffcccccc222ccc
        cccccccccccccccccccccfccfccffffffffcccccffffcffffffffffffffffffffffffffffcffffffffffffffffffffffffffffcfccfffff22ffccccccffff2cccccfcccccccccccfcfcfcfccff22fccc
        ccccccccccccccccccccccccfccffffffffccccfffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcffffff2ffccccccffff22ccccfcccccccccccfcfcfcfcfccf2fccc
        ccccccccccccccccccccccccfccffffffffccffcfffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcfffffffffccccccfffff22cccffccccccccccfcffccfcfccf2fccc
        ccccccccccccccccccccccccfcfffffffffcffcffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffccccccffffff2cccffccccccccccfcfffcfcfffc2fccc
        ccccccccccccccccccccccccccfffffffffcffcffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcff2fffffffccccccffffff2cccfcfcccccccccfcfcccfcfccc2fccc
        cccccccccccccccccccccccccfffff2ffffcfffcffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcf2ffffffffcccccffffff22ccfccfccccccccfcfcccfcfccc2fccc
        cccccccccccccccccccccccccfffff22fffcfcfcffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcf2fffffffffffccfffffff2ccfccfccccccccfcccccccfccccfccc
        ccccccccccccccccccccccccffffff2ffffcfcfcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffccfffcfffffff22cfcccfcccccccfccccccccccccfccc
        ccccccccc2ffccccccccccccffffff2ffffcfcfcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffccccffffffffff222cccccccccccfc6ccccc6ccccfccc
        cccccccf2222fcccccccccccffffff2ffffccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcff2ffffccccccffffffff222ccccccccccc6666cc666c66cfccc
        ccccccf22222fcccccccccccffffff2fffffcccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfff2fffccccccfffffffffc2ccccccccccc66c6c66666c66fccc
        ccccc22222222fcccccccccfffffffffffffcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfff2ffccccccfffffffff2fcccccccccccc6666c666cc66fccc
        cccc222222222cfccccccccfffffffffffffccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffccccccffffffffff22cccccccccccc66ccc66c6c666cc
        cccc222c2cc222fcccccccffffffffffffffccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffccccccfff2fffffff2cccccccccccccccccccccc66ccc
        cccf222c2cc222fcccccccfffff2ffffffffcccfffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffcfffffccccccfff2fffffff2ccccccccccccccccccccc6ccccc
        cccfcc2ccccc22cfcccccffffff22fffffffcccfffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffcffffcfccfcfff22ffffff2ccccccccccccccccccccccccccc
        cccfcccccccc22cfcccccfffff222fff2fffcfcfffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffcffffcfccfcfff22ffffff22ccccffffcccccccccccccccccc
        cccfccccccccc2cfcccccfffff22fff22fffccffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffcfffcfcffcfffff2ffffff2ccfffffffccccccccccccccccc
        ccccfccccccccc2fcccccfffff2ffff22ffffcffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffcfffcffcffffff2fffffff22ffffffffffccccccccccccccc
        ccccfcccccccccccfcccccffff2ffff22fffcfffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffccfffcffff2ffffffff2ffffcccffffcccc222ccccccc
        ccccfccccccccccc6f66ccffff2ffff2ffffcfffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffcfccfcfffffffffffffff2fffffffccccfccf2222cccccc
        ccccfccccccccccc6666ccfffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfccfcfcfffffffffffffff2ccccffffccfcff2222ccccc
        cccccfcccccccc6c6666ccfffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffccfcfffffffffffffff2ccccccffffcffff2f22cccc
        cccccfccccccc666666cccfffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffccfcffffffffffffffff22cccccffffcfffff222ccc
        cccccffccccc6666666cccffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffcfcffffffffffffffff22cccccccffcffffff222cc
        ccccccfcccc6666cc66cccffffff2fffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcccffffffffffffffffffccccccccfffcfffff2f2cc
        ccccccfc6666666cc6ccccfffff222fffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcccffffffffff2ffffffcccccccccfffcfffff22cc
        ccccccf666666cccccccccfffff22ffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcccffffffffff2ffffffccccccccccffffffff2fcc
        cccccc666666ccccccccccfffff2ffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfccffff2fffff22fffffccccccccccfffffffff2cc
        ccccccc6666cccccccccfffffff2ffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfccfff22fffff222ffffcccccccccccfffffffffcc
        ccccccccc6ccccccccccfffffff2ffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcfff22ffffff2fffffcccccccccccfffffffffcc
        cccccccccccccccccccffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcfff22ffffff2fffffcccccccccccfffffffffcc
        ccccccccccccccccccfffffffffffffcffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffcffff22ffffffffffffcccccccccccfffffffffcc
        cccccccccccccccccffffcffffffffcfffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffcccccccccccfffffffffcc
        ccccccccccccccccfffffcffffffffcfffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffcccccccccccfffffffffcc
        ccccccccccccccccffffccfffffffcffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffccccccccccffffffffffcc
        cccccccccccccccffffcccfffffffcffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffccccccccccfffff22fffcc
        cccccccccccccccffffcccfffffffcffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffccccccccccffff2222ffcc
        cccccccccccfcccfffccccffffffcffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffcccccfccccffff222fffcc
        ccccccccccffccffffcccccfffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffff22ffffffcccccffcccffff222fffcc
        cccccccfffffccfffccccccffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffff22ffffffcccccffffcffffffffffcc
        ccccccfcccffcffffccccccffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffff2222fffffcccccffffcffffffffffcc
        cccccfcccfffcffffccccccfffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffff222fffffccccffffffffffffffffcc
        cccccfcccfffcfffcccccccfffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffff22fffffccccffffffffffffffffcc
        cccccfcccfffffffcccccccfffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffff2fffffccccffffffffffffffffcc
        cccccfccffffffffccccccfffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffff2fffffccccffffffffffffffffcc
        cccfffccffffffffccccccfffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffccccfffffff2ffffffffcc
        ccfcffccfffffffcccccccffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffccccfffff222ffffffffcc
        cfccfcfcfffffffcccccccffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffccccfffff2222fffffffcc
        cfccfcfffffffffcccccccfc3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffccccfffff222ffffffffcc
        cfccfcffffffffccccccccfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffccccfffffff2ffffffffcc
        ffcccfcffffffcccccccccfcfffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffccccffffffffffffffffcc
        cfcccfffffffcccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffccccffffffffffffffffcc
        cffccfffffffcccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffccccffffffffffffffffcc
        cfcfccffffffccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffccccfffffffffffff22fcc
        cfccffffffffccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffccccfffffffffffff222cc
        cfccffffffffcccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffccccffffffffffff2222cc
        ccfcffffffffcccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffccccffffffffffff2222cc
        ccfcfffff2ffcccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffccccfffffffffffff2f2cc
        cccfffff22ffccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffccccffffffffffffffffcc
        ccccffff22ffccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffccccffffffffffffffffcc
        cccfffff22ffcccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffccccffffff2fffffffffcc
        cccffff222ffcccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffccccffffff2fffffffffcc
        cccffff22fffccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffccccffff222fffffffffcc
        ccffffffffffccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffccccffff222fffffffffcc
        ccffffffffffccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfccccffff2f2fffffffffcc
        ccffffffffffcccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccffff2f2fffffffffcc
        ccffffffffffcccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccfffffffffffffffcc
        cfffffffffffccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccfffffffffffffffcc
        cfffffffffffccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccffffffffffffffcc
        cfffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccffffffffffffffcc
        ffff22ffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccffffffffff22ffcc
        ffff22ffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccfffffffff222ffcc
        fff22fffffffccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfccfffffffff2222fcc
        ff22ffffffffccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffff2222fcc
        ff22ffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcffffffffff2f2fcc
        ff22ffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffffff222cc
        ff2fffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffcc
        ff2ffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffcc
        fffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffcc
        ffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffcc
        ffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffcc
        fffff22ffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffcc
        ffff222ffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffcc
        ffff22fffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffcc
        ffff22ffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffcc
        ffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffcc
        fffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffcc
        fffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffcc
        ffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffcc
        ffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffcc
        ffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffcc
        fffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffcc
        fffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffcc
        ffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffcc
        ffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffcc
        fffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffcc
        fffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffcc
        fffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffcc
        ffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcc
        ffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcc
        fcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffcc
        cccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccc
        `)
    info.setScore(0)
    失敗 = 0
    controller.moveSprite(玩家)
    玩家 = sprites.create(img`
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . e e e e e e e e e e . . . 
        . . . e . e e e e e e e e e . . 
        . . e . e e e e e e e . e e . . 
        . . . e e e e e e e e e . e . . 
        . . . e e e e e e e e e e e . . 
        . . e e e e e e e e e e . e e . 
        . . e e e c e e e e e e e . e . 
        . . . e d c 2 e e 2 c d . e . . 
        . . . . d c 2 2 e 2 c d . . . . 
        . . . c c 2 2 2 2 2 2 c c . . . 
        . . c c 2 2 2 2 2 2 2 2 c c . . 
        . . c c 2 2 2 2 2 2 2 2 c c . . 
        . . c 2 2 2 2 2 2 2 2 2 2 c . . 
        . . c 2 2 2 2 2 2 2 2 2 2 c . . 
        `, SpriteKind.Player)
    障礙物 = sprites.create(img`
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ...........................cccccc.................
        ..........................ccccccccc...............
        .......cccccc............cc..........ccccccc......
        .....ccccccccccccccc...cccc..........ccccccccc....
        .....cccccccdddddddccccccccccc.....ccccccddccccccc
        .....ccccccccddddcccccccccccccccccccccddddddcccdcc
        .....cccccddddddddddddccccccccccccccdddddccccccccc
        ..cccccccccccccddddccccdddddddddcccdddddddddddccc.
        ccccccccccccccddddddddddcccccccccccccddddcccddcccc
        ccccdddddcccccccddddcccccccccccccccdddccdddddccccc
        ccccccccccccccccccccccccccccccccccccddcccccccddddd
        ........cccccccccccccccc......cccdddddcccccccccccc
        ........cccccc.....ccccc........ccdddccccccc......
        ................................ccccdccccccc......
        .......................cccccccccc.................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        `, SpriteKind.Enemy)
    寶寶 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . d f f f f f d . . . . 
        . . . . d d d d d d d d d . . . 
        . . . d d f f d d d f f d d . . 
        . . . . d d d d d d d d d . . . 
        . . . 6 3 3 d d 2 d d 3 3 6 . . 
        . . 6 6 6 d d d d d d d 6 6 . . 
        . . 6 6 6 9 d d d d d 9 6 9 6 . 
        . . 6 9 6 6 6 9 9 9 6 6 9 9 6 . 
        . . 6 9 9 6 6 6 9 6 6 9 9 9 6 . 
        . . 6 9 9 9 6 6 6 6 9 9 9 9 6 . 
        . . 6 9 9 9 6 6 6 9 9 9 9 9 6 . 
        . . 6 9 9 6 6 6 9 9 9 9 9 9 6 . 
        . . 6 9 6 6 6 9 9 9 9 9 9 9 6 . 
        . . 6 6 6 6 9 9 9 9 9 9 9 9 6 . 
        `, SpriteKind.Coin)
    controller.moveSprite(玩家, 80, 0)
    玩家.setPosition(77, 105)
    玩家.setStayInScreen(true)
    while (!(失敗 == 1)) {
        寶寶X = randint(0, 156)
        寶寶.setPosition(寶寶X, 0)
        animation.runMovementAnimation(
        寶寶,
        animation.animationPresets(animation.easeDown),
        2000,
        false
        )
        障礙物X = randint(0, 156)
        障礙物.setPosition(障礙物X, 0)
        pause(randint(0, 8))
        animation.runMovementAnimation(
        障礙物,
        animation.animationPresets(animation.easeDown),
        1500,
        false
        )
        if (障礙物.y < 100 || 寶寶.y < 100) {
            寶寶.setPosition(寶寶X, 0)
            障礙物.setPosition(障礙物X, 0)
        }
        if (寶寶.overlapsWith(障礙物)) {
            障礙物X = randint(0, 156)
        }
        music.playMelody("A E B E C5 E B E ", 255)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbb111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbb1111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbb111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbb1111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbb11111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbb111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbb1111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbb1bbbbb111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbb11111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffffffbbbbbbbb1111111bbbbb111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffffffffbbbbbbb11111bbbbbbb111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffbbbbbb111bbbbbbbbbb11111111111111111ffffff1111fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbb11bbbbbbbbbbb111111111111111fffffffff1111ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbb11bbbbbbbbbbb11111111111111fffffffffff1111fffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbb1bbbbbbbbbbbb1111111111111fffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffffbbbbbbbbbbbbbbbbbb111111111111fffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbffffffbbbbbbbbbbbbbbbb1111111111111ffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbffffffbbbbbbbbbbbbbbb1111111111111ffffffff1fffffffff11fffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbfffffffbbbbbbbbbbbbbb1111111111111fffffff111fffffffff11ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbfffffffbbbbbbbbbbbbb1111111111111fffffff11111fffffffff11fffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbfffffffbbbbbbbbbbb11111111111111fffffff111111fffffffff1fffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbfffffffbbbbbbbbbb111111111111111ffffff11111111fffffffff1ffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbffffffbbbbbbbbb1111111111111111ffffff111111111ffffffff11fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbfffffffbbbbbbbb1111111111111111fffff11111111111ffffffff1fffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffbfffffbbbbbbbbbbbbbbbfffffffbbbbbb1111111111111111ffffff111111111111ffffffff1ffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffbfffffbbbbbbbbbbbbbbbfffffffbbbbb1111111111111111fffffff1111111111111ffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffbfffffbbbbbbbbbbbbbbbffffffffbbb111111111111111fffffffff1111111111111ffffffff1fffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffbfffffbbbbbbbbbbbbbbbbffffffffff1111111111111fffffffffff11111111111111fffffff1fffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffbbfffffbbbbbbbbbbbbbbbbbfffffffff1111111111111ffffffffff1111111111111111ffffff11ffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffbbfffffbbbbbbbbbbbbbbbbbfffffffff1111111111111fffffffff111111111111111111fffff111fffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff1bbbbbbbbbbbbbbbbbbbbbbbbbffffffff1111111111111ffffffff1111111111111111111fffff111fffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff1bbbbbbbbbbbbbbbbbbbbbbbbbbfffffff1111111111111ffffff11111111111111111111111111111fffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff11bbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff11bbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffff111bbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffff111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff1111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff1111bbbbbbbbfffffffffffbbbbbbbbbbbb11111111111111111111111111111fffffffff11111111111111fffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff111111bbbbfffffffffffffffbbbbbbbbbb11111111111111111111111111fffffffffffffff11111111111fffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff1111111bbfffffffffffffffffffbbbbbbbb1111111111111111111111111fffffffff22222fff11111111111ffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff1111111fffffffffffffffffffffffffbbb111111111111111111111111ffffffffff222222ffffff11111111ffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffb1111111111111111111111ffffffffffff222222fffffff1111111ffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff11111fffffffffffffbbbffffffffffffffff1111111111111111111ffffffffffffff222222ffffffff111111ffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff111fffffffffffffbbbbbbbffffffffffffffffff11111111111fffffffffffffff122222222fffffffff111111fffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff1111fffffffffffbbbbb22222bffffffffffffffff11111111111ffffffffffffff1122222222ffffffffff11111fffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff111ffffffffffbbbbbbb22222bbbbbffffffffffff11111111111ffffffffffff11112222222222ffffffffff111fffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff111ffffffffffbbbbbbb22222bbbbb11fffffffffff1111111111fffffffffffff11122222222221fffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff111fffffffffffb1111122222bbb11fffffffffffff1111111111ffffffffffffff11222222222211ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff111fffffffffffff1111222221111ffffffffffffff11111111111ffffffffffffff12222222222111fffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff1111ffffffffffffff11122222111fffffffffffffff1111111111111111ffffffffff2222222222111fffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff11111111fffffffffff111111111ffffffffffff1111111111111111111111ffffffff22222222221fffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff1111111111ffffffffff111111fffffffffff11111111111111111111111111fffffff2222222222ffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff11111111111ffffffffff111fffffffffff11111111111111111111111111111fffffffff2222222fffffffffffff1ffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff1111111111111fffffffff1fffffffffff1111111111111111111111111111111ffffffffff22222ffffffffff1111ffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff11111111111111fffffffffffffffffff1111111111111111111111111111111111ffffffff22222fffffff1111111ffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff111111111111111fffffffffffffffff11111111111111111111111111111111111ffffffffffffffffff111111111ffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff1111111111111111ffffffffffffff11111111111111111fffff1111111111111111ffffffffffffffff1111111111ffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff11111bbbbb1111111fffffffffff1111111111111111111fffff11111111111111111fffffffffffff111111111111ffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff11111bbbbb11111111fffffffff11111111111111111111fffff1111111111111111111fffffffff11111111111111ffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff11111bbbbb1111111111111111111111111111111111111fffff111111111111111111111111111111111111111111ffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff11111bbbbb1111111111111111111111111111111111111fffff111111111111111111111111111111111111111111ffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff11111bbbbbb11111111111111111111111111111111111111111111111111111111111111111111111111bbbbb1111ffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff11111bbbbbb1111111111111111111111111111111111111111111111111111111111111111111111111bbbbbb1111ffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff1111bbbbbb11111111111111111111111111111111111111111111111111111111111111111111111bbbbbbbb111fffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff1111bbbbbb11111111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff11111bbbbbb11111111ffffff11111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbfffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff11111bbbbbb11111111fffffff1111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbfffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff11111bbbbbb11111111fffffffff11111111111111111111111111111111111111111111fffffff1bbbbbbbbbbbbbbbbfffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff11111bbbbbb11111111ffffffffffff111111111111111111111111111111111111111ffffffffffbbbbbbbbbbbbbbbbfffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff111111bbbbbb1111111fffffffffffffff1111111111111111111111111111111111fffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff11111bbbbbb1111111fffffffffffffffff111111111111111111111111111111fffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff11111bbbbbb1111111fffffffffffffffffffff111111111111111111111111ffffffffffffffbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff11111bbbbbbb111111fffffffffffffffffffffffffff11111111111111ffffffffffffffffffbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff111111bbbbbb111111ffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff111111bbbbbbb11111fffff22ffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff11111bbbbbbb11111fffff22222fffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff111111bbbbbbb1111ffffff222222ffffffffffffffffffffffffffffffffffffffffffffff1bbbbbbbbbbbbbbbbfffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff11111bbbbbbbb111ffffff222222221fffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff111111bbbbbbb111fffffff22222221111fffffffffffffffffffffffff1fffff22ffffff1bbbbbbbbbbbbbbbbffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffff11111bbbbbbbb11fffffff22222221111111ffffffffffffffffff111111f2222fffffff1bbbbbbbbbbbbbbbbffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffff111111bbbbbbb111fffffff222222211111122ffffffffffffffff11111222222fffffff1bbbbbbbbbbbbbbbfffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff111111bbbbbbb11ffffffff22222211111222222222222222222211112222222ffffff11bbbbbbbbbbbbbbbfffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff111111bbbbbbbb11fffffff2222222111122222222222222222221111222222fffffff11bbbbbbbbbbbbbbbfffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff111111bbbbbbb11ffffffff222222111122222222222222222221111222222ffffff111111111bbbbbbbbffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff111111bbbbbbbb11ffffffff22222211222222222222222222221112222222ffffff111111111111bbbbbffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff1111111bbbbbbb111fffffff2222221122222222222222222222212222222fffffff111111111111bbbbbffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff1111111bbbbbbb11fffffff2222222122222222222222222222212222222ffffff11111111111111ffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff111111bbbbbbbb11fffffff222222222222222222222222222222222222ffffff11111111111111ffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff1111111bbbbbbbb11fffffff22222222222222222222222222222222222ffffff11111111111111fffffffffffffffffcccccccffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff111111bbbbbbbb11ffffffff222222222222222222222222222222222ffffff11111111111111ffffffffffffffffffcccccccffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff111111bbbbbbb11fffffffff2222222222222222222222222222222fffffff11111111111111fffffffffffffffffcccccccccfffffffffff
        ffffffffffcccccccccfffffffffffffffffffffffffffff111111bbbbbb111ffffffff2222222222222222222222222222222fffffff11111111111111ffffffffffffffffffccccccccfffffffffff
        ffffffffffcccccccccffffffffffffffffffffffffffffff111111bbbbb1111ffffffff22222222222222222222222222222ffffffff1111111111111fffffffffffffffffffccccccccfffffffffff
        ffffffffffcccccccccfffffffffffffffffffffffffffffff11111bbbbb11111ffffffff2222222222222222222222222222fffffff1111111111111ffffffffffffffffffffccccccccfffffffffff
        ffffffffffcccccccccffffffffffffffffffffffffffffffff111111111111111ffffffff22222222222222222222222222fffffff1111111111111fffffffffffffffffffffccccccccfffffffffff
        ffffffffffcccccccccfffffffffffffffffffffffffffffffff11111111111111fffffffff2222222222222222222222222fffffff111111111111ffffffffffffffffffffffccccccccfffffffffff
        ffffffffffcccccccccffffffffffffffffffffffffffffffffff11111111111111fffffffff22222222222222222222222fffffff11111111111ffffffffffffffffffffffffccccccccfffffffffff
        ffffffffffcccccccccffffffffffffffffffffffffffffffffff111111111111111ffffffffff22222222222222222222ffffffff11111111111ffffffffffffffffffffffffccccccccfffffffffff
        ffffffffffcccccccccffffffffffffffffffffffffffffffffff1111111111111111ffffffffff222222222222222222ffffffff111111111111ffffffffffffffffffffffffccccccccfffffffffff
        ffffffffffcccccccccffffffffffffffffffffffffffffffffff11111111111111111ffffffffff2222222222222222fffffffff111111111111ffffffffffffffffffffffffccccccccfffffffffff
        ffffffffffcccccccccffffffffffffffffffffffffffffffffffcc1111111111111111fffffffff2222222222222222ffffffff1111111111111ffffffffffffffffffffffffccccccccfffffffffff
        ffffffffffcccccccccffffffffffffffffffffffffffffffffffccc1111111111111111fffffffff22222222222222ffffffff1111111111111cccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1111111111111111fffffffff22222222222ffffffff1111111111111ccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1111111111111111ffffffff222222222fffffffff1111111111111cccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc11111111111111fffffffff2222222ffffffffff111111111111ccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1111111111111ffffffffffffffffffffffff11111111111ccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1111111111111ffffffffffffffffffffff1111111111ccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111fffffffffffffffffff1111111111cccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111fffffffffffffffffff.111111111cccccccccccccccccccccccccccccccccccccccccccccccccccc
        `)
    失敗 += 1
    玩家.destroy()
    障礙物.destroy()
    寶寶.destroy()
    for (let index = 0; index < 2; index++) {
        music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 374)
    }
    game.over(false)
})
let 失敗 = 0
let 障礙物X = 0
let 障礙物: Sprite = null
let 寶寶X = 0
let 寶寶: Sprite = null
let 玩家: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff222fffffffffff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff222fffffffffff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff222fffffffffff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff222fffffffffff222fffffffffffffffffffffffffff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff222fffffffffff222222ffffffffffffffffffffff22222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222fffffffffffffffffffffff
    ffffffffffff222fffffffffff222222ffffffffffffffffffff2222222ffffffffffffffffffff222fffffffffffffffffffffffffffffffffffffffffffff22222222222ffffffffffffffffffffff
    ffffffffffff222ff2222ffff2222222ffffffffffffffffff2222222222fffffffffffffffffff222ffffffffffffffffffffffffffffffffffffffffff22222222222222ffffffffffffffffffffff
    ffffffffffff222222222ffff22222ffffffffffffffffff22222222f222ffffffffffffffffff2222fff2222fff2222222fffffffffffffffffffffffff2222222222f222ffffffffffffffffffffff
    ffffffffffff222222222ffff2222fffffffffffffffff22222222fff222ffffffffffffffffff2222f222222fff2222222fffffffffffffffffffffffff22222ffffff222ffffffffffffffffffffff
    ffffffffff222222222fffffff222ffffffffffffffff2222222fffff222ffffffffffffffffff22222222222fff2222222ffffffffffffffffffffffffffffffffffff222ffffffffffffffffffffff
    ffffffff222222222fffffffff222ffffffffffffffff22222ffffff2222fffffffffffffffff222222222222fffffff222ffffffffffffffffffffffffffffffffffff22222ffffffffffffffffffff
    ffffffff22222222ffffffffff222ffffffffffffffff222ffffffff2222fffffffffffffffff222222222222fffffff222fffffffffffffffffffffffffffffff2222222222ffffffffffffffffffff
    ffffffff2222f222ffffffffff222f222fffffffffffffffffffffff222fffffffffffffffff2222fffff22222fffff2222fffffffffffffffffffffffffff22222222222222ffffffffffffffffffff
    fffffffffffff222f222ff222f222f222ffffffffffffffffffffff2222fffffffffffffffff2222ffff222222fffff2222ffffffffffffffffffffff22222222222222222ffffffffffffffffffffff
    fffffffffffff222f222ff222f222f222fffffffffffffffffffff22222fffffffffffffffff222fffff222222ffff2222ffffffffffffffffffff22222222222222ff2222ffffffffffffffffffffff
    fffffffffffff222f222ff222f222f2222fffffffffffffffffff22222fffffffffffffffff2222ffff2222222ffff2222ffffffffffffffffffff2222222222ffffff2222ffffffffffffffffffffff
    fffffffffffff222f222ff222f222f2222fffffffffffffffff222222ffffffffffffffffff222222222222222222f222fffffffffffffffffffff22222fffffffffff222fffffffffffffffffffffff
    fffffff222fff222f222f2222f222ff2222fffffffffffffff222222ffffffffffffffffff222222222222f2222222222fffffffffffffffffffffffffffffffff22222fffffffffffffffffffffffff
    fffffff222fff222f22222222f222ff2222ffffffffffffff222222fffffffffffffffffff222222222222f2222222222fffffffffffff222ffffffffffffff22222222fffffffffffffffffffffffff
    fffffff2222ff222f2222222ff222fff222ffffffffffff222222fffffffffffffffffffff222ffff2222ff222f22222ffffffffffffff222ffffffffffffff22222222fffffffffffffffffffffffff
    fffffff22222f2222f222fffff222fffffffffffffffff222222fffffffffffffffffffffffffffff2222ff222ffffffffffffffffffff222ffffffffffffff22222ffffffffffffffffffffffffffff
    ffffffff2222f2222fffffffff222ffffffffffffffff222222ffffffffffffffffffffffffffffff222ff2222ffffffffffffffffffff222fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff222ff222ffffffff2222ffffffffffffffff2222ffffffffff222ffffffffffffffffff2222ff2222ffffffffffffffffffff222fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff22222222ffffffffffffffff222fffffffffff222ffffffffffffffffff2222ff222fffffffffffffffffffff222ffffffff22222222222222222222222ffffffffffffffff
    fffffffffffffffffff222222222ffffff2222fffffffffffffffffffff2222ffffffffffffffff2222fff222fffffffffffffffffffff222ffffffff22222222222222222222222ffffffffffffffff
    fffffffffffffffff22222222ffffff2222222ffffff222ffffffffffff22222fffffffffffffff2222fff222fffffffffffffffffffff222fffffff2222222222222222222222222fffffffffffffff
    fffffffffffffffff222222ffffff222222222ffffff222ffffffffffff22222ffffffffffffff2222ffff222fffffffffffffffffffff222ff22222222ffffffffffffffffff2222fffffffffffffff
    fffffffffffffffff2222fffff2222222222ffffffff222ffffffffff2222222ffffffffffffff2222ffff222ffffffff222ffffffff2222222222222222fffff222fffffffff2222fffffffffffffff
    fffffffffffffffffffffff2222222222fffffffffff222ffffffff22222222fffffffffffffff222fffff222ffffffff222fffff2222222222222222222fffff222ffffffff2222ffffffffffffffff
    fffffffffffffffffffff2222222222fffffffffffff222ffffff22222222ffffffffffffffff2222fffff222ffffffff2222ffff22222222222222ff2222ffff222fffffff22222ffffffffffffffff
    ffffffffffffffffff2222222222ffffffffffffffff222ffff22222222ffffffffffffffffff2222ffff2222ffffffff22222fff22222222fff222ff2222ffff222fffffff2222fffffffffffffffff
    fffffffffffffff2222222222fffffffffffffffffff222ff22222222fffffffffffffffffff2222fffff2222ffff222222222ffffffff222fff222fff2222fff222fffffff222ffffffffffffffffff
    fffffffffffff22222222222ffffffffffffffffffff22222222222fffffffffffffffffffff2222fffff22222222222222222ffffffff222fff222fff2222fff222ffffffffffffffffffffffffffff
    ffffffffff2222222222f222ffffffffffffffffffff222222222fffffffffffffffffffffff222fffffff222222222222222fffffffff222fff222ffff222fff222ffffffffffffffffffffffffffff
    ffffffff222222222ffff222fffffffffffffffffffff222222fffffffffffffffffffffffffffffffffff222222222fffffffffffffff222fff222ffffffffff22222222222ffffffffffffffffffff
    ffffffff2222222ffffff222ffffffffffffffffffffff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fff222ff2222222222222222222ffffffffffffffffffff
    ffffffff2222fffffffff222ff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222ff2222222222222222222ffffffffffffffffffff
    fffffffffffffffffffff222ff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222ffff2222ffffffffffffffffffff
    fffffffffffffffffffff222ff222ffffffffffffffffffffffffffffffffffff222ffff222fffffffffffffffffffffffffffffffffff2222222222222ffffff222fff2222fffffffffffffffffffff
    fffffffffffffffffffff222ff2222fffffffffffffffffffffffffffffffffff2222fff222ffffffffffffffffffffffffffffffffffffffff2222222222ffff222fff2222fffffffffffffffffffff
    fffffffffffffffffffff222ff2222fffffffffffffffffffffffffffffffffff22222ff222ffffffffffffffffffffffff222fffffffffffff2222fff2222fff222ff2222ffffffffffffffffffffff
    fffffffffffffffffffff222fff222fffffff222fffffffffffff222ffffffffff22222f222fffffffffffff222ffffffff22222fffffffffff2222fff22222ff222ff2222ffffffffffffffffffffff
    ffffffffffff222ffffff222fff2222ffffff222fffffffffffff2222ffffffffff2222f222fffffffffffff2222fffffff222222ffffffffff222fffff2222ff222ff222fffffffffffffffffffffff
    ffffffffffff222ffffff222fff2222ffffff222fffffffffffff2222fffffffffff2222222fffffffffffff22222fffffff2222222fffffffffffffffff222ff222ffffffffffffffffffffffffffff
    ffffffffffff222ffffff222ffff2222fffff222fff222ffffffff2222ffffffffff2222222ffffffffffffff22222ffffffff222222fffffffffffffffffffff222ffffffffffffffffffffffffffff
    ffffffffffff222ffffff222ffff2222fffff222fff222ffffffff22222ffffffffff22222ffffffffffffffff22222ffffffff22222fffffffffffffffffffff222ffffffffffffffffffffffffffff
    ffffffffffff222ffffff222fffff222fffff222fff222fffffffff2222fffffffffff22222f222ffffffffffff2222ffffffffff222fffffffffffffffffffff222ffffffffffffffffffffffffffff
    ffffffffffff222ffffff222fffff2222ffff222fff222ffffffffff222ffffffffffff2222f222fffffffffffff222ffffffffffffffffffffffffffffffffff222ffffffffffffffffffffffffffff
    ffffffffffff222ffffff222fffff2222ffff222fff222fffffffffffffffffff222ffff222f222ffffffffffffffffffffffffffffffffffffffffffffffffff222ffffffffffffffffffffffffffff
    ffffffffffff222ff222f222ffffff222ffff222fff222fffffffffffffffffff222ffffffff222fffffffffffffffffffff222ffffffffffffffffffffffffff222ffffffffffffffffffffffffffff
    ffffffffffff222ff2222222ffffff2222fff222fff2222ffffffffffffffffff2222fffffff222fffffffffffffffffffff2222fffffffffffffffffffffffff222ffffffffffffffffffffffffffff
    fffffffffff2222ff2222222ffffff2222fff222fff2222ffffffffffffffffff2222fffffff222fffffffffffffffffffff2222fffffffffffffffffffffffff222ffffffffffffffffffffffffffff
    fffffffffff2222fff222222fffffff222ffffffffff2222222222222222222222222fffffff222ffffffffff222222222222222fffffffffffffffffffffffff222ffffffffffffffffffffffffffff
    fffffffffff222ffffff2222fffffffffffffffffffff222222222222222222222222fffffff2222222222222222222222222222ffffffffffffffffffffff2222222fffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222fffffff2222222222222222222222222222ffffffffffffffffffffff2222222fffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222fffffffffffffffffffffffffffffffffff2222222fffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222fffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffff2ffffffffffff22222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffff2222fffffffffffff2222222ffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff2fffff22222222fffffff2fffffffffff2fffffff2fffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff2fff2ffffffff2fffffff2ffffffffff2fffffffff2ffffff2222222222fffffffffffffffff2ffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff22222222ffffffff2fffffff2fffffffff2ffff22fffff2fffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff2fff2ffffffff2fffffff2fffffffff2ffff22fffff2fffffffff2fffffffffffffffffffff2fffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffff22ffffffff2fff2ff2ffff2fffffffff2fff2fffffff2ffffffff2fffff2ffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffff2fff2fffffffff2f22ffffff2ff2ff222fff2fffffffff2fff2fffffff2fffffff22222222ffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff2f22fff2ff22222ffffff2fff2fffff2ff222ff2fff2fffffffff2fff2fffffff2fff2ffffffffff2ffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff22fff22222f2fffffffff2fffffffff2f2fffff2fff2fff22222222222222ffff222222ffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff222ffffff2fff2fffffffff2fffffffff2ffffffff2ff2fffffffff2fff2fffffff2fff2fffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff22ff2ffffff2222222fffffff2ffffffffff2fffffffff2ffffffffff2fff2fffffff2fff2fffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffff2fffffffff2ffffffffffff2fffffff2fffffffffff2fff2fffffff2222ffffff222222ffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffff2222222ffffffffffffffff2ffffffffff222fff2fffff2fffff222ff222f222fffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2ffffffffff2fffff2fffff2fffff222ff222f222fffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffff2fffff2fffff222ff222f222fffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222fffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
    `)
