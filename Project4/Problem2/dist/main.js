'use strict';

addDarkThemeSwitch('.dark-switch');

const fsm = new calcFsm();
fsm.setMainDisplayElement('.main-display');
fsm.setMiniDisplayElement('.mini-display');

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    fsm.handleInput(button.innerText);
  });
});

const body = document.querySelector('body');
body.addEventListener('keydown', (event) => {
  fsm.handleInput(event.key);
});

function calcFsm() {
  /* ------------- Variables -------------*/
  let mainDisplayElement = '';
  let miniDisplayElement = '';
  let operand1 = '0';
  let operand2 = '';
  let operator = '';
  let result = '';

  /* ------------- Valid Operators -------------*/
  const Operators = {
    Divide: '/',
    Multiply: '*',
    Subtract: '-',
    Add: '+',
    Calculate: '=',
    Clear: 'C',
  };
  const States = {
    ZERO: 'ZERO',
    ONE: 'ONE',
    TWO: 'TWO',
    THREE: 'THREE',
  };
  /* ------------- Finite State Machine -------------*/
  const machine = {
    Actions: {
      DIGIT: 'DIGIT',
      OPERATOR: 'OPERATOR',
      CALCULATE: 'CALCULATE',
      CLEAR: 'CLEAR',
    },
    ActionsMap: {
      Divide: 'OPERATOR',
      Multiply: 'OPERATOR',
      Subtract: 'OPERATOR',
      Add: 'OPERATOR',
      Calculate: 'CALCULATE',
      Clear: 'CLEAR',
      Digit: 'DIGIT',
    },

    state: States.ZERO,
    transitions: {
      ZERO: {
        DIGIT(input) {
          if (input === '0') {
            return;
          }
          operand1 = input;
          updateDisplay('main', operand1);
          updateDisplay('mini', '');
          this.state = States.ONE;
        },
        OPERATOR(input) {
          operator = input;
          updateDisplay('mini', `${operand1} ${operator}`);
          this.state = States.TWO;
        },
        CALCULATE(input) {
          if (result) {
            result = calculateAndFormat();
            if (this.divideByZero()) return;
            updateDisplay('mini', `${operand1} ${operator} ${operand2} =`);
            updateDisplay('main', `${result}`);
            operand1 = result;
          } else {
            updateDisplay('mini', `${operand1} =`);
          }

          this.state = States.ZERO;
        },
        CLEAR(input) {
          this.clearAll();
          this.state = States.ZERO;
        },
      },
      ONE: {
        DIGIT(input) {
          operand1 = operand1 + input;
          updateDisplay('main', operand1);
          this.state = States.ONE;
        },
        OPERATOR(input) {
          operator = input;
          updateDisplay('mini', `${operand1} ${operator}`);
          this.state = States.TWO;
        },
        CALCULATE(input) {
          updateDisplay('mini', `${operand1} =`);
          this.state = States.ONE;
        },
        CLEAR(input) {
          this.clearAll();
          this.state = States.ZERO;
        },
      },
      TWO: {
        DIGIT(input) {
          operand2 = input;
          updateDisplay('main', operand2);
          updateDisplay('mini', `${operand1} ${operator} ${operand2}`);

          this.state = States.THREE;
        },
        OPERATOR(input) {
          operator = input;
          updateDisplay('mini', `${operand1} ${operator}`);
          this.state = States.TWO;
        },
        CALCULATE(input) {
          operand2 = operand1;
          updateDisplay('mini', `${operand1} ${operator} ${operand2} =`);
          result = calculateAndFormat();
          if (this.divideByZero()) return;
          updateDisplay('main', `${calculateAndFormat()}`);
          this.state = States.THREE;
        },
        CLEAR(input) {
          this.clearAll();
          this.state = States.ZERO;
        },
      },
      THREE: {
        DIGIT(input) {
          operand2 = operand2 + input;
          updateDisplay('main', operand2);
          updateDisplay('mini', `${operand1} ${operator} ${operand2}`);
          this.state = States.THREE;
        },
        OPERATOR(input) {
          result = calculateAndFormat();
          if (this.divideByZero()) return;
          operator = input;
          updateDisplay('mini', `${result} ${operator}`);
          updateDisplay('main', `${result}`);
          operand1 = result;
          this.state = States.TWO;
        },
        CALCULATE(input) {
          result = calculateAndFormat();
          if (this.divideByZero()) return;
          updateDisplay('mini', `${operand1} ${operator} ${operand2} =`);
          updateDisplay('main', `${result}`);
          operand1 = result;
          this.state = States.ZERO;
        },
        CLEAR(input) {
          this.clearAll();
          this.state = States.ZERO;
        },
      },
    },
    dispatch(actionName, input) {
      const action = this.transitions[this.state][actionName];

      if (action) {
        action.call(this, input);
      } else {
        console.error('Invalid action');
      }
    },
    divideByZero() {
      if (operand2 === '0' && operator === '/') {
        this.clearAll(true);
        this.state = States.ZERO;
        return true;
      }
      return false;
    },
    clearAll(divideByZero) {
      if (divideByZero) {
        updateDisplay('mini', `${operand1} ${operator} ${operand2} =`);
        updateDisplay('main', `Cannot divide by zero`);
      } else {
        updateDisplay('main', '0');
        updateDisplay('mini', '');
      }
      operand1 = '0';
      operand2 = '';
      operator = '';
      result = '';
    },
  };

  /* ---------------Select Display---------------*/
  /**
   *
   * @param {string} element - Html id or class of calculator main display
   * @returns
   */
  this.setMainDisplayElement = (element) => {
    if (!element) {
      console.error('setMainDisplayElement element is empty');
      return false;
    }
    mainDisplayElement = element;
    document.querySelector(mainDisplayElement).innerText = '0';
  };

  /**
   *
   * @param {string} element - Html id or class of calculator mini/history display
   * @returns
   */
  this.setMiniDisplayElement = (element) => {
    if (!element) {
      console.error('setMiniDisplayElement element is empty');
      return false;
    }
    miniDisplayElement = element;
  };
  /* ---------------Input---------------*/
  /**
   * 
   * @param {string} input - Handles input and updates main and mini display
  with user input (digit or operator). 
   * @returns 
   */
  this.handleInput = (input) => {
    if (input === 'Enter') {
      input = '=';
    }
    if (!validateInput(input)) {
      return;
    }
    machine.dispatch(inputActionType(input), input);
  };
  /* ---------------Update Display---------------*/
  /**
   *
   * @param {string} display - Which display to update (main or mini)
   * @param {string} text - What to update with
   * @param {string?} updateType - How to update display (set, replace, append)
   */
  function updateDisplay(display_id, text, updateType) {
    if (!updateType) {
      updateType = 'set';
    }
    const updateTypes = {
      set: 'set',
      replace: 'replace',
      append: 'append',
    };
    if (!(display_id === 'main') && !(display_id === 'mini')) {
      console.error(
        `updateDisplay: wrong display input: display: ${display_id}`
      );
      return;
    }
    const display = document.querySelector(
      display_id == 'main' ? mainDisplayElement : miniDisplayElement
    );

    if (updateType === updateTypes.set) {
      display.innerText = text;
    } else if (updateType === updateTypes.replace) {
      display.innerText = display.innerText.replace(/.$/, text);
    } else if (updateType === updateTypes.append) {
      display.innerText = display.innerText + text;
    } else {
      console.error(
        `updateDisplay: wrong updateType input: updateType: ${updateType}`
      );
    }
    if (!isNaN(display.innerText)) {
      display.innerText = display.innerText.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        ','
      );
    }
  }

  /* ---------------Validate---------------*/
  /* Validate input. Return true if operator or digit. */
  function validateInput(input) {
    for (let i in Operators) {
      if (Operators[i] === input) {
        return true;
      }
    }
    for (let index = 0; index < 10; index++) {
      if (Number(input) === index) {
        return true;
      }
    }
    return false;
  }
  /* Return action type of input. */
  function inputActionType(input) {
    let operationType = Object.keys(Operators).find(
      (key) => Operators[key] === input
    );

    for (const key in machine.ActionsMap) {
      if (key === operationType) {
        return machine.ActionsMap[key];
      }
    }
    return 'DIGIT';
  }

  /* ---------------Calculate---------------*/
  function calculateAndFormat() {
    let op1 = Number(operand1);
    let op2 = Number(operand2);

    if (operator === Operators.Add) {
      result = op1 + op2;
    } else if (operator === Operators.Divide) {
      result = op1 / op2;
    } else if (operator === Operators.Multiply) {
      result = op1 * op2;
    } else if (operator === Operators.Subtract) {
      result = op1 - op2;
    }
    return result
      .toFixed(2)
      .replace(/[.,]00$/, '')
      .toString();
  }
}

function addDarkThemeSwitch(c) {
  const btn = document.querySelector(c);
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  btn.addEventListener('click', () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  });
}
