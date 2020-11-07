const decks = require('./decks');

const deck = () => {
  const flags = ['♦️', '♣️', '♠️', '♥️'];
  const jokers = ['🃏'];
  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'Q', 'J', 'A'];
  const deck = [];
  for (let i = 0; i < flags.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      deck.push(flags[i] + ranks[j]);
    }
  }
  return deck;
};

const deckShuffle = (deck) => {
  for (let i = 0; i < deck.length; i++) {
    const card = deck[i];
    const randomCard = Math.floor(Math.random() * 52);
    deck[i] = deck[randomCard];
    deck[randomCard] = card;
  }
  return deck;
};

decks.shuffledDeck = deckShuffle(deck());
decks.orderedDeck = deck();
console.log(decks.orderedDeck);
console.log(decks.shuffledDeck);
