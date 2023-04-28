# Football in the sky

## [Play the Game!](https://kakoff17.github.io/football-in-the-sky/)

# Description

The main goal of the game is to play and win a football match. It's a two players game and the characters are Pele and Maradona.


# Main Functionalities

- The game starts when you press the start button.
- The ball starts moving when you press the start button. ¡Take care of this if you dont want start loosing by 1-0!.
- You must move Maradona player by pressing Left, Right, Up and Down arrows of they keyboard.
- You must move Pele player by pressing W, A, S, D keys on the keyboard.
- Maradona and Pele can only reach the center of the field.
- You can listen de song of Maradona while playing the game.
- When the game ends you can see the final score and restart the game.



# Backlog Functionalities

- There is a 60 second timer until the game ends.
- The speed of the ball increases 15% every 12 seconds.
- When a goal is scored, the speed and position of the ball are reset.
- When a goal is scored, maradona and pele position are reset.
- When a player scores a goal, it is added to the scoreboard.
- When a goal is scored there is a message with the name of the scorer.


# Technologies used

- HTML 
- CSS 
- Javascript
- DOM Manipulation
- Canvas
- Local Storage

# States

- Start screen with instructions and start button.
- Game screen with instructions, scoreboard and game screen (canvas).
- End screen with scoreboard and a restart button.

# Proyect Structure

## main.js

- In main.js you can find the game variables, the startgame function and the addEventListeners. 

## Game.js

- Game () {
    this.player;
}

## Player.js 

constructor() {
    this.background = new Image();
    this.background.src = "images/field.png";

    this.pele = new Pele();
    this.maradona = new Maradona();
    this.pelota = new Pelota();
    this.isGameOn = true;
  }

- drawPitch() {}
- collisionBall() {}
- endGame() {}
- checkGoal() {}    
- restartGame(){}
- gameLoop() {}

## Pele.js
  constructor() {    
    this.x = canvas.width / 2 - 25;
    this.y = 20;
    this.img = new Image();
    this.img.src = "images/peleSmall.png";
    this.w = 55;
    this.h = 70;
    this.speed = 20;
  }

- peleDraw(){}
- peleMovement(){}

## Maradona.js
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

- maradonaDraw(){}
- maradonaMovement(){} 


## Pelota.js
  constructor() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.img = new Image();
    this.img.src = "images/pelota.png";
    this.w = 30;
    this.h = 30;
    this.velocity = 0.9;    
    this.isPelotaMovingDown = true;
    this.isPelotaMovingRight = true;
}

- pelotaDraw (){}
- pelotaMovement(){}
- pelotaSpeed (){}

# Extra Links 

## Deploy
[Link](https://kakoff17.github.io/football-in-the-sky/)