class Game {
  constructor() {
    this.background = new Image();
    this.background.src = "images/field.png";

    this.pele = new Pele();
    this.maradona = new Maradona();
    this.pelota = new Pelota();
    this.isGameOn = true;
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

  endGame = () => {
    // 1. Detener el juego
    this.isGameOn = false;

    // 2. Ocultar el canvas
    canvas.style.display = "none";

    // 3. Mostramos la pantalla final
    endGame.style.display = "flex";
    // ocultar marcador
    timerEl.style.display = "none";
    // mostrar el boton de restart
    restartBtn.style.display = "block";

    //quitar las teclas al final del partido
    instructionsBox.style.display = "none";

    // quitar el mensaje de goles
    goalMessage.style.display = "none";

  };

 checkGoal = () => {
    if (this.pelota.y + this.pelota.h > canvas.height) {
      document.getElementById("goal").textContent = "Gol de Pele";
      this.pelota.y = canvas.height - this.pelota.h;
      this.pelota.isPelotaMovingDown = false;
      // apunta un gol a Pele en la tabla
      const peleGoal = document.getElementById("pele-goals");
      peleGoal.textContent = parseInt(peleGoal.textContent) + 1;
      this.restartGame();
    } else if (this.pelota.y - this.pelota.h < 0) {
      document.getElementById("goal").textContent = "Gol de Maradona";
      this.pelota.y = this.pelota.h;
      this.pelota.isPelotaMovingDown = true;
      // apunta un gol a Maradona en la tabla
      const maradonaGoal = document.getElementById("maradona-goals");
      maradonaGoal.textContent = parseInt(maradonaGoal.textContent) + 1;
      this.restartGame();
    }
  };

  restartGame = () => {
    // Reinicia posicion pelota
    this.pelota.x = canvas.width / 2 - this.pelota.w / 2;
    this.pelota.y = canvas.height / 2 - this.pelota.h / 2;
    this.pelota.velocity = 0.85;
  
    // Reinicia posicion jugadores
    this.pele.x = canvas.width / 2 - this.pele.w / 2;
    this.pele.y = 20;  
    this.maradona.x = canvas.width / 2 - this.maradona.w / 2;
    this.maradona.y = 525;
  };

 
  gameLoop = () => {
    //console.log("probando ejecución")

    // acciones y movimientos elementos
    this.pelota.pelotaMovement();
    this.collisionBall();
    this.checkGoal();

    // dibujando los elementos
    this.drawPitch();
    this.pele.peleDraw();
    this.maradona.maradonaDraw();
    this.pelota.pelotaDraw();

    // Recursion
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}

