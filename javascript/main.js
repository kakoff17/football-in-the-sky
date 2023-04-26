//console.log("probando");

const startScreen = document.querySelector("#start-screen");
const endScreen = document.querySelector("#end-screen");
const canvas = document.querySelector("#my-canvas");
const startBtn = document.querySelector("#start-btn");
const marcador = document.querySelector(".marcador");
const restartBtn = document.querySelector("#restart-btn");
const winnerPele = document.querySelector("#winner-pele");
const winnerMaradona = document.querySelector("#winner-maradona");
const draw = document.querySelector("#draw");
const instructionsBox = document.querySelector(".instructions")


//audio
const myAudio = document.getElementById("audio");
myAudio.volume = 0.05;

const ctx = canvas.getContext("2d");
let game;

//variables timer
const timerEl = document.getElementById("timer");
const temporizador = document.getElementById("time");

let remainingTime = 5;

// Funciones

const startGame = () => {
  //console.log("prueba");

  // Cambiar pantallas
  startScreen.style.display = "none";  
  canvas.style.display = "block";
  marcador.style.display = "table";
  timerEl.style.display = "block";
  audio.style.display = "block";

  // Elementos partida
  // Sistema de clases
  game = new Game();
  //console.log(game)

  //TIMER
  const timer = setInterval(() => {
    remainingTime--;
    if (remainingTime === 0) {
      clearInterval(timer);
      // detiene el juego
      game.endGame();
      // cambia a la endScreen
      canvas.style.display = "none";
      //quitar las teclas al final del partido
      instructionsBox.style.display = "none";
    } else {
      temporizador.innerText = remainingTime.toString();
    }
  }, 1000);

  // Iniciar el bucle.
  game.gameLoop();
};


// Event listeners
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);

window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowUp") {
    // console.log("tocando arrowup");
    game.maradona.maradonaMovement("Up");
  }
  if (event.code === "ArrowLeft") {
    // console.log("tocando arrowleft");
    game.maradona.maradonaMovement("Left");
  }
  if (event.code === "ArrowRight") {
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
  if (event.code === "KeyD") {
    // console.log("tocando arrowright");
    game.pele.peleMovement("D");
  }
  if (event.code === "KeyS") {
    // console.log("tocando arrowdown");
    game.pele.peleMovement("S");
  }
});

