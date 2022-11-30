// const fsm = new calcFsm();

// fsm.handleInput(3);

function calcFsm() {
  const State = {
    Zero: '0',
    One: '1',
    Two: '2',
    Three: '3',
  };
  const Operators = {
    Divide: '/',
    Multiply: '*',
    Subtract: '-',
    Add: '+',
    Calculate: '=',
  };

  let mainDisplayElement = '';
  let miniDisplayElement = '';
  let operand1 = '';
  let operand2 = '';

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
  function updateDisplay(display, updateType, text) {}

  /* ---------------Input---------------*/
  /* Handles input and updates main and mini display
  with user input (digit or operator) */
  this.handleInput = (input) => {
    validateInput(input);
  };

  /* ---------------Validate---------------*/
  /* Validate input. Return true if operator or digit. */
  function validateInput(input) {
    if (!input) {
      console.log('validateInput input is empty');
      return false;
    }
    for (let i in State) {
      if (State[i] === input) {
        return true;
      }
    }
    for (let i in Operators) {
      if (State[i] === input) {
        return true;
      }
    }
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

  /* ---------------Init State---------------*/
  const state = State.Zero;

  /* ---------------State 0---------------*/
  function stateZeroDigit() {
    state = State.One;
  }

  /* ---------------State 1---------------*/
  function stateOneDigit() {
    state = State.One;
  }
  function stateOneOperator() {
    state = State.Two;
  }

  /* ---------------State 2---------------*/
  function stateTwoOperator() {
    state = State.Two;
  }
  function stateTwoDigit() {
    state = State.Three;
  }

  /* ---------------State 3---------------*/
  function stateThreeDigit() {
    state = State.Three;
  }
  function stateThreeOperator() {
    state = State.Two;
  }
  function stateThreeCalculate() {
    state = State.Zero;
  }

  /* ---------------State All Clear--------*/
  function stateAllClear() {
    state = State.Zero;
  }
}
