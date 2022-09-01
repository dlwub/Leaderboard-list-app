const nameInput = document.getElementById('name-input');
const scoreInput = document.getElementById('score-input');

const clearFields = () => {
  nameInput.value = '';
  scoreInput.value = '';
};

export default clearFields;