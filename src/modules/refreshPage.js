import getFromApi from './getFromApi.js';
import populateTable from './populateTable.js';

const refreshPage = (e) => {
  e.preventDefault();
  const gameId = JSON.parse(localStorage.getItem('gameId'));
  if (gameId) {
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/'
  + `${gameId}/scores/`;
    getFromApi(url).then((scores) => {
      document.getElementById('leaderboard-table').innerHTML = `
      <tr>
        <th>Player</th>
        <th>Score</th>
      </tr>
      `;
      scores.result.forEach(populateTable);
    });
  }
};

export default refreshPage;