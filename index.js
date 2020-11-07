const decks = require('./objects');
const gen = require('./generate');
const { drawMap, randomCard } = require('./field');

decks.orderedDeck = gen.deck();
decks.shuffledDeck = gen.deckShuffle(gen.deck());
randomCard();
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
const button = (key) => {
  if (key === 'q') {
    console.clear();
    process.stdin.removeAllListeners('data');
    process.stdin.removeAllListeners('keypress');
    process.stdin.setRawMode(false);
    process.stdin.end();
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding('utf8');
    stdin.on('data', button);
    process.exit(0);
  }
};
setInterval(() => {
  console.clear();
  drawMap();
}, 1000);
stdin.setEncoding('utf8');
stdin.on('data', button);
