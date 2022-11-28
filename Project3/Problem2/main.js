import generateAll from './framework_at_home.js';

fetch('./data.json')
  .then((response) => response.json())
  .then((json) => {
    generateAll(json);
    main();
  });

function correctQuestionCount(row) {
  const q_count = Number(
    row.childNodes[0].childNodes[1].innerText.split(' ')[0]
  );
  const correct = Number(row.childNodes[1].childNodes[0].childNodes[0].value);
  const incorrect = Number(row.childNodes[1].childNodes[1].childNodes[0].value);

  if (correct + incorrect > q_count) {
    invalidRow(row, true);
    return true;
  } else if (correct + incorrect <= q_count) {
    invalidRow(row, false);
  }
  return false;
}

function invalidRow(row, invalid) {
  if (invalid) {
    if (!row.childNodes[1].classList.contains('invalid-row')) {
      row.childNodes[1].classList.toggle('invalid-row');
    }
  } else {
    if (row.childNodes[1].classList.contains('invalid-row')) {
      row.childNodes[1].classList.toggle('invalid-row');
    }
  }
}

function main() {
  const calc_btn = document.querySelector('.calc-btn');
  calc_btn.addEventListener('click', () => {
    correctQuestionCount(document.querySelector('.row-id0'));
  });
}
