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
      setResults(calculateResults());
    }
  });

  let clr_btn = document.querySelector('.clear-btn');
  let nets = document.querySelectorAll('.net');
  let result_displays = document.querySelectorAll('.result-display');
  clr_btn.addEventListener('click', () => {
    console.log('click');
    const all_input = document.querySelectorAll('input');
    all_input.forEach((input) => {
      input.value = null;
    });
    nets.forEach((net) => {
      net.innerText = '-';
    });
    result_displays.forEach((result_display) => {
      result_display.innerText = '-';
    });
    let errors = document.querySelectorAll('.invalid-row');
    errors.forEach((error) => {
      error.classList.remove('invalid-row');
    });
    hideBanners();
  });
}

function calculateResults() {
  const gpa = document.querySelector('.obp-gpa');
  const lower_score = document.querySelector('.obp-checkbox').checked;
  let gpa_score = lower_score ? gpa.value * 0.3 : gpa.value * 0.6;

  // calc tyt scores
  const tyt_nets = document.querySelectorAll('.tyt-net');
  let tyt_ham = 0;
  tyt_nets.forEach((net) => {
    if (net.innerText === '-') {
      net.innerText = 0;
    }
    tyt_ham += Number(net.innerText) * 5;
  });
  let tyt_yer = tyt_ham + gpa_score;

  //calc ayt sayisal scores
  const ayt_say_nets = document.querySelectorAll('.say-net');
  let ayt_say_ham = 0;
  ayt_say_nets.forEach((net) => {
    if (net.innerText === '-') {
      net.innerText = 0;
    }
    ayt_say_ham += Number(net.innerText) * 6.25;
  });
  let ayt_say_yer = ayt_say_ham * 0.6 + tyt_ham * 0.4;
  ayt_say_yer = ayt_say_yer + gpa_score;

  //calc ayt sayisal scores
  const ayt_soz_nets = document.querySelectorAll('.soz-net');
  let ayt_soz_ham = 0;
  ayt_soz_nets.forEach((net) => {
    if (net.innerText === '-') {
      net.innerText = 0;
    }
    ayt_soz_ham += Number(net.innerText) * 6.25;
  });
  let ayt_soz_yer = ayt_say_ham * 0.6 + tyt_ham * 0.4;
  ayt_soz_yer = ayt_soz_yer + gpa_score;

  let ayt_mat_net = document.querySelector('.ayt-mat');
  let ayt_ea_ham = (ayt_soz_ham + 12.5 * ayt_mat_net.innerText) * 0.5;
  let ayt_ea_yer = ayt_soz_yer + gpa_score;
  // return {
  //   tyt_raw: tyt_ham,
  //   tyt_end: tyt_yer,
  //   say_raw: ayt_say_ham,
  //   say_end: ayt_say_yer,
  //   soz_raw: ayt_soz_ham,
  //   soz_end: ayt_soz_yer,
  //   ea_raw: ayt_ea_ham,
  //   ea_end: ayt_ea_yer,
  // };
  return [
    tyt_ham,
    tyt_yer,
    ayt_say_ham,
    ayt_say_yer,
    ayt_soz_ham,
    ayt_soz_yer,
    ayt_ea_ham,
    ayt_ea_yer,
  ];
}

function setResults(results) {
  let display = document.querySelectorAll('.result-display');
  for (let i = 0; i < display.length; i++) {
    display[i].innerText = results[i];
  }
  console.log(display);
}

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
