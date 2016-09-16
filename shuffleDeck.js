
var deck = [];

for (var i = 1; i <= 52; i++) {
  deck.push(i);
}

const shuffleDeck = (deck) => {
  const length = deck.length;
  for (var j = 0; j < length; j++) {
    var randomIndex = j + Math.floor(Math.random() * (length - j));
    var swap = deck[j];
    deck[j] = deck[randomIndex];
    deck[randomIndex] = swap;
  }
  return deck; 
}

// console.log(shuffleDeck(deck));

const shuffleDeckBack = (deck) => {
  var length = deck.length;
  var temp
  var randomIndex

  while (length) {
    randomIndex = Math.floor(Math.random() * length--);
    temp = deck[randomIndex];
    deck[randomIndex] = deck[length];
    deck[length] = temp;
  }
  return deck;
}

console.log(shuffleDeckBack(deck));

// for visualization, see https://bost.ocks.org/mike/shuffle/