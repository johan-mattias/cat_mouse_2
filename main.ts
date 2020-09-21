input.onButtonPressed(Button.A, function on_button_pressed_a() {
    mouse.move(1)
})
let mouse : game.LedSprite = null
let cat = game.createSprite(0, 0)
mouse = game.createSprite(4, 4)
mouse.set(LedSpriteProperty.Brightness, 100)
game.setScore(0)
game.setLife(1)
cat.change(LedSpriteProperty.Direction, 45)
mouse.change(LedSpriteProperty.Direction, 270)
basic.forever(function on_forever() {
    cat.ifOnEdgeBounce()
    cat.move(1)
    if (cat.isTouching(mouse)) {
        game.removeLife(1)
    }
    
    basic.pause(1000)
})
