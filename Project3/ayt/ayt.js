/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
fetch('./data.json')
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    const SubjectNameAndQCount = generateSubjectNameAndQCount(
      json.section0.subsection0.subject0,
    );
    const SubjectBoxes = generateSubjectBoxes(
      json.section0.subsection0.subject1,
    );
    const root = document.querySelector('#root');
    root.appendChild(SubjectNameAndQCount);
    root.appendChild(SubjectBoxes);
  });

function generateSubjectRow() {}

// Generates subject (i.e Tarih-1) name and question count div.
function generateSubjectNameAndQCount(subject) {
  // Create wrapper
  const wrapper = document.createElement('div');
  wrapper.classList.add('subject-name-q-wrapper');

  // Create p element for subject name and append to wrapper
  const subjectName = document.createElement('p');
  subjectName.textContent = subject.subject_name;
  subjectName.classList.add('subject-name');
  wrapper.appendChild(subjectName);

  // Create p element for subject question count and append to wrapper
  const questionCount = document.createElement('p');
  questionCount.textContent = subject.question_count;
  questionCount.classList.add('subject-q-count');
  wrapper.appendChild(questionCount);

  return wrapper;
}

// Generates correct, incorrect, and net boxes in a wrapper for a specific subject
function generateSubjectBoxes(subject) {
  // Create wrapper
  const wrapper = document.createElement('div');

  // Add classes to wrapper
  wrapper.classList.add('subject-box-wrapper');
  wrapper.classList.add(`s_id-${subject.s_id}-box-wrapper`);

  // Create boxes and append to wrapper
  wrapper.appendChild(generateBox('correct', true, subject.s_id));
  wrapper.appendChild(generateBox('incorrect', true, subject.s_id));
  wrapper.appendChild(generateBox('net', false, subject.s_id));

  return wrapper;
}

// Creates boxes dynamically
// generateIOBox("correct", true, subject0)
// generateIOBox("tyt-raw", false)
function generateBox(boxType, input, subject) {
  //
  const box = document.createElement('input');
  box.classList.add(boxType);
  box.textContent = '-';

  if (subject !== null) {
    box.classList.add(subject);
  }
  if (input === false) {
    box.disabled = true;
  }

  /* Boxes:
    Correct answers input box - correct
    Incorrect answers input box - incorrect
    Net answers input box  - net
    GPA input box - gpa
    OBP display box - obp
    TYT raw display box - tyt-raw
    TYT end display box - tyt-end
    SAY raw display box - say-raw
    SAY end display box - say-end
    EA raw display box - ea-raw
    EA end display box - ea-end
    SOZ raw display box - SOZ-raw
    SOZ end display box - SOZ-end
    */
  return box;
}

function generateSubSectionBlock() {}

function generateSectionBlock() {}
