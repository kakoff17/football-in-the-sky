class Game {
  constructor() {
    this.background = new Image();
    this.background.src = "images/field.png";

    this.pele = new Pele();
    this.maradona = new Maradona();
    this.pelota = new Pelota();
  }

  drawPitch = () => {
    ctx.drawImage(
      this.background,
      -10,
      -10,
      canvas.width + 20,
      canvas.height + 23
    );
  };

  collisionBall = () => {
    if (
      this.pelota.x < this.pele.x + this.pele.w &&
      this.pelota.x + this.pelota.w > this.pele.x &&
      this.pelota.y < this.pele.y + this.pele.h - 10 &&
      this.pelota.h + this.pelota.y > this.pele.y
    ) {
      //console.log("la pelotita toca a pele");

      // cambia la direccion
      this.pelota.isPelotaMovingDown = true;
    }

    if (
      this.pelota.x < this.maradona.x + this.maradona.w &&
      this.pelota.x + this.pelota.w > this.maradona.x &&
      this.pelota.y < this.maradona.y + this.maradona.h - 30 &&
      this.pelota.h + this.pelota.y - 20 > this.maradona.y
    ) {
      //console.log("la pelotita toca a maradona");

      // cambia la direccion
      this.pelota.isPelotaMovingDown = false;
    }
  };

  gameLoop = () => {
    //console.log("probando ejecución")

    // limpieza

    // acciones y movimientos elementos
    this.pelota.pelotaMovement();
    this.collisionBall();
    //this.pelota.restartOnCollision();

    // dibujando los elementos
    this.drawPitch();
    this.pele.peleDraw();
    this.maradona.maradonaDraw();
    this.pelota.pelotaDraw();

    // Recursion
    requestAnimationFrame(this.gameLoop);
  };
}
