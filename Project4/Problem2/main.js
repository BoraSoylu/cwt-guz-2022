const fsm = new calcFsm();

fsm.setMainDisplayElement('.main-display');
fsm.setMiniDisplayElement('.mini-display');

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    fsm.handleInput(button.innerText);
  });
});
function calcFsm() {
  /* ------------- Variables -------------*/
  let mainDisplayElement = '';
  let miniDisplayElement = '';
  let operand1 = '0';
  let operand2 = '';
  let currentOperator = '';

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
          updateDisplay('main', 'set', input);
          operand1 = input;
          this.state = States.ONE;
        },
        OPERATOR(input) {
          currentOperator = input;

          updateDisplay('mini', 'set', `0 ${input} `);
          this.state = States.TWO;
        },
        CALCULATE(input) {
          updateDisplay('mini', 'set', `0 ${input} `);
          this.state = States.ZERO;
        },
        CLEAR(input) {
          operand1 = '0';
          operand2 = '';
          currentOperator = '';
          updateDisplay('mini', 'set', '');
          updateDisplay('main', 'set', '0');
          this.state = States.ZERO;
        },
      },
      ONE: {
        DIGIT(input) {
          operand1 = operand1 + input;
          updateDisplay('main', 'append', input);
          this.state = States.ONE;
        },
        OPERATOR(input) {
          updateDisplay('mini', 'set', `${operand1} ${input}`);
          currentOperator = input;
          this.state = States.TWO;
        },
        CALCULATE(input) {
          updateDisplay('mini', 'set', `${operand1} ${input} `);
          this.state = States.ONE;
        },
        CLEAR(input) {
          operand1 = '0';
          operand2 = '';
          currentOperator = '';
          updateDisplay('mini', 'set', '');
          updateDisplay('main', 'set', '0');
          this.state = States.ZERO;
        },
      },
      TWO: {
        DIGIT(input) {
          operand2 = input;
          updateDisplay(
            'mini',
            'set',
            `${operand1} ${currentOperator} ${operand2} `
          );
          updateDisplay('main', 'set', input);
          this.state = States.THREE;
        },
        OPERATOR(input) {
          updateDisplay('mini', 'set', `${operand1} ${input} `);
          currentOperator = input;
          this.state = States.TWO;
        },
        CALCULATE(input) {
          // TO-DO logic
          this.state;
        },
        CLEAR(input) {
          operand1 = '0';
          operand2 = '';
          currentOperator = '';
          updateDisplay('mini', 'set', '');
          updateDisplay('main', 'set', '0');
          this.state = States.ZERO;
        },
      },
      THREE: {
        DIGIT(input) {
          operand2 = operand2 + input;
          updateDisplay('main', 'append', input);
          updateDisplay('mini', 'append', input);
          this.state = States.THREE;
        },
        OPERATOR(input) {
          // TO-DO logic
          this.state;
        },
        CALCULATE(input) {
          let result = calculateAndFormat();
          updateDisplay('main', 'set', result);
          updateDisplay(
            'mini',
            'set',
            `${operand1} ${currentOperator} ${operand2} =`
          );

          this.state = States.THREE;
        },
        CLEAR(input) {
          operand1 = '0';
          operand2 = '';
          currentOperator = '';
          updateDisplay('mini', 'set', '');
          updateDisplay('main', 'set', '0');
          this.state = States.ZERO;
        },
      },
    },
    dispatch(actionName, input) {
      const action = this.transitions[this.state][actionName];

      if (action) {
        action.call(this, input);
      } else {
        console.log('Invalid action');
      }
    },
  };

  /* ---------------Display---------------*/
  /* Sets the identifier (class or id) of main display
     Must run at the start of the program */
  this.setMainDisplayElement = (element) => {
    document.querySelector('.state').innerText = machine.state; // !!!

    if (!element) {
      console.log('setMainDisplayElement element is empty');
      return false;
    }
    mainDisplayElement = element;
    document.querySelector(mainDisplayElement).innerText = '0';
  };

  /* Sets the identifier (class or id) of mini display
     Must run at the start of the program */
  this.setMiniDisplayElement = (element) => {
    if (!element) {
      console.log('setMiniDisplayElement element is empty');
      return false;
    }
    miniDisplayElement = element;
  };

  /* Updates main dipslay */
  /**
   *
   * @param {string} display - Which display to update (main or mini)
   * @param {string} updateType - How to update display (set, replace, append)
   * @param {string} text - What to update with
   */
  function updateDisplay(display_id, updateType, text) {
    const updateTypes = {
      set: 'set',
      replace: 'replace',
      append: 'append',
    };
    if (!(display_id === 'main') && !(display_id === 'mini')) {
      console.log(`updateDisplay: wrong display input: display: ${display_id}`);
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
      console.log(
        `updateDisplay: wrong updateType input: updateType: ${updateType}`
      );
    }
  }

  /* ---------------Input---------------*/
  /* Handles input and updates main and mini display
  with user input (digit or operator) */
  this.handleInput = (input) => {
    console.clear();
    if (!validateInput(input)) {
      console.error('validateInput returned false');
      return;
    }
    console.log('🚀 ~ calcFsm ~ state: ', machine.state);
    console.log(
      '🚀 ~ calcFsm ~ inputActionType(input)',
      inputActionType(input)
    );
    document.querySelector('.state').innerText = machine.state; // !!!
    document.querySelector('.action-type').innerText = inputActionType(input); // !!!

    machine.dispatch(inputActionType(input), input);

    console.log('🚀 ~ calcFsm ~ after operand1: ', operand1);
    console.log('🚀 ~ calcFsm ~ after operand2: ', operand2);
    console.log('🚀 ~ calcFsm ~ after currentOperator: ', currentOperator);
    console.log('🚀 ~ calcFsm ~ after state: ', machine.state);
    console.log(
      '🚀 ~ calcFsm ~ after inputActionType(input)',
      inputActionType(input)
    );
  };

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
    op1 = Number(operand1);
    op2 = Number(operand2);
    if (currentOperator === Operators.Add) {
      result = op1 + op2;
    } else if (currentOperator === Operators.Divide) {
      result = op1 / op2;
    } else if (currentOperator === Operators.Multiply) {
      result = op1 * op2;
    } else if (currentOperator === Operators.Subtract) {
      result = op1 - op2;
    }
    return result
      .toFixed(2)
      .replace(/[.,]00$/, '')
      .toString();
  }
}
