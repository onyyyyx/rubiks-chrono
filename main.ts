let endTime = 0
let startTime = 0
datalogger.includeTimestamp(FlashLogTimeStampFormat.None)
basic.forever(function () {
    while (!(input.buttonIsPressed(Button.AB))) {
        basic.clearScreen()
    }
    while (input.buttonIsPressed(Button.AB)) {
    	
    }
    startTime = control.millis()
    while (!(input.buttonIsPressed(Button.AB))) {
        for (let valeur of [
        images.createImage(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `),
        images.iconImage(IconNames.SmallDiamond),
        images.iconImage(IconNames.SmallSquare),
        images.iconImage(IconNames.Diamond),
        images.iconImage(IconNames.Square),
        images.iconImage(IconNames.Chessboard)
        ]) {
            valeur.showImage(0)
            if (input.buttonIsPressed(Button.AB)) {
                break;
            }
        }
    }
    while (input.buttonIsPressed(Button.AB)) {
        basic.clearScreen()
    }
    endTime = (control.millis() - startTime) / 1000
    datalogger.log(datalogger.createCV("Time", endTime))
    basic.showString("" + (endTime))
    basic.clearScreen()
})
