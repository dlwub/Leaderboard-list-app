const leaderboardTable = document.getElementById('leaderboard-table');

const populateTable = (array) => {
  leaderboardTable.innerHTML += `
  <tr>
    <td>${array.user}</td>
    <td>${array.score}</td>         
  </tr>
`;
};

export default populateTable;