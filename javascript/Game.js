class Game {

    constructor () {
        this.background = new Image ()
        this.background.src = "images/field.png"

        this.pele = new Pele ()
        this.maradona = new Maradona()
        this.pelota = new Pelota()
        
    }

    drawPitch = () => {
        ctx.drawImage(this.background, -10, -10, canvas.width +20, canvas.height +23)
    }

    gameLoop = () => {
        //console.log("probando ejecución")

        // limpieza 


        // acciones y movimientos elementos
        this.pelota.pelotaMovement()
        this.pelota.collisionBall()
        // this.maradona.maradonaMovement()
        
        // dibujando los elementos
        this.drawPitch()
        this.pele.peleDraw()
        this.maradona.maradonaDraw()
        this.pelota.pelotaDraw()
        
        
        // Recursion
        requestAnimationFrame(this.gameLoop)
    }

}
