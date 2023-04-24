class Pele {

    constructor () {
        // propiedades
        this.x = (canvas.width / 2) - 25;
        this.y = 20;
        this.img = new Image()
        this.img.src = "/images/peleSmall.png"
        this.w = 50;
        this.h = 60;
    }

    // acciones
    peleDraw = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

}