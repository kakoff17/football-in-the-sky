

const startScreen = document.querySelector("#start-screen");
const endScreen = document.querySelector("#restart-screen")
const canvas = document.querySelector("#my-canvas");
const startBtn = document.querySelector("#start-btn");
const restartBtn = document.querySelector("#restart-btn")

const ctx = canvas.getContext("2d");


// Funciones 

const startGame = () => {
    console.log("prueba");

    // 1. Cambiar pantallas
    startScreen.style.display = "none";
    canvas.style.display = "block"


    // 2. Crear elementos partida
    // sistema de clases
    let game = new Game()
    // console.log(game)


    // 3 Iniciar el bucle.
    game.gameLoop()


}



startBtn.addEventListener("click", startGame);