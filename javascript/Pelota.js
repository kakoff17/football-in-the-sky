class Pelota {
  constructor() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.img = new Image() 
    this.img.src = "images/pelota.png"
    this.w = 30
    this.h = 30  
    this.velocity = 1.2
    this.color = "#ffffff";
    this.isPelotaMovingDown = true;
    this.isPelotaMovingRight = true;
    
  }

  pelotaDraw = () => {
    
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  };

  pelotaMovement = () => {
    if (
      this.x + this.w > canvas.width      
    ) {
      //camia direccion al chocar con pared
      this.isPelotaMovingRight = false;
    }

    if (this.x - this.w < 0){
      this.isPelotaMovingRight = true;
    }
    
    if (this.y + this.h > canvas.height) {
      alert("Gol de Pele");
      this.y = canvas.height - this.h;
      //this.velocityY = -this.velocityY;
      this.isPelotaMovingDown = false;
      
    } else if (this.y - this.h < 0) {
      alert("Gol de Maradona");
      this.y = this.h;
      //this.velocityY = -this.velocityY;
      this.isPelotaMovingDown = true;
    }

    if (this.isPelotaMovingRight === false){
      this.x -= this.velocity      
    } else{
      this.x += this.velocity
    }
    if(this.isPelotaMovingDown === true){
    this.y += this.velocity
  } else{
    this.y -= this.velocity
  }  
}
}

 