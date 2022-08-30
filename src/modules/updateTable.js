const leaderboardTable = document.getElementById('leaderboard-table');
const nameInput = document.getElementById('name-input');
const scoreInput = document.getElementById('score-input');

const updateTable = () => {
  leaderboardTable.innerHTML += `
  <tr>
    <td>${nameInput.value}: ${scoreInput.value}</td>       
  </tr>
`;
  nameInput.value = '';
  scoreInput.value = '';
};

export default updateTable;