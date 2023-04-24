class Pele {

    constructor () {
        // propiedades
        this.x = (canvas.width / 2) - 25;
        this.y = 20;
        this.img = new Image()
        this.img.src = "/images/peleSmall.png"
        this.w = 50;
        this.h = 60;
        this.speed = 12;
    }

    // acciones
    peleDraw = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    peleMovement = (movimiento) => {
        if (movimiento === "A") {     
            this.x -= this.speed;
        //console.log("tocando tecla izquierda")
        }
        else if (movimiento === "D"){
            this.x += this.speed;
        //console.log("tocando tecla derecha")
        }
        else if(movimiento === "W"){
            this.y -= this.speed;
        //console.log("tocando tecla arriba")
        }
        else if (movimiento === "S"){
            this.y += this.speed;
        //console.log("tocando tecla abajo" )
        }
    }
} 
