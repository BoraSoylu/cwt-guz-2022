import generateAll from './framework_at_home.js';

fetch('./data.json')
  .then((response) => response.json())
  .then((json) => {
    generateAll(json);
    const body = document.querySelector('body');
    const error_box = document.createElement('div');
    error_box.innerHTML = returnErrorHtml();
    body.appendChild(error_box);
    main();
  });

function main() {
  const calc_btn = document.querySelector('.calc-btn');
  obpAddKeyListener();
  addRowEventListener();
  let rows_valid = true;

  calc_btn.addEventListener('click', () => {
    hideBanners();
    const input_rows = document.querySelectorAll('.input-row');
    input_rows.forEach((row) => {
      if (!correctQuestionInput(row)) {
        rows_valid = false;
      }
    });
    if (!correctObp()) {
      rows_valid = false;
    }
    if (rows_valid) {
      console.log('results calculated');
      calculateResults();
    }
  });
}

function calculateResults() {}

function correctObp() {
  const obp = document.querySelector('.obp-gpa');
  const panel = document.querySelector('.obs-panel');
  const score = Number(obp.value);
  if (score.toString() === 'NaN') {
    const error_box = document.querySelector('error-box');
    if (!panel.childNodes[1].classList.contains('invalid-row')) {
      panel.childNodes[1].classList.toggle('invalid-row');
    }
    errorMessage('Diploma notu bir sayı olmalıdır!');
    return false;
  }
  if (score > 100 || score < 0) {
    const error_box = document.querySelector('error-box');
    if (!panel.childNodes[1].classList.contains('invalid-row')) {
      panel.childNodes[1].classList.toggle('invalid-row');
    }
    errorMessage('Obp 0 ile 100 arasında olmalıdır!');
    return false;
  }
  if (panel.childNodes[1].classList.contains('invalid-row')) {
    panel.childNodes[1].classList.toggle('invalid-row');
  }
  if (document.querySelector('.obp-gpa').value == 0) {
    document.querySelector('.obp-gpa').value = 0;
    document.querySelector('.obp-score').value = 0;
  }
  return true;
}

function correctQuestionInput(row) {
  const q_count = Number(
    row.childNodes[0].childNodes[1].innerText.split(' ')[0]
  );
  const correct = Number(row.childNodes[1].childNodes[0].childNodes[0].value);
  const incorrect = Number(row.childNodes[1].childNodes[1].childNodes[0].value);

  if (correct.toString() === 'NaN' || incorrect.toString() == 'NaN') {
    errorMessage('Girişler sayı olmak zorundadır!');
    invalidRow(row, true);
    return false;
  }

  if (correct === 0) {
    row.childNodes[1].childNodes[0].childNodes[0].value = 0;
  }
  if (incorrect === 0) {
    row.childNodes[1].childNodes[1].childNodes[0].value = 0;
  }

  if (correct < 0 || incorrect < 0) {
    errorMessage('Girişler negatif olamaz!');
    invalidRow(row, true);
    return false;
  }
  if (correct + incorrect > q_count) {
    errorMessage(
      'Doğruların ve yanlışların toplamı soru sayısından büyük olmamalı!'
    );
    invalidRow(row, true);
    return false;
  }

  invalidRow(row, false);
  return true;
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

function errorMessage(string) {
  const error_box = document.querySelector('.banner-message');
  error_box.innerText = string;

  showBanner('.banner.error');
}

function returnErrorHtml() {
  return `<div class="banners-container">
  <div class="banners">
  <div class="banner error">
  <div class="banner-icon"><i data-eva="alert-circle-outline" data-eva-fill="#ffffff" data-eva-height="48" data-eva-width="48"></i></div>
  <div class="banner-message"></div>
  <div class="banner-close" onclick="hideBanners()"><i data-eva="close-outline" data-eva-fill="#ffffff"></i></div>
  </div></div>`;
}

function obpAddKeyListener() {
  const obp = document.querySelector('.obp-gpa');
  const obp_score = document.querySelector('.obp-score');
  obp.addEventListener('input', (e) => {
    if ((e.target.value * 5).toString() !== 'NaN') {
      obp_score.value = e.target.value * 5;
    }
    if (e.target.value == 0) {
      e.target.value = '';
    }
  });

}

function addRowEventListener() {
  const rows = document.querySelectorAll('.subject-box-wrapper');
  const inputs = document.querySelectorAll('input');
  inputs.forEach((input) => {
    input.addEventListener('focus', (e) => {
      if (e.target.value == 0) {
        e.target.value = '';
      }
    });
  });

  rows.forEach((row) => {
    row.childNodes[0].childNodes[0].addEventListener('input', (e) => {
      if ((e.target.value * 5).toString() !== 'NaN') {
        row.childNodes[2].innerText =
          e.target.value - row.childNodes[1].childNodes[0].value;
      }
    });
    row.childNodes[1].childNodes[0].addEventListener('input', (e) => {
      if ((e.target.value * 5).toString() !== 'NaN') {
        row.childNodes[2].innerText =
          row.childNodes[0].childNodes[0].value - e.target.value;
      }
    });
  });
}

// credit: https://codepen.io/brookesb91/pen/KKVWbzq

const showBanner = (selector) => {
  hideBanners();
  // Ensure animation plays even if the same alert type is triggered.
  requestAnimationFrame(() => {
    const banner = document.querySelector(selector);
    banner.classList.add('visible');
  });
};

const hideBanners = (e) => {
  document
    .querySelectorAll('.banner.visible')
    .forEach((b) => b.classList.remove('visible'));
};
