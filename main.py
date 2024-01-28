global_direction = False
pos = 0
dir2 = False
startTime = 0
def move():
    global global_direction, pos, dir2
    global_direction = Math.random_boolean()
    if global_direction:
        pos = [0, 2, 4]._pick_random()
        dir2 = Math.random_boolean()
        if dir2:
            for index in range(5):
                if led.point(pos, index + 1):
                    led.plot(pos, index)
                    led.unplot(pos, index + 1)
        else:
            pass

def on_forever():
    global startTime
    while not (input.button_is_pressed(Button.AB)):
        basic.clear_screen()
    while input.button_is_pressed(Button.AB):
        pass
    startTime = control.event_timestamp()
    while not (input.button_is_pressed(Button.AB)):
        if int(control.event_timestamp()) != 0 % 3:
            basic.show_leds("""
                # . # . #
                . . . . .
                # . # . #
                . . . . .
                # . # . #
                """)
        else:
            move()
    basic.clear_screen()
basic.forever(on_forever)
