class Pele {
  constructor() {
    // propiedades
    this.x = canvas.width / 2 - 25;
    this.y = 20;
    this.img = new Image();
    this.img.src = "images/peleSmall.png";
    this.w = 55;
    this.h = 70;
    this.speed = 20;
  }

  // acciones
  peleDraw = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  peleMovement = (movimiento) => {
    if (movimiento === "A" && this.x > 0) {
      this.x -= this.speed;
      //console.log("tocando tecla izquierda")
    } else if (movimiento === "D" && this.x < canvas.width - this.w) {
      this.x += this.speed;
      //console.log("tocando tecla derecha")
    } else if (movimiento === "W" && this.y > 0) {
      this.y -= this.speed;
      //console.log("tocando tecla arriba")
    } else if (movimiento === "S" && this.y < canvas.height / 2 - 40) {
      this.y += this.speed;
      //console.log("tocando tecla abajo" )
    }
  };
}
