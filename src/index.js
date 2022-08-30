import './index.css';
import updateTable from './modules/updateTable.js';

const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  updateTable();
});