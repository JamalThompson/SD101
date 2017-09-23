function playGuessMyNumber()
{


var totalGuesses = 0;
var secertNumber = Math.round(Math.random()*100+1);
var guess = prompt("guess my number. it's between 1-100");
var divGameResult = document.getElementById("divGameResult");
var guessedIt = false;


while (!guessedIt)  {
  totalGuesses++;


if(parseInt(guess) > secretNumber){
  var guess = prompt("Too high, guess again or type 'Q' to quit.");
}

else if (parseInt(guess) < secretNumber) {
  var guess = prompt("Too low, guess again or type 'Q' to quit.");
}

else if (parseInt(guess)==secretNumber) {
  divGameResult.innerHTML = secretNumber+ "is correct. Total guesses = " +totalGuesses;
  guessedIt = true;

}

else if (guess =="Q") {
  divGameResult.innerHTML = "Quitter! It was " + secretNumber+".   total Guesses = "+totalGuesses;
  break;

}

  else {
    var guess = prompt("Was that a real guess? Guess again or type 'Q' to quit.")
    }
  }
}
