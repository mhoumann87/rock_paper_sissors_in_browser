/*
 * The computer must randomly choose a play.
 */
function computerPlay() {
  // Math.random() chorrs a number between 0 and 0.99
  // this way there are 33% for each outcome
  const computerChoice = Math.random();
  if (computerChoice < 0.34) {
    return "rock";
  } else if (computerChoice < 0.67) {
    return "paper";
  } else {
    return "sissors";
  }
}

function singleRound(player, computer) {
  // Write the different choises to the console
  console.log("-------------------------------------------");
  console.log("computer choose " + computer);
  console.log("You choose " + player);

  // Compare the player and computer choice and write the result
  if (player === computer) {
    return "It is a tie";
  }
  if (player === "rock") {
    if (computer === "paper") {
      return "Sorry you lose paper beats rock";
    } else {
      return "You win rock beats sissors";
    }
  }
  if (player === "paper") {
    if (computer === "sissors") {
      return "Sorry you lose sissors beats paper";
    } else {
      return "You win paper beats rock";
    }
  }
  if (player === "sissors") {
    if (computer === "rock") {
      return "Sorry you lose rock beats sissors";
    } else {
      return "You win sissors beats paper";
    }
  }
}

// Let the game run 5 times and then end
function game() {
  for (let i = 0; i < 5; i++) {
    const playerChoice = prompt("Enter your choice").toLowerCase();
    const computerChoice = computerPlay();
    console.log(singleRound(playerChoice, computerPlay()));
  }
}

// Start the game
game();
