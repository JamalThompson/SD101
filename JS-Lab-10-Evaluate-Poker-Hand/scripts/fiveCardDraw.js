const NUMBER_OF_CARDS = 5;

function card(suit, rank) {
  this.suit = suit;
  this.rank = getRankValue(rank);

}


function getRankValue(rank){
  switch(rank){

    case "A" :
    return 14;

    case "K" :
    return 13;

    case "Q" :
    return 12;

    case "J":
    return 11;

default:
return parseInt(rank);



  }
}



function displayResult(){
  document.getElementById('divEvalHand').innerHTML = evalHand();
}



function getCards() {
  var hand = [];


  //create card objects
  for(var n = 0 ; n < NUMBER_OF_CARDS; n++){
    hand[n] = new card(document.getElementById('selectSuit'+ (n+1)).value,document.getElementById('selectRank'+(n+1)).value);


    // for(var n = 1 ; n <= NUMBER_OF_CARDS; n++){
    //   var suit = document.getElementById('selectSuit' + n).value;
    //   var rank = document.getElementById('selectRank'+ n).value;
    //
    //   hand[n] = new card(suit,rank);
  }

return hand;

}




function evalHand(){

var hand = getCards();

var handTallies = new evalBundle();


for(n = 0; n < NUMBER_OF_CARDS; n++){


    handTallies.cardValues[hand[n].rank]++;


  switch(hand[n].suit){
    case "Clubs":
    handTallies.nClubs++;


    break;

    case "Hearts":
      handTallies.nHearts++;

    break;


      case "Diamonds":
        handTallies.nDiamonds++;

        break;


        case "Spades":
          handTallies.nSpades++;



          break;
  }
}
    if(flush(handTallies)){
      return "Flush!";
    }
}


function flush(tallies){
  return tallies.nClubs == NUMBER_OF_CARDS || tallies.nHearts == NUMBER_OF_CARDS || tallies.nDiamonds == NUMBER_OF_CARDS || tallies.nSpades == NUMBER_OF_CARDS;
}

function evalBundle() {
  this.nClubs = 0;
  this.nHearts = 0;
  this.nDiamonds = 0;
  this.nSpades = 0;
  this.cardValues = cardValues = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
}
