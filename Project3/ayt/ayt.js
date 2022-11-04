/* eslint-disable no-console */
/* eslint-disable no-use-before-define */

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
  ok_icon: ['div', ['generic-box', 'fa', 'fa-check'], ''],
  cross_icon: ['div', ['generic-box', 'cross_icon'], 'X'],
  net_icon: ['div', ['generic-box', 'net_icon'], 'Net'],
  correct: ['input', ['generic-box', 'correct'], '-'],
  incorrect: ['input', ['generic-box', 'incorrect'], '-'],
  net: ['p', ['generic-box', 'net'], '-'],
  gpa: ['input', ['generic-box', 'gpa'], '-'],
  obp: ['p', ['generic-box', 'obp'], '-'],
  tyt_raw: ['p', ['generic-box', 'tyt_raw'], '-'],
  tyt_end: ['p', ['generic-box', 'tyt_end'], '-'],
  say_raw: ['p', ['generic-box', 'say_raw'], '-'],
  say_end: ['p', ['generic-box', 'say_end'], '-'],
  ea_raw: ['p', ['generic-box', 'ea_raw'], '-'],
  ea_end: ['p', ['generic-box', 'ea_end'], '-'],
  SOZ_raw: ['p', ['generic-box', 'SOZ_raw'], '-'],
  SOZ_end: ['p', ['generic-box', 'SOZ_end'], '-'],
});

fetch('./data.json')
  .then((response) => response.json())
  .then((json) => {
    const field = generateFieldBlock(json[0].fields[0]);

    const root = document.querySelector('#root');
    root.appendChild(field);
  });

function generatePanelBlock(panel) {
  const wrapper = document.createElement(div);
}

function generateFieldBlock(field) {
  const wrapper = document.createElement('div');
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
  wrapper.classList.add(`${subject.subject_id}-row-wrapper`);

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
  questionCount.textContent = subject.question_count;
  questionCount.classList.add('subject-q-count');
  wrapper.appendChild(questionCount);

  return wrapper;
}

function generateSubjectBoxes(subject) {
  const wrapper = document.createElement('div');

  wrapper.classList.add('subject-box-wrapper');
  wrapper.classList.add(`subject_id-${subject.subject_id}-box-wrapper`);

  wrapper.appendChild(generateBox(BoxTypes.correct));
  wrapper.appendChild(generateBox(BoxTypes.incorrect));
  wrapper.appendChild(generateBox(BoxTypes.net));

  return wrapper;
}

function generateBox(type) {
  const [elementType, cssClasses, textContent] = type;

  const box = document.createElement(elementType);

  cssClasses.forEach((element) => {
    box.classList.add(element);
  });

  box.textContent = textContent;

  return box;
}

