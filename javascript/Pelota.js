class Pelota {
  constructor() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.img = new Image();
    this.img.src = "images/pelota.png";
    this.w = 30;
    this.h = 30;
    this.velocity = 0.95;    
    this.isPelotaMovingDown = true;
    this.isPelotaMovingRight = true;
    
    // llama a la funciona de la velocidad cada 15 secs
    setInterval(() => {
      this.pelotaSpeed();
    }, 12000);

  }

  pelotaDraw = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  pelotaMovement = () => {
    if (this.x + this.w > canvas.width) {
      //cambia direccion al chocar con pared
      this.isPelotaMovingRight = false;
    }

    if (this.x - this.w < 0) {
      this.isPelotaMovingRight = true;
    }

    if (this.isPelotaMovingRight === false) {
      this.x -= this.velocity;
    } 
    else {
      this.x += this.velocity;
    }
    if (this.isPelotaMovingDown === true) {
      this.y += this.velocity;
    } 
    else {
      this.y -= this.velocity;
    }
  };

  // cambia la velocidad de la pelota
  pelotaSpeed = () => {
    this.velocity += 0.15;
  };

}  
  
