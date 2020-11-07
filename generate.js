const { drawMap, randomCard } = require('./field');
const decks = require('./objects');

const deck = () => {
  const flags = ['♦️', '♣️', '♠️', '♥️'];
  const jokers = ['🃏'];
  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'Q', 'J', 'A'];
  const deck = [];
  for (let i = 0; i < flags.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      deck.push(flags[i] + ranks[j]);
    }
    deck.push(flags[i] + jokers);
  }
  return deck;
};

const deckShuffle = (deck) => {
  for (let i = 0; i < deck.length; i++) {
    const card = deck[i];
    const randomCard = Math.floor(Math.random() * 56);
    deck[i] = deck[randomCard];
    deck[randomCard] = card;
  }
  return deck;
};

module.exports = {
  deck,
  deckShuffle
};
