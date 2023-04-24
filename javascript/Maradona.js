class Maradona {

    constructor () {
        // propiedades
        this.x = (canvas.width / 2) - 25;
        this.y = 525;
        this.img = new Image()
        this.img.src = "/images/mardonA.png"
        this.w = 50;
        this.h = 60;
    }

    // acciones
    maradonaDraw = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

}