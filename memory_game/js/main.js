console.log ("Up and running!");



var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards [0];
var cardTwo = cards [2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

let flipped = function () {
 for (var i = 0; i < cardsInPlay.length; i++) {
  //  debugger;
   if (cardsInPlay[0] === cardsInPlay [1]){
     return "You found a match!";
    } else {
      return "Sorry, try again.";
    }
  }
}
flipped ();

// Inside of the if statement you created in the last step, create an if...else statement that checks for equality
//between the two cards in the cardsInPlay array.
// For the condition, check to see if the first card in the cardsInPlay array (cardsInPlay[0]) is equal to the second card
// in the cardsInPlay array.
//
// Hint: You'll want to use the === operator here.
