generateNumbers();
hideAll();
showClicked('111');
addEventListerners();
handleTab('111')

function addEventListerners() {
  const tabs = document.querySelectorAll('.tab');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      hideAll();
      showClicked(tab.classList[1]);
      handleTab(tab.classList[1].slice(-3));
      console.log();
    });
  });
}

function handleClick() {}
/**
 *
 * @param {string} c class of numbers wrapper to show ex: '111'
 */
function showClicked(c) {
  let className = c.slice(-3); // => "Tabs1"
  const tab = document.querySelector(`.container-${className}`);

  tab.style.display = 'grid';
}

function hideAll() {
  const numbers = document.querySelectorAll('.number-container');
  numbers.forEach((number) => {
    number.style.display = 'none';
  });
}

function handleTab(tabClass) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach((tab) => {
    tab.classList.remove('tab-clicked');
  });
  document.querySelector(`.tab-${tabClass}`).classList.add(`tab-clicked`);
}

function generateNumbers() {
  const tab = document.querySelector('.numbers-wrapper');
  let numbers = ['111', '222', '333', '444'];
  numbers.forEach((number) => {
    const numberConainer = document.createElement('div');
    numberConainer.classList.add('number-container');
    numberConainer.classList.add('container-' + number);
    for (let index = 0; index < 11 * 13; index++) {
      const e = document.createElement('div');
      e.innerText = number;
      e.classList.add(`asd-${number}`);
      e.classList.add('number');
      numberConainer.appendChild(e);
    }
    tab.appendChild(numberConainer);
  });
}
