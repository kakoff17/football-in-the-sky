class Pelota {
    constructor() {
      this.x = canvas.width / 2;
      this.y = canvas.height / 2;
      this.velocityX = 1.5;
      this.velocitY = 1.5;
      this.radius = 15;
      this.color = "#ffffff";
      this.isPelotaMovingDown = true;
      this.isPelotaMovingUp = true;
      this.isPelotaMovingRight = true;
    }
  
    pelotaDraw = () => {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    };
  
    pelotaMovement = () => {
      if (this.x + this.velocityX + this.radius > canvas.width  || this.x  - this.radius + this.velocityX < 0) {
        this.velocityX = -this.velocityX;
      }
      if (this.y + this.velocitY + this.radius > canvas.height -10 || this.y  - this.radius + this.velocitY < 0) {
        this.velocitY = -this.velocitY;
      }
      this.x += this.velocityX;
      this.y += this.velocitY;
    };

    collisionBall = () => {

        if(this.y >= game.pele.y - this.radius && this.x >= game.pele.x - this.radius && this.x <= (game.pele.x + game.pele.w) - this.radius){
           console.log("la pelotita toca a pele")
           this.isPelotaMovingUp = false; // mueve la pelota hacia abajo
        }

        if((this.y >= game.maradona.y - this.radius && this.x >= game.maradona.x - this.radius && this.x <= (game.maradona.x + game.maradona.w) - this.radius))    {
          console.log("la pelotita toca a maradona")
            this.isPelotaMovingDown = false;
        }    
    }
  }