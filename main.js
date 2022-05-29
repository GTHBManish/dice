// player1 dice settings
let player1 = document.querySelector(".img1");
let randomNumber = Math.floor(Math.random() * 6 + 1);
let player1Result = player1.setAttribute(
  "src",
  `images/dice${randomNumber}.png`
);
// player2 dice settings
let player2 = document.querySelector(".img2");
let randomNumber2 = Math.floor(Math.random() * 6 + 1);
let player2Result = player2.setAttribute(
  "src",
  `images/dice${randomNumber2}.png`
);
// changing the refresh me heading according to the dice
let result = document.querySelector(".container h1");
if (randomNumber > randomNumber2) {
  result.textContent = "Player 1 Wins!";
} else if (randomNumber < randomNumber2) {
  result.textContent = "Player 2 Wins!";
} else {
  result.textContent = "Draw!";
}
