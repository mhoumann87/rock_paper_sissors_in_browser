/*
 * A classic Rock, Paper, Sissors game played in the browser.
 * The Computer randomly choses its play, and the player uses buttons to select.
 * This game was made as a part of Web Development 101 on http://theodinproject.com.
 * Made by Michael Houmann
 */

// Connect to all the element
const playerButton = document.querySelectorAll(".btn");
const displayComputerScore = document.querySelector("#computerScore");
const displayPlayerScore = document.querySelector("#playerScore");
const computerPlays = document.querySelector("#computerPlays");
const playerPlays = document.querySelector("#playerPlays");
const playText = document.querySelector("#playText");
const reset = document.querySelector(".reset");

// setup the variables needed for the game
const choices = ["rock", "paper", "sissors"];
const icons = [
  '<i class="far fa-hand-rock"></i><span class="sr-text>Rock</span>',
  '<i class="far fa-hand-paper"></i><span class="sr-text>Paper</span>',
  '<i class="far fa-hand-scissors"><span class="sr-text>Sissors</span></i>'
];
let computerScore = 0;
let playerScore = 0;

function computerPlay() {
  // Math.random() chorrs a number between 0 and 0.99
  // this way there are 33% for each outcome
  const choice = Math.random();
  if (choice < 0.34) {
    return 0;
  } else if (choice < 0.67) {
    return 1;
  } else {
    return 2;
  }
}

function startRound(playerChoice) {
  let comp = parseInt(computerPlay());
  let player = parseInt(playerChoice);
  /*   console.log(player);
  console.log(comp); */
  computerPlays.innerHTML = icons[comp];
  playerPlays.innerHTML = icons[player];
  //Compare the player and computer choice and write the result
  if (player === comp) {
    winner("none", "It is a tie");
  } else if (player === 0) {
    if (comp === 1) {
      winner("comp", "Sorry you lose paper beats rock");
    } else {
      winner("player", "You win rock beats sissors");
    }
  } else if (player === 1) {
    if (comp === 2) {
      winner("comp", "Sorry you lose sissors beats paper");
    } else {
      winner("player", "You win paper beats rock");
    }
  } else {
    if (comp === 0) {
      winner("comp", "Sorry you lose rock beats sissors");
    } else {
      winner("player", "You win sissors beats paper");
    }
  }
}

function winner(win, text) {
  playText.innerText = text;
  if (win === "player") {
    playerScore += 1;
    displayPlayerScore.innerText = playerScore;
  } else if (win === "comp") {
    computerScore += 1;
    displayComputerScore.innerText = computerScore;
  } else {
    return;
  }
}

// Set up eventlistener for the player choice amd play again
playerButton.forEach(btn => {
  btn.addEventListener("click", e => {
    player = e.target.id;
    startRound(player);
  });
});

reset.addEventListener("click", () => {
  computerScore = 0;
  playerScore = 0;
  computerPlays.innerHTML = "";
  playerPlays.innerHTML = "";
  displayComputerScore.innerText = computerScore;
  displayPlayerScore.innerText = playerScore;
  playText.innerText = "";
});

// When the page is loaded, show 0 and 0 in the score
window.onload = ((displayComputerScore.innerText = computerScore),
(displayPlayerScore.innerText = playerScore));
