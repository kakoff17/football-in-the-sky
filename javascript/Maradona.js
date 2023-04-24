class Maradona {

    constructor () {
        // propiedades
        this.x = (canvas.width / 2) - 25;
        this.y = 525;
        this.img = new Image()
        this.img.src = "/images/mardonA.png"
        this.w = 50;
        this.h = 60;
        this.speed = 12;
    }

    // acciones
    maradonaDraw = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

   maradonaMovement = (movimiento) => {
        if (movimiento === "Left") {     
            this.x -= this.speed;
        //console.log("tocando tecla izquierda")
        }
        else if (movimiento === "Right"){
            this.x += this.speed;
        //console.log("tocando tecla derecha")
        }
        else if(movimiento === "Up"){
            this.y -= this.speed;
        //console.log("tocando tecla arriba")
        }
        else if (movimiento === "Down"){
            this.y += this.speed;
        //console.log("tocando tecla abajo" )
        }
    }
} 
