import './index.css';
import clearFields from './modules/clearFields.js';
import getFromApi from './modules/getFromApi.js';
import populateTable from './modules/populateTable.js';
import postToApi from './modules/postToApi.js';

const submitBtn = document.getElementById('submit-btn');
const refreshBtn = document.getElementById('refresh-btn');
const nameInput = document.getElementById('name-input');
const scoreInput = document.getElementById('score-input');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let gameId = JSON.parse(localStorage.getItem('gameId'));
  let url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const data = {
    user: nameInput.value,
    score: parseInt(scoreInput.value, 10),
  };

  if (!gameId) {
    postToApi(url, { name: 'my game' })
      .then((games) => {
        [, , , gameId] = games.result.split(' ');
        localStorage.setItem('gameId', JSON.stringify(gameId));
        url = `${url}${gameId}/scores/`;
        postToApi(url, data);
      });
  } else {
    url = `${url}${gameId}/scores/`;
    postToApi(url, data);
  }
  clearFields();
});

refreshBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const gameId = JSON.parse(localStorage.getItem('gameId'));
  if (gameId) {
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/'
  + `${gameId}/scores/`;
    getFromApi(url).then((scores) => {
      document.getElementById('leaderboard-table').innerHTML = '';
      scores.result.forEach(populateTable);
    });
  }
});
