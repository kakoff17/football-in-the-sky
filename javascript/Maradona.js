class Maradona {
  constructor() {
    // propiedades
    this.x = canvas.width / 2 - 25;
    this.y = 525;
    this.img = new Image();
    this.img.src = "images/mardonA.png";
    this.w = 55;
    this.h = 70;
    this.speed = 20;
  }

  // acciones
  maradonaDraw = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  maradonaMovement = (movimiento) => {
    if (movimiento === "Left" && this.x > 0) {
      this.x -= this.speed;
      
    } else if (movimiento === "Right" && this.x < canvas.width - this.w) {
      this.x += this.speed;
      
    } else if (movimiento === "Up" && this.y > canvas.height / 2) {
      this.y -= this.speed;
      
    } else if (movimiento === "Down" && this.y < canvas.height - this.h) {
      this.y += this.speed;
      
    }
  };
}
