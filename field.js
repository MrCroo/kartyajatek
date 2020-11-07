const { table, getBorderCharacters } = require('table');
const objects = require('./objects');

const height = 3;
const weidth = 3;

const map = (height, weidth) => {
  const arr = new Array(weidth);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(height);
  }
  return arr;
};

const fillMap = (src) => {
  for (let i = 0; i < src.length; i++) {
    for (let j = 0; j < src[i].length; j++) {
      src[i][j] = ' ';
    }
  }
  src[0][1] = objects.player1;
  src[1][0] = objects.player2;
  src[1][2] = objects.player3;
  src[2][1] = objects.player4;
  src[1][1] = objects.middleRow;
  return src;
};

const drawMap = () => {
  const draw = table(fillMap(map(height, weidth)), {
    border: getBorderCharacters('void'),
    columnDefault: {
      paddingLeft: 10,
      paddingRight: 0,
      height: 0
    },
    drawHorizontalLine: () => {
      return false;
    }
  });
  console.log(draw);
};

const randomCard = () => {
  for (let i = 0; i < 4; i++) {
    objects.player1 += objects.shuffledDeck.pop();
    objects.player2 += objects.shuffledDeck.pop();
    objects.player3 += objects.shuffledDeck.pop();
    objects.player4 += objects.shuffledDeck.pop();
  }
};

module.exports = {
  randomCard,
  drawMap
};
