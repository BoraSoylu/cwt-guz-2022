const fsm = new calcFsm();

fsm.setMainDisplayElement('.main-display');

document.querySelector('.btn').addEventListener('click', () => {
  fsm.handleInput('1');
  console.log('btn click');
});

function calcFsm() {
  /* ------------- Variables -------------*/
  let mainDisplayElement = '';
  let miniDisplayElement = '';
  let operand1 = '';
  let operand2 = '';
  let currentOperator = '';

  /* ------------- Valid Operators -------------*/
  const Operators = {
    Divide: '/',
    Multiply: '*',
    Subtract: '-',
    Add: '+',
    Calculate: '=',
    Clear: 'c',
  };

  /* ------------- Finite State Machine -------------*/
  const machine = {
    Actions: {
      DIGIT: 'DIGIT',
      OPERATOR: 'OPERATOR',
      CALCULATE: 'CALCULATE',
      CLEAR: 'CLEAR',
    },
    state: 'ZERO',
    transitions: {
      ZERO: {
        DIGIT(input) {
          console.log(`in machine.ZERO.digit with input: ${input}`);
          updateDisplay('main', 'append', input);
          this.state = 'ONE';
        },
        OPERATOR() {
          // TO-DO logic
          this.state;
        },
        CALCULATE() {
          // TO-DO logic
          this.state;
        },
        CLEAR() {
          // TO-DO logic
          this.state;
        },
      },
      ONE: {
        DIGIT(input) {
          updateDisplay('main', 'append', input);
          this.state = 'ONE';
          this.state;
        },
        OPERATOR() {
          // TO-DO logic
          this.state;
        },
        CALCULATE() {
          // TO-DO logic
          this.state;
        },
        CLEAR() {
          // TO-DO logic
          this.state;
        },
      },
      TWO: {
        DIGIT() {
          // TO-DO logic
          this.state;
        },
        OPERATOR() {
          // TO-DO logic
          this.state;
        },
        CALCULATE() {
          // TO-DO logic
          this.state;
        },
        CLEAR() {
          // TO-DO logic
          this.state;
        },
      },
      THREE: {
        DIGIT() {
          // TO-DO logic
          this.state;
        },
        OPERATOR() {
          // TO-DO logic
          this.state;
        },
        CALCULATE() {
          // TO-DO logic
          this.state;
        },
        CLEAR() {
          // TO-DO logic
          this.state;
        },
      },
    },
    dispatch(actionName, input) {
      const action = this.transitions[this.state][actionName](input);

      if (action) {
        action.call(this);
      } else {
        console.log('Invalid action');
      }
    },
  };

  /* ---------------Display---------------*/
  /* Sets the identifier (class or id) of main display
     Must run at the start of the program */
  this.setMainDisplayElement = (element) => {
    if (!element) {
      console.log('setMainDisplayElement element is empty');
      return false;
    }
    mainDisplayElement = element;
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
    if (!validateInput(input)) {
      console.log('validateInput returned false');
      return;
    }

    if (isOperator(input)) {
      currentOperator = input;
    } else {
      machine.dispatch(machine.Actions.DIGIT, input);
    }
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

  function isOperator(input) {
    for (let i in Object.keys(Operators).length) {
      if (Operators[i] === input) {
        return true;
      }
    }
    return false;
  }

  /* ---------------Calculate---------------*/
  function calculateAndFormat(operator) {
    op1 = Number(operand1);
    op2 = Number(operand2);
    if (operator === Operators.Add) {
      result = op1 + op2;
    } else if (operator === Operators.Divide) {
      result = op1 / op2;
    } else if (operator === Operators.Multiply) {
      result = op1 * op2;
    } else if (operator === Operators.Subtract) {
      result = op1 - op2;
    }
    const operation = `${op1} ${operator} ${op2} =`;
    return (
      result
        .toFixed(2)
        .replace(/[.,]00$/, '')
        .toString(),
      operation
    );
  }
}
