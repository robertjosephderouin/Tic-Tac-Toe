function startGame() {
  const Game = require('./src/Game');
  const Round = require('./src/Round');
  const Deck = require('./src/Deck');
  const data = require('./src/data').prototypeData;

  const game = new Game();
  const deck = new Deck(data);
  const round = new Round(deck);

  console.log(game.printMessage(deck, round));

  game.printQuestion(round, startGame);
}

startGame();
