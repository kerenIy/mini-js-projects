"use strict";

const againBtn = document.getElementById("again");
const number = document.getElementsByClassName("number");

const checkBtn = document.getElementById("check");
const message = document.getElementById("message");

const score = document.getElementById("score");
const highScore = document.getElementById("highscore");

const body = document.querySelector("body");
const guessNumber = document.getElementById("guess");

let randomNumber = Math.floor(Math.random() * 20);
//console.log("the random number is " + randomNumber);

let newScore = 20;

let highScores = [];
//console.log(randomNumber);

/*window.addEventListener("DOMContentLoaded", function () {
  randomNumber = Math.floor(Math.random() * 20);
  console.log(randomNumber);

  //compareValues(randomNumber);
});
*/

checkBtn.addEventListener("click", function () {
  let myNumber = Number(guessNumber.value);
  //console.log("your number is " + myNumber);

  compareValues(randomNumber, myNumber);
});

function compareValues(randomNumber, myNumber) {
  if (randomNumber < myNumber) {
    message.innerHTML = "Too High :( Try again";
    newScore--;

    score.innerHTML = newScore;
    //console.log("the new score is " + newScore);
  } else if (randomNumber > myNumber) {
    message.innerHTML = "Too Low :( Try again";
    newScore--;

    score.innerHTML = newScore;
    // console.log("the new score is " + newScore);
  } else if (randomNumber === myNumber) {
    winner();
  } else if (myNumber > 20 || myNumber < 0) {
    message.innerHTML = "enter a number between 1 and 20";
  } else if (typeof myNumber === "number") {
    message.innerHTML = "enter a number";
  }
}

function winner() {
  body.style.backgroundColor = "green";
  message.innerHTML = "You guessed right! :)";

  //highScore.innerHTML = randomNumber;
  highScores.push(randomNumber);
  compareHighScore(highScores);

  //console.log("highscore array :" + highScores);
}

againBtn.addEventListener("click", function () {
  reset();
});

function reset() {
  body.style.backgroundColor = "black";
  message.innerHTML = "Start guessing ....";

  newScore = 20;
  score.innerHTML = newScore;

  randomNumber = Math.floor(Math.random() * 20);
  //console.log(randomNumber);

  let myNumber = Number(guessNumber.value);
  //console.log("your number is " + myNumber);

  compareValues(randomNumber, myNumber);
}

function compareHighScore(highScores) {
  let max = 0;

  for (let i = 0; i < highScores.length; i++) {
    max = highScores[0];

    if (max > highScores[i]) {
      max = highScores[0];
    } else if (max < highScores[i]) {
      max = highScores[i];
      //console.log("max is: " + max);
    }
  }

  highScore.innerHTML = max;
}
