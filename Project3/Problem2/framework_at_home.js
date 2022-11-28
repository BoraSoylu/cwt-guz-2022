/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* https://knowyourmeme.com/memes/we-have-food-at-home */
/* 
Why spend 20 minutes doing something when you can 
fail to automate it for 10 hours?
                              -Ancient proverb
*/

/* Boxes:
    Correct checkmark icon - ok-icon
    Incorrect croos icon - cross-icon
    Net text label - net-icon
    Correct answers input box - correct
    Incorrect answers input box - incorrect
    Net answers input box  - net
    GPA input box - gpa
    OBP display box - obp
    TYT raw display box - tyt_raw
    TYT end display box - tyt_end
    SAY raw display box - say_raw
    SAY end display box - say_end
    EA raw display box - ea_raw
    EA end display box - ea_end
    SOZ raw display box - SOZ_raw
    SOZ end display box - SOZ_end
    */
const BoxTypes = Object.freeze({
  ok_icon: ['i', ['material-icons'], 'check'],
  cross_icon: ['i', ['material-icons'], 'close'],
  net_icon: ['div', ['net-icon'], 'Net'],
  correct: ['input', ['correct'], '-'],
  incorrect: ['input', ['incorrect'], '-'],
  net: ['p', ['net'], '-'],
  obp_gpa: ['input', ['obp-gpa'], '-'],
  obp_score: ['p', ['obp-score'], '-'],
  tyt_raw: ['p', ['tyt-raw'], '-'],
  tyt_end: ['p', ['tyt-end'], '-'],
  say_raw: ['p', ['say-raw'], '-'],
  say_end: ['p', ['say-end'], '-'],
  ea_raw: ['p', ['ea-raw'], '-'],
  ea_end: ['p', ['ea-end'], '-'],
  soz_raw: ['p', ['SOZ-raw'], '-'],
  soz_end: ['p', ['SOZ-end'], '-'],
  obp_checkbox: ['input', ['obp-checkbox'], ''],
});

const panelClasses = ['col-12', 'col-lg-6'];

export default function generateAll(panels) {
  const root = document.querySelector('#root');

  // const title = document.createElement('h1');
  // title.textContent = '2023 YKS, TYT, AYT Puan Hesaplama';
  // title.classList.add('title');
  // title.classList.add('col-12');
  // root.appendChild(title);

  // const wrapper = document.createElement('div');
  // wrapper.classList.add('panels');
  // wrapper.classList.add('row');
  panels.forEach((element) => {
    const panel = generateExamPanelBlock(element);
    root.appendChild(panel);
  });
  // root.appendChild(wrapper);
}

function generateExamPanelBlock(panel) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('panel');

  panelClasses.forEach((element) => {
    wrapper.classList.add(element);
  });

  const panelTitle = document.createElement('h2');
  panelTitle.innerHTML = `<b>${panel.panel_name}</b> Puanı Hesaplama`;
  panelTitle.classList.add('panel-title');
  wrapper.appendChild(panelTitle);

  const headerIconsWrapper = document.createElement('div');
  headerIconsWrapper.classList.add('header-icons-wrapper');
  headerIconsWrapper.appendChild(generateBox(BoxTypes.ok_icon));
  headerIconsWrapper.appendChild(generateBox(BoxTypes.cross_icon));
  headerIconsWrapper.appendChild(generateBox(BoxTypes.net_icon));
  wrapper.appendChild(headerIconsWrapper);

  panel.fields.forEach((element) => {
    wrapper.appendChild(generateFieldBlock(element));
  });

  return wrapper;
}

function generateFieldBlock(field) {
  const wrapper = document.createElement('div');

  const fieldName = document.createElement('p');
  fieldName.innerText = field.field_name;
  fieldName.classList.add('field-name');
  wrapper.appendChild(fieldName);

  wrapper.classList.add('field-wrapper');
  if (field.soz === true) {
    wrapper.classList.add('soz');
  }
  if (field.say === true) {
    wrapper.classList.add('say');
  }
  field.subjects.forEach((subject) => {
    wrapper.appendChild(generateSubjectRow(subject));
  });

  return wrapper;
}

