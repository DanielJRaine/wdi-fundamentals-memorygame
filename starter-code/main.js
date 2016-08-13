console.log("JS file is connected to HTML! Woo!");

var card1 = "queen";
var card2 = "queen";
var card3 = "king";
var card4 = "king";

// if(card1 === card4) {
//  alert("You found a match!");
// }
// else {
//  alert("Sorry, try again");
// };

// Creates game board and populates it with cards
var createBoard = function(numOfCards) {
  var gameBoard = document.getElementById('game-board');
  var cardArray = [];
var cards = [];
  for (i = 1; i <= numOfCards; i++) {
    
cardElement = document.createElement('div');
    cardElement.className = "card";
    gameBoard.appendChild(cardElement);

      if (i%2 === 0) {
      cardArray[i] = "queen";
    } else {
      cardArray[i] = "king";
      cardElement.innerHTML = '<img src="https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwil4ubt977OAhWFsh4KHbESDfQQjRwIBw&url=http%3A%2F%2Fs87.photobucket.com%2Fuser%2FKatlynn_Hanks%2Fmedia%2FCards%2Fqueen-clubs.png.html&psig=AFQjCNFxqt6EACxghChG427QA9tACC3Xuw&ust=1471196409449356" />';
    };
    cardElement.setAttribute('data-card', cardArray[i]);
    cardElement.addEventListener('click', isTwoCards);
  } 

//     if (this.getAttribute('data-card') === "king" {
//         cardElement.innerHTML = '<img src="https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjwncCE-L7OAhUDGx4KHcXAB8oQjRwIBw&url=http%3A%2F%2Fconradaskland.com%2Fblog%2Fking-and-queen-of-hearts-playing-cards%2F&bvm=bv.129422649,d.dmo&psig=AFQjCNE2lvZJUk_qjom61DFDRDoN7iq2wA&ust=1471196457907863" />'
//     } else {
//         cardElement.innerHTML = '<img src="https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwil4ubt977OAhWFsh4KHbESDfQQjRwIBw&url=http%3A%2F%2Fs87.photobucket.com%2Fuser%2FKatlynn_Hanks%2Fmedia%2FCards%2Fqueen-clubs.png.html&psig=AFQjCNFxqt6EACxghChG427QA9tACC3Xuw&ust=1471196409449356" />'
//     };
//  });
  
};

createBoard(4);

var cardsInPlay = [];

// checks to see if the two cards in play are a match
var isMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("match");
  } else {
  alert("try again");
  }
};

// checks to see if there are cards in play
function isTwoCards() {

  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));
  
  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for next try
    cardsInPlay = [];
    
    if (this.getAttribute('data-card') === 'king') {
       this.innerHTML = '<img src="http://www.conradaskland.com/blog/wp-content/uploads/2007/05/king-hearts1.png" />';
    } else {
       this.innerHTML = '<img src="http://www.conradaskland.com/blog/wp-content/uploads/2007/05/queen-hearts1.png" />';
    };

  }

}

