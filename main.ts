let global_direction = false
let pos = 0
let dir2 = false
let startTime = 0
function move () {
    global_direction = Math.randomBoolean()
    if (global_direction) {
        pos = [0, 2, 4]._pickRandom()
        dir2 = Math.randomBoolean()
        if (dir2) {
            for (let index = 0; index <= 4; index++) {
                if (led.point(pos, index + 1)) {
                    led.plot(pos, index)
                    led.unplot(pos, index + 1)
                }
            }
        } else {
        	
        }
    }
}
basic.forever(function () {
    while (!(input.buttonIsPressed(Button.AB))) {
        basic.clearScreen()
    }
    while (input.buttonIsPressed(Button.AB)) {
    	
    }
    startTime = control.millis()
    while (!(input.buttonIsPressed(Button.AB))) {
    	
    }
    basic.clearScreen()
})
