const choice = document.querySelectorAll(".choice");
const displayWinner = document.querySelector(".displayWinner");
const UserScore = document.querySelector("#userScore");
const ComputerScore = document.querySelector("#computerScore");

let userScore = 0;
let computerScore = 0;

const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    userScore++;
    UserScore.innerText = userScore;
    displayWinner.style.backgroundColor = "#046804ff";
    displayWinner.innerText = `Your Win. your ${userChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    ComputerScore.innerText = computerScore;
    displayWinner.style.backgroundColor = "#c01111ff";
    displayWinner.innerText = `You Lost. ${computerChoice} beats your ${userChoice}`;
  }
};

const playGame = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    displayWinner.innerText = "Game draw";
    displayWinner.style.backgroundColor = "#ef8282";
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = computerChoice === "scissor" ? false : true;
    } else if (userChoice === "scissor") {
      userWin = computerChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, computerChoice);
  }
};

const computerChoiceFn = () => {
  const choiceArr = ["rock", "paper", "scissor"];
  const random = Math.floor(Math.random() * 3);
  return choiceArr[random];
};

choice.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    const computerChoice = computerChoiceFn();
    playGame(userChoice, computerChoice);
  });
});
