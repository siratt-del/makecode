input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let pos_x = 0; pos_x <= 4; pos_x++) {
        led.plot(pos_x, 0)
        basic.pause(200)
    }
    basic.clearScreen()
    for (let pos_y = 0; pos_y <= 4; pos_y++) {
        led.plot(0, pos_y)
        basic.pause(200)
    }
    basic.clearScreen()
})
let pos_x = 0
