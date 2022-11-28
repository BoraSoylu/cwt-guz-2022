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

  let rows_valid = true;

  calc_btn.addEventListener('click', () => {
    hideBanners();
    const input_rows = document.querySelectorAll('.input-row');
    input_rows.forEach((row) => {
      if (!correctQuestionCount(row)) {
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
  console.log(obp);
  const score = Number(obp.value);
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
  return true;
}

function correctQuestionCount(row) {
  const q_count = Number(
    row.childNodes[0].childNodes[1].innerText.split(' ')[0]
  );
  const correct = Number(row.childNodes[1].childNodes[0].childNodes[0].value);
  const incorrect = Number(row.childNodes[1].childNodes[1].childNodes[0].value);

  if (correct + incorrect > q_count) {
    errorMessage(
      'Doğruların ve yanlışların toplamı soru sayısından büyük olmamalı!'
    );
    invalidRow(row, true);
    return false;
  } else if (correct + incorrect <= q_count) {
    invalidRow(row, false);
  }
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

function alertUser(message) {
  const body = document.queryCommandIndeterm;
}

// credit: https://codepen.io/brookesb91/pen/KKVWbzq

// Pssst, I've created a github package - https://github.com/brookesb91/dismissible

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
