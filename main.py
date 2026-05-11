def on_button_pressed_a():
    basic.clear_screen()
    for posició in range(5):
        led.plot(posició, 0)
        basic.pause(200)
input.on_button_pressed(Button.A, on_button_pressed_a)

posició2 = 0