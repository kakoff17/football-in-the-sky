//console.log("probando");

const startScreen = document.querySelector("#start-screen");
const endScreen = document.querySelector("#restart-screen");
const canvas = document.querySelector("#my-canvas");
const startBtn = document.querySelector("#start-btn");
const restartBtn = document.querySelector("#restart-btn");

const ctx = canvas.getContext("2d");

let game;
// Funciones

const startGame = () => {
  console.log("prueba");

  // Cambiar pantallas
  startScreen.style.display = "none";
  canvas.style.display = "block";

  // Elementos partida
  // Sistema de clases
  game = new Game();
  //console.log(game)

  // Iniciar el bucle.
  game.gameLoop();
};

// Event listeners
startBtn.addEventListener("click", startGame);
window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowUp") {
   // console.log("tocando arrowup");
    game.maradona.maradonaMovement("Up");
  }
  if (event.code === "ArrowLeft") {
   // console.log("tocando arrowleft");
    game.maradona.maradonaMovement("Left");
  }
  if (event.code === "ArrowRight" ) {
   // console.log("tocando arrowright");
    game.maradona.maradonaMovement("Right");
  }
  if (event.code === "ArrowDown") {
   // console.log("tocando arrowdown");
    game.maradona.maradonaMovement("Down");
  }
});

window.addEventListener("keydown", (event) => {
    if (event.code === "KeyW") {
     // console.log("tocando arrowup");
      game.pele.peleMovement("W");
    }
    if (event.code === "KeyA") {
     // console.log("tocando arrowleft");
      game.pele.peleMovement("A");
    }
    if (event.code === "KeyD" ) {
     // console.log("tocando arrowright");
      game.pele.peleMovement("D");
    }
    if (event.code === "KeyS") {
     // console.log("tocando arrowdown");
      game.pele.peleMovement("S");
    }
})