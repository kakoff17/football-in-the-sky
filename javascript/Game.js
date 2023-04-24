class Game {

    constructor () {
        this.background = new Image ()
        this.background.src = "images/field.png"

        this.pele = new Pele ()
        this.maradona = new Maradona()
    }

    drawPitch = () => {
        ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height)
    }

    gameLoop = () => {
        //console.log("probando ejecución")

        // limpieza 


        // acciones y movimientos elementos

        // dibujando los elementos
        this.drawPitch()
        this.pele.peleDraw()
        this.maradona.maradonaDraw()


        // Recursion
        requestAnimationFrame(this.gameLoop)
    }

}