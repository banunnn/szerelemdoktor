let r = 0
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    r = randint(0, 2)
    if (r == 1) {
        basic.showIcon(IconNames.Heart)
    }
    if (r == 2) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
basic.forever(function () {
    if (!(input.buttonIsPressed(Button.AB))) {
        basic.showString("...")
    } else {
        basic.pause(5000)
    }
})
