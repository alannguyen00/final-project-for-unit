/**
 */
function Enem () {
    bad_guy = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . d d d d d d . . . . . . . . . . . . . . 
. . . . . . . . . . . d f d d f d d d . . . . . . . . . . . . . 
. . . . . . . . . . . f 1 f f 1 f f f . . . . . . . . . . . . . 
. . . . . . . . . . . d f d d f d d d . . . . . . . . . . . . . 
. . . . . . . . . . . d d d d d d d d . . . . . . . . . . . . . 
. . . . . . . . . . . d d f f f f d d . . . . . . . . . . . . . 
. . . . . . . . . . . . d d d d d d d . . . . . . . . . . . . . 
. . . . . . . . . . . . . d d d d . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 5 5 5 f 5 5 . . . . . . . . . . . . . . 
. . . . . . . . . . . 5 5 5 5 f 5 f 5 . . . . . . . . . . . . . 
. . . . . . . . . . . 5 5 f 5 f 5 5 5 5 . . . . . . . . . . . . 
. . . . . . . . . . 5 5 5 5 5 f 5 5 5 5 5 . . . . . . . . . . . 
. . . . . . . . . . 5 5 5 5 5 f 5 5 5 f 5 . . . . . . . . . . . 
. . . . . . . . . . 5 5 f 5 5 f f 5 5 5 5 . . . . . . . . . . . 
. . . . . . . . . . 5 5 5 5 5 f 5 5 5 5 5 . . . . . . . . . . . 
. . . . . . . . . . d 5 5 5 5 f 5 5 5 5 d . . . . . . . . . . . 
. . . . . . . . . . f 5 5 5 5 f 5 5 5 5 f . . . . . . . . . . . 
. . . . . . . . . . d 5 5 f 5 f 5 5 f 5 d . . . . . . . . . . . 
. . . . . . . . . . . 5 5 5 5 f 5 5 5 . . . . . . . . . . . . . 
. . . . . . . . . . . . 5 5 5 f 5 5 5 . . . . . . . . . . . . . 
. . . . . . . . . . . . 5 5 5 f 5 5 5 . . . . . . . . . . . . . 
. . . . . . . . . . . . 5 5 . . . 5 5 . . . . . . . . . . . . . 
. . . . . . . . . . . f f f . . . f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, 50, 50)
}
function Pro () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . 
. . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . 
. . . . . . . . 1 1 f 1 1 1 1 1 1 1 1 1 1 f 1 1 . . . . . . . . 
. . . . . . . . 1 1 f f 1 1 1 1 1 1 1 1 f f 1 1 . . . . . . . . 
. . . . . . . . 1 1 1 1 f 1 1 1 1 1 1 f f 1 1 1 . . . . . . . . 
. . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . 
. . . . . . . . 1 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 . . . . . . . . 
. . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . 
. . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . 
. . . . . . . . 1 1 1 1 1 f f f f 1 1 1 1 1 1 1 . . . . . . . . 
. . . . . . . . 1 1 1 f f f 1 1 1 f f f 1 1 1 1 . . . . . . . . 
. . . . . . . . 1 1 1 f 1 1 1 1 1 1 1 f f 1 1 1 . . . . . . . . 
. . . . . . . . 1 1 f f 1 1 1 1 1 1 1 1 f f 1 1 . . . . . . . . 
. . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . 
. . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . 
. . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, projectile, 50, 100)
}
function Hero () {
    hero = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . f f f f f f f f f . . . . . . . . . . . . . . 
. . . . . . . . . f f d d d d d f f . . . . . . . . . . . . . . 
. . . . . . . . . f d 1 f d f 1 d f . . . . . . . . . . . . . . 
. . . . . . . . . f d d d d d d d f . . . . . . . . . . . . . . 
. . . . . . . . . f d d d d d d d f . . . . . . . . . . . . . . 
. . . . . . . . . d d 1 d d d 1 d d . . . . . . . . . . . . . . 
. . . . . . . . . d d 1 1 1 1 1 d d . . . . . . . . . . . . . . 
. . . . . . . . . . . d d d d d . . . . . . . . . . . . . . . . 
. . . . . . . . f f f f f f f f f f f . . . . . . . . . . . . . 
. . . . . . . . f f f f f f f 1 f f f . . . . . . . . . . . . . 
. . . . . . . . d d f f f f 1 1 f d d . . . . . . . . . . . . . 
. . . . . . . . d d f 1 f 1 1 f f d d . . . . . . . . . . . . . 
. . . . . . . . d d f 1 1 1 f f f d d . . . . . . . . . . . . . 
. . . . . . . . d d f f f f f f f d d . . . . . . . . . . . . . 
. . . . . . . . 5 5 f f f f f f f d d . . . . . . . . . . . . . 
. . . . . . . . d d f f f f f f f d d . . . . . . . . . . . . . 
. . . . . . . . . . f 8 8 8 8 8 8 . . . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 8 8 d 8 8 . . . . . . . . . . . . . . . 
. . . . . . . . . . 8 d 8 8 8 d 8 . . . . . . . . . . . . . . . 
. . . . . . . . . . 8 d 8 8 8 d 8 . . . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . 
. . . . . . . . . . 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . 
. . . . . . . . . . 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    controller.moveSprite(hero, 100, 100)
}
let hero: Sprite = null
let projectile: Sprite = null
let bad_guy: Sprite = null
game.splash("Survive!")
Hero()
Enem()
Pro()
