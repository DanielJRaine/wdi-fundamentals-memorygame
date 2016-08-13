console.log("JS file is connected to HTML! Woo!");

var card1 = "queen";
var card2 = "queen";
var card3 = "king";
var card4 = "king";

// if(card1 === card4) {
// 	alert("You found a match!");
// }
// else {
// 	alert("Sorry, try again");
// };

var createBoard = function(numOfCards) {
	var gameBoard = document.getElementById('game-board');
	var cardArray = [];
	for (i = 1; i < numOfCards; i++) {
		cardArray[i] = document.createElement('div');
		cardArray[i].className = "card";
		document.className('board').appendChild(cardArray[i]);
	}	
}

createBoard(4);