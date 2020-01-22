// When B is pressed, hero activates cheat code.
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
// When the enemy overlaps the player,
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    pause(1000)
    Hero()
})
function Enem () {
    bad_guy = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 8 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 8 8 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 5 5 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 5 5 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . . . . d d f d d f d d . . . . . . . . . . . . . 
. . . . . . . . . . . d d d d d d d d . . . . . . . . . . . . . 
. . . . . . . . . . . d d f f f f d d . . . . . . . . . . . . . 
. . . . . . . . . . . . d f d d f d d . . . . . . . . . . . . . 
. . . . . . . . . . . . . d d d d . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 8 f 8 8 . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 f 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . . . . 8 5 5 8 f 8 8 8 8 . . . . . . . . . . . . 
. . . . . . . . . . 8 8 5 5 8 f 8 8 8 8 8 . . . . . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 f 8 8 8 8 8 . . . . . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 f 8 8 8 8 8 . . . . . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . 
. . . . . . . . . . d e e e e 5 e e e e d . . . . . . . . . . . 
. . . . . . . . . . f 8 8 f 8 8 8 f 8 8 f . . . . . . . . . . . 
. . . . . . . . . . d 8 f 8 8 8 8 8 f 8 d . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 8 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 8 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 8 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 . . . 8 8 . . . . . . . . . . . . . 
. . . . . . . . . . . f f f . . . f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    bad_guy.follow(hero, 70)
    bad_guy.setKind(SpriteKind.Enemy)
}
// When the player overlaps the enemy, the enemy
// disipears
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
// When A is pressed, fire shoots from player sprite.
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Pro()
})
function Pro () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . 5 5 5 5 . 5 5 5 . . . . . 
. . . . 5 5 5 4 4 4 4 5 5 5 5 . . . . . 
. . . 5 5 4 4 4 4 4 4 4 4 5 5 5 5 5 . . 
. . . . 5 5 5 4 4 4 4 4 4 4 4 4 5 . . . 
. . . 5 5 5 5 5 4 4 4 4 4 4 4 5 . . . . 
. . . . 5 4 4 4 4 4 4 4 4 4 5 . . . . . 
. . . . 5 5 4 4 4 5 5 5 4 4 5 5 5 . . . 
. . . 5 5 5 4 4 4 5 4 5 5 4 4 4 5 . . . 
. . . . . 5 4 4 4 5 5 5 5 4 4 5 5 . . . 
. . . . . 5 5 4 4 4 4 5 4 4 4 5 5 . . . 
. . . . . 5 5 4 4 4 4 4 4 4 4 4 5 . . . 
. . . . 5 5 4 4 4 4 4 4 4 4 4 4 5 . . . 
. . . . 5 5 5 5 5 4 4 4 4 4 4 4 5 . . . 
. . . . . . . . 5 5 4 4 4 5 4 5 5 . . . 
. . . . . . . . . . 5 5 5 5 5 5 . . . . 
. . . . . . . . . . . . . . . 5 . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`, hero, Math.randomRange(0, 120), Math.randomRange(0, 120))
    projectile.setKind(SpriteKind.Projectile)
}
function Hero () {
    // It Creates a sprite
    hero = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 5 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 5 5 5 . . . . . . . . . . . . . . . 
. . . . . . . . . . . 5 5 5 5 5 5 5 . . . . . . . . . . . . . . 
. . . . . . . . . . 5 5 5 5 5 5 5 5 5 . . . . . . . . . . . . . 
. . . . . . . . . . . 5 5 5 5 5 5 5 5 . . . . . . . . . . . . . 
. . . . . . . . . . . 5 d d d d d d d . . . . . . . . . . . . . 
. . . . . . . . . . . d d d d d d d d . . . . . . . . . . . . . 
. . . . . . . . . . . d 1 f d 1 f d d . . . . . . . . . . . . . 
. . . . . . . . . . . d d d d d d d d . . . . . . . . . . . . . 
. . . . . . . . . . . d d d f f f d d . . . . . . . . . . . . . 
. . . . . . . . . . . . d d d d d d d . . . . . . . . . . . . . 
. . . . . . . . . . . . . d d d d . . . . . . . . . . . . . . . 
. . . . . . . . . . . . b b b b b b . . . . . . . . . . . . . . 
. . . . . . . . . . . b b b b b b b b . . . . . . . . . . . . . 
. . . . . . . . . . . b b b b f b b b b . . . . . . . . . . . . 
. . . . . . . . . . b b b b f 5 f b b b b . . . . . . . . . . . 
. . . . . . . . . . b b b b b f b b b b b . . . . . . . . . . . 
. . . . . . . . . . b b b b b b b b b b b . . . . . . . . . . . 
. . . . . . . . . . b b b b b b b b b b b . . . . . . . . . . . 
. . . . . . . . . . d f f f f f f f f f d . . . . . . . . . . . 
. . . . . . . . . . d f f f f f f f f f d . . . . . . . . . . . 
. . . . . . . . . . d b f f f f f f f b d . . . . . . . . . . . 
. . . . . . . . . . . . b b f f f b b . . . . . . . . . . . . . 
. . . . . . . . . . . . b b b b b b b . . . . . . . . . . . . . 
. . . . . . . . . . . . b b b b b b b . . . . . . . . . . . . . 
. . . . . . . . . . . . b b . . . b b . . . . . . . . . . . . . 
. . . . . . . . . . . f f f . . . f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    // Set hero's x position
    hero.setPosition(0, 0)
    // It moves her player in
    //
    // all directions
    controller.moveSprite(hero, 200, 200)
    // It makes sure the hero is always on the screen.
    hero.setFlag(SpriteFlag.StayInScreen, true)
    hero.setKind(SpriteKind.Player)
}
function Cheat_code () {
	
}
info.onLifeZero(function () {
    game.over(false)
})
let projectile: Sprite = null
let hero: Sprite = null
let bad_guy: Sprite = null
// Adds a timer fr the game
info.startCountdown(20)
// It shows text directions for the game
game.splash("Escape the police!", "")
Hero()
Enem()
Pro()
info.setLife(3)
// Repeats enemy so that it comes back every second
game.onUpdateInterval(1000, function () {
    for (let index = 0; index < 1; index++) {
        Enem()
    }
})
