/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  var totalValue = 0;
  var handString = hand.reduce(function(a,b){return a+b});
  var count = 0;
  for(var i in hand){
    switch (hand[i]) {
      case "A":
        totalValue+=11;
        break;
      case "K": case "Q": case "J":
        totalValue+=10;
        break;
      default:
        totalValue+=parseInt(hand[i]);
        break;
    }
  }
  if (handString.match(/[A]/)!=null) {
    while(handString.match(/[A]/).length>count && totalValue>21){
      totalValue -= 10;
      count++;
    }
  }
  return totalValue;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
