var boolImageCycle = true;
var random;
var nPlayerWins = 0;
var nCpuWins = 0;

window.onload = function() {
     setInterval(changeCompChoice, 100);
};


function changeCompChoice() {

    if (boolImageCycle) {
        random = Math.round(Math.random() * 4 + 1, 0);
        imgCpuChoice.src = getImagePath(random);
    }
}

function playerChose(playerNum) {
if (!boolImageCycle) {
  return;
}
var imagePlayerChoice = document.getElementById("imgPlayerChoice");
var messageDeclareWinner = document.getElementById("declareWinner");
imagePlayerChoice.src = getImagePath(playerNum);
boolImageCycle = false;

if (random ==playerNum) {
    messageDeclareWinner.innerHTML = "Click&rarr; Push...Go Again.. &larr;Click";
}

else if (random == 1 && playerNum == 2) {
  messageDeclareWinner.innerHTML = "Click&rarr; Paper covers rock! You win! &larr;Click";
  }

  else if (random == 1 && playerNum == 3) {
    messageDeclareWinner.innerHTML = "Click&rarr; Rock crushes Scissors.. you lose. &larr;Click";

  }

  else if (random == 1 && playerNum == 4) {
    messageDeclareWinner.innerHTML = "Click&rarr; Rock crushes lizard.. you lose. &larr;Click";

  }

  else if (random == 1 && playerNum == 5) {
    messageDeclareWinner.innerHTML = "Click&rarr; Spock vaporizes rock! You win! &larr;Click";

  }


  else if (random == 2 && playerNum == 1) {
    messageDeclareWinner.innerHTML = "Click&rarr; Paper covers rock!... you lose. &larr;Click";

  }


  else if (random == 2 && playerNum == 3) {
    messageDeclareWinner.innerHTML = "Click&rarr; Scissors cut paper! You win! &larr;Click";

  }

  else if (random == 2 && playerNum == 4) {
    messageDeclareWinner.innerHTML = "Click&rarr; Lizard eats paper! You win! &larr;Click";

  }

  else if (random == 2 && playerNum == 5) {
    messageDeclareWinner.innerHTML = "Click&rarr; Paper disproves Spock.. you lose. &larr;Click";

  }

  else if (random == 3 && playerNum == 1) {
    messageDeclareWinner.innerHTML = "Click&rarr; Rock crushes Scissors You win! &larr;Click";

  }

  else if (random == 3 && playerNum == 2) {
    messageDeclareWinner.innerHTML = "Click&rarr; Scissors cut paper.. ypu lode. &larr;Click";

  }

  else if (random == 3 && playerNum == 4) {
    messageDeclareWinner.innerHTML = "Click&rarr; Scissors decapitates lizard.. you lose. &larr;Click";

  }

  else if (random == 4 && playerNum == 1) {
    messageDeclareWinner.innerHTML = "Click&rarr; Rock crushes lizard You win! &larr;Click";

  }

  else if (random == 4 && playerNum == 2) {
    messageDeclareWinner.innerHTML = "Click&rarr; Lizard eats paper... you lose. &larr;Click";

  }

  else if (random == 4 && playerNum == 3) {
    messageDeclareWinner.innerHTML = "Click&rarr; Scissors decapitates lizard. You win! &larr;Click";

  }

  else if (random == 4 && playerNum == 5) {
    messageDeclareWinner.innerHTML = "Click&rarr; Lizard poisons Spock... you lose. &larr;Click";

  }

  else if (random == 5 && playerNum == 1) {
    messageDeclareWinner.innerHTML = "Click&rarr; Spock vaporizes rock... you lose. &larr;Click";

  }

  else if (random == 5 && playerNum == 2) {
    messageDeclareWinner.innerHTML = "Click&rarr; Paper disproves Spock You win! &larr;Click";

  }

  else if (random == 5 && playerNum == 3) {
    messageDeclareWinner.innerHTML = "Click&rarr; Spock smashes scissors... you lose. &larr;Click";

  }

  else if (random == 5 && playerNum == 4) {
    messageDeclareWinner.innerHTML = "Click&rarr; Lizard poisons spock you win! &larr;Click";

  }









}

function playAgain(){
boolImageCycle = true;

var imagePlayerChoice = document.getElementById("imgPlayerChoice");
var messageDeclareWinner = document.getElementById("declareWinner");
imgPlayerChoice.src = "images/userDefault.jpg";
messageDeclareWinner.innerHTML = "&darr;Make a choice below&darr;"

document.getElementById("playerScore").innerHTML = "Player -"+nPlayerWins;
document.getElementsById("cpuScore").innerHTML = "Computer - "+nCpuWins;
messageDeclareWinner.style.border = "2px solid green";

}

function getImagePath(num){

      switch (num) {
          case 1:
              return "images/rock.jpg";
          case 2:
              return "images/paper.jpg";
          case 3:
              return "images/scissors.jpg";
          case 4:
              return "images/lizard.jpg";
          case 5:
              return "images/spock.jpg";
      }
}
