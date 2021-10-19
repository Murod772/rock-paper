console.log("Hello");

// we need var that will store player input
let playerInput = "";

// we need var that will store computer player input


// we need var that will store output?
let gameWon = false;

// create boolean for computer rock paper scissors
let compRock = false;
let compPaper = false;
let compScissors = false;

// create booleans for player
let playerRock = false;
let playerPaper = false;
let playerScissors = false;

// create var that will run function that will generate random number between 0 and 2


//lets create gameMode where other functions can run
function gameMode() {

        computerPlay();
        askPlayer();
        assignPlayerInput();
        compare()
}

// console.log(randomNumber);
// computerPlay();

// create function that will generate 3 different strings "rock" "paper" "scissors" based on random number
function computerPlay() {
    let randomNumber = (function getRandomInt(){
        return Math.floor(Math.random() * 3);
    })();

    if (randomNumber == 0) {
        compRock = true;
        console.log("THIS IS COMP ROCK " + compRock);
    }
    else if (randomNumber == 1) {
        compPaper = true;
        console.log("THIS IS COMP PAPER " + compPaper);
    }
    else {
        compScissors = true;
        console.log("THIS IS COMP SCISSORS " + compScissors);
    }
}

// create function that will ask player for input shortened r - rock p - paper s - scissors
function askPlayer() {
    let promptQuestion = "Please choose r for rock, p for paper or s for scissors"
    playerInput = prompt(promptQuestion);
    console.log(playerInput);
}

// create a function that will define what does user input means
function assignPlayerInput() {
    if (playerInput == "r") {
        playerRock = true;
        console.log("THIS IS ROCK " + playerRock);
    }
    else if (playerInput == "p") {
        playerPaper = true;
        console.log("THIS IS PAPER " + playerPaper);
    }
    else if (playerInput == "s"){
        playerScissors = true;
        console.log("THIS IS SCISSORS " + playerScissors);
    }
    // else {
    //     alert("I didn't get it let's try again")
    //     askPlayer();
    // }
}


// create function that will compare player and computer values
function compare() {
    if ((playerRock && compRock) || (playerScissors && compScissors) || (playerPaper && compPaper)) {
        console.log(playerRock, playerPaper, playerScissors, compRock, compPaper, compScissors);
        alert("Tie, try again");
        console.log("Tie, try again");
        endGame()
    }
    else if ((playerScissors && compPaper) || (playerRock && compScissors) || (playerPaper && compRock)) {
        alert("You won");
        console.log("You won");
        endGame()
    }
    else {
        console.log("You lost");
        alert("You lost")
        endGame()
    }      
}

gameMode()
// create function that will define who won
// print who won
// end the game function 
function endGame() {
    compRock = false;
    compPaper = false;
    compScissors = false;

    // create booleans for player
    playerRock = false;
    playerPaper = false;
    playerScissors = false;
}