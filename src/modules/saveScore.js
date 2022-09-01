import clearFields from './clearFields.js';
import postToApi from './postToApi.js';

const nameInput = document.getElementById('name-input');
const scoreInput = document.getElementById('score-input');
const notice = document.getElementById('notice');

const saveScore = (gameId) => {
  let url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  url = `${url}${gameId}/scores/`;
  const name = nameInput.value; const
    score = scoreInput.value;

  if (name && score) {
    const data = {
      user: name,
      score: parseInt(score, 10),
    };
    postToApi(url, data);
    clearFields();
  } else {
    notice.innerHTML = 'Please fill all required fields.';
  }
};

export default saveScore;