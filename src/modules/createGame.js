import postToApi from './postToApi.js';
import saveScore from './saveScore.js';

const createGame = () => {
  let gameId;
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  postToApi(url, { name: 'my game' })
    .then((games) => {
      [, , , gameId] = games.result.split(' ');
      localStorage.setItem('gameId', JSON.stringify(gameId));
      saveScore(gameId);
    });
};

export default createGame;