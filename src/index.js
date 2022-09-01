import './index.css';
import img from './images/leaderboard_icon.png';
import createGame from './modules/createGame.js';
import refreshPage from './modules/refreshPage.js';
import saveScore from './modules/saveScore.js';

const submitBtn = document.getElementById('submit-btn');
const refreshBtn = document.getElementById('refresh-btn');
const headerContainer = document.getElementById('header-container');
const nameInput = document.getElementById('name-input');
const scoreInput = document.getElementById('score-input');
const notice = document.getElementById('notice');

const icon = new Image();
icon.src = img;
icon.classList.add('icon');
headerContainer.insertBefore(icon, headerContainer.firstChild);

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const gameId = JSON.parse(localStorage.getItem('gameId'));

  if (!gameId) {
    createGame();
  } else {
    saveScore(gameId);
  }
});

refreshBtn.addEventListener('click', (e) => refreshPage(e));

[nameInput, scoreInput].forEach((input) => {
  input.addEventListener('focus', () => {
    notice.innerHTML = '';
  });
});
