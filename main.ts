input.onButtonPressed(Button.A, function () {
    bomb_active = false
})
input.onButtonPressed(Button.AB, function () {
    revisar_fullscreen = false
    bomb_active = true
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
let x = 0
let y = 0
let revisar_fullscreen = false
let bomb_active = false
bomb_active = true
revisar_fullscreen = false
basic.forever(function () {
    while (bomb_active == true) {
        y = randint(0, 4)
        x = randint(0, 4)
        led.plot(x, y)
        basic.pause(100)
        revisar_fullscreen = false
        for (let revisar_filas = 0; revisar_filas <= 4; revisar_filas++) {
            for (let revisar_columnas = 0; revisar_columnas <= 4; revisar_columnas++) {
                if (led.point(revisar_filas, revisar_columnas) == false) {
                    revisar_fullscreen = false
                    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.InBackground)
                    basic.pause(2000)
                    bomb_active = true
                    revisar_fullscreen = false
                    basic.clearScreen()
                }
            }
        }
    }
})