function generateSubjectRow(subject) {
  const wrapper = document.createElement('div');

  wrapper.classList.add('subject-row');
  wrapper.classList.add(`row-id${subject.subject_id}`);

  wrapper.appendChild(generateSubjectNameAndQCount(subject));
  wrapper.appendChild(generateSubjectBoxes(subject));

  return wrapper;
}

function generateSubjectNameAndQCount(subject) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('subject-name-q-wrapper');

  const subjectName = document.createElement('p');
  subjectName.textContent = subject.subject_name;
  subjectName.classList.add('subject-name');
  wrapper.appendChild(subjectName);

  const questionCount = document.createElement('p');
  questionCount.textContent = subject.question_count + ' soru';
  questionCount.classList.add('subject-q-count');
  wrapper.appendChild(questionCount);

  return wrapper;
}

function generateSubjectBoxes(subject) {
  const wrapper = document.createElement('div');

  wrapper.classList.add('subject-box-wrapper');

  wrapper.appendChild(generateBox(BoxTypes.correct, subject.subject_id));
  wrapper.appendChild(generateBox(BoxTypes.incorrect, subject.subject_id));
  wrapper.appendChild(generateBox(BoxTypes.net, subject.subject_id));

  return wrapper;
}

function generateBox(type, boxId) {
  const [elementType, cssClasses, textContent] = type;

  

  const box = document.createElement(elementType);

  cssClasses.forEach((element) => {
    box.classList.add(element);
  });
  box.classList.add('generic-box');

  if (boxId !== null) {
    box.classList.add(`box-id-${boxId}`);
  }

  box.textContent = textContent;

  box.placeholder = textContent;


  if (cssClasses.includes('correct')  || cssClasses.includes('incorrect')){
    console.log('aasdasda')
    const wrapper = document.createElement('div');
    wrapper.classList.add('input-wrapper')
    wrapper.appendChild(box)
    const icon = document.createElement('i')
    icon.classList.add('material-icons')
    icon.classList.add('small-icons')
    if (cssClasses.includes('correct')){
      icon.innerText='check'
      icon.classList.add('small-check')
    }else{
      icon.innerText='close'
      icon.classList.add('small-cross')
    }
    wrapper.appendChild(icon) 
    return wrapper
  }
  


  return box;
}
//--------------------------------------------------------------------
function generateObsPanel() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('panel');

  const panelTitle = document.createElement('p');
  panelTitle.innerHTML = '<b>Ortaöğretim</b> Başarı Puanı';
  panelTitle.classList.add('panel-title');
  wrapper.appendChild(panelTitle);

  wrapper.appendChild(createObsRow('Dipolma Notu', BoxTypes.obp_gpa));
  wrapper.appendChild(createObsRow('OBP', BoxTypes.obp_score));

  const checkWrapper = document.createElement('div');
  const checkBox = generateBox(BoxTypes.obp_checkbox);
  checkBox.type = 'checkbox';
  checkWrapper.appendChild(checkBox);
  checkWrapper.classList.add('obs-row');
  const checkText = document.createElement('p');
  checkText.textContent = 'Geçen Sene Bir Bölüme Yerleştim';
  checkWrapper.appendChild(checkText);
  wrapper.appendChild(checkWrapper);

  function createObsRow(text, box) {
    const rowWrapper = document.createElement('div');
    rowWrapper.classList.add('obs-row');

    const obsText = document.createElement('p');

    obsText.textContent = text;

    rowWrapper.appendChild(obsText);

    rowWrapper.appendChild(generateBox(box));

    return rowWrapper;
  }

  return wrapper;
}

function generateResultsPanel() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('panel');

  function createResultsRow(text) {
    return rowWrapper;
  }

  function createResultsHeaders(text, box) {}
}
