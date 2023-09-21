const body = document.body;
const title = document.querySelector(".title");
const optionNumbers = document.querySelector(".option-numbers");
const toggleText = document.querySelector(".toggle-text");
const toggle = document.querySelector(".toggle");
const toggleButton = document.querySelector(".toggle-button");
const display = document.querySelector(".display");
const displayNumber = document.querySelector(".display-number");
const numberPad = document.querySelector(".number-pad");
const numberButton = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");
const resetButton = document.querySelector(".reset");
const deleteButton = document.querySelector(".delete");
const equalsButton = document.querySelector(".equals");

//------------------- DOM Manipulation ---------------//

let mode2 = false;
let mode3 = false;

toggleButton.addEventListener("click", function (e) {
  if (!mode2) {
    //////////////////////////////////////////
    optionNumbers.classList.toggle("mode-2-option-numbers");
    title.classList.toggle("mode-2-title");
    toggleText.classList.toggle("mode-2-toggle-text");
    toggle.classList.toggle("mode-2-toggle");
    toggleButton.classList.toggle("mode-2-toggle-button");
    body.classList.toggle("mode-2-body");
    display.classList.toggle("mode-2-display");
    displayNumber.classList.toggle("mode-2-display-number");
    numberPad.classList.toggle("mode-2-number-pad");
    numberButton.forEach((number) => number.classList.toggle("mode-2-number"));
    operationButtons.forEach((operation) =>
      operation.classList.toggle("mode-2-operation")
    );
    resetButton.classList.toggle("mode-2-reset");
    deleteButton.classList.toggle("mode-2-delete");
    equalsButton.classList.toggle("mode-2-equals");
    ///////////////////////////////////////////
    mode2 = !mode2;
  } else if (mode2 && !mode3) {
    //////////////////////////////////////////
    optionNumbers.classList.toggle("mode-3-option-numbers");
    title.classList.toggle("mode-3-title");
    toggleText.classList.toggle("mode-3-toggle-text");
    toggle.classList.toggle("mode-3-toggle");
    toggleButton.classList.toggle("mode-3-toggle-button");
    body.classList.toggle("mode-3-body");
    display.classList.toggle("mode-3-display");
    displayNumber.classList.toggle("mode-3-display-number");
    numberPad.classList.toggle("mode-3-number-pad");
    numberButton.forEach((number) => number.classList.toggle("mode-3-number"));
    operationButtons.forEach((operation) =>
      operation.classList.toggle("mode-3-operation")
    );
    resetButton.classList.toggle("mode-3-reset");
    deleteButton.classList.toggle("mode-3-delete");
    equalsButton.classList.toggle("mode-3-equals");
    ///////////////////////////////////////////
    mode3 = !mode3;
  } else if (mode2 && mode3) {
    //////////////////////////////////////////
    optionNumbers.classList.toggle("mode-2-option-numbers");
    title.classList.toggle("mode-2-title");
    toggleText.classList.toggle("mode-2-toggle-text");
    toggle.classList.toggle("mode-2-toggle");
    toggleButton.classList.toggle("mode-2-toggle-button");
    body.classList.toggle("mode-2-body");
    display.classList.toggle("mode-2-display");
    displayNumber.classList.toggle("mode-2-display-number");
    numberPad.classList.toggle("mode-2-number-pad");
    numberButton.forEach((number) => number.classList.toggle("mode-2-number"));
    operationButtons.forEach((operation) =>
      operation.classList.toggle("mode-2-operation")
    );
    resetButton.classList.toggle("mode-2-reset");
    deleteButton.classList.toggle("mode-2-delete");
    equalsButton.classList.toggle("mode-2-equals");
    ///////////////////////////////////////////
    optionNumbers.classList.toggle("mode-3-option-numbers");
    title.classList.toggle("mode-3-title");
    toggleText.classList.toggle("mode-3-toggle-text");
    toggle.classList.toggle("mode-3-toggle");
    toggleButton.classList.toggle("mode-3-toggle-button");
    body.classList.toggle("mode-3-body");
    display.classList.toggle("mode-3-display");
    displayNumber.classList.toggle("mode-3-display-number");
    numberPad.classList.toggle("mode-3-number-pad");
    numberButton.forEach((number) => number.classList.toggle("mode-3-number"));
    operationButtons.forEach((operation) =>
      operation.classList.toggle("mode-3-operation")
    );
    resetButton.classList.toggle("mode-3-reset");
    deleteButton.classList.toggle("mode-3-delete");
    equalsButton.classList.toggle("mode-3-equals");
    ///////////////////////////////////////////
    mode2 = !mode2;
    mode3 = !mode3;
  }
});

//---------------- CALCULATOR LOGIC ------------------//

let displayValue = "0";
const prevValue = [];
const curValue = [];
let inActionOp;
let curOp;

//**************************** Event Listeners **********************//

numberPad.addEventListener("click", function (event) {
  const button = event.target;

  if (button.classList.contains("number")) inputNumber(button.innerText);
  /////////////////////////////////////////////////////////////////////
  if (button.classList.contains("operation")) doOperation(button);
  /////////////////////////////////////////////////////////////////////
  if (button.classList.contains("equals")) equals(button);
  /////////////////////////////////////////////////////////////////////
  if (button.classList.contains("reset")) resetAll();
  /////////////////////////////////////////////////////////////////////
  if (button.classList.contains("delete")) deleteNumber();
  /////////////////////////////////////////////////////////////////////
  // Update the display number //
  updateDisplay();
});

//**************************** Functions ****************************//

function inputNumber(number) {
  if (displayValue.length > 15 && !curOp) {
    alert(
      `The number you've inputed is too long.

I simply can't bother to write the code so that you can do such ENORMOUS calculations.`
    );
    return;
  }
  /////////////////////////////////////////////////////////////////////
  if (number === "." && displayValue.includes(".") && !curOp) return;
  /////////////////////////////////////////////////////////////////////
  if (displayValue === "0" || !isFinite(displayValue) || curOp) {
    if (number === ".") {
      displayValue = "0.";
    } else {
      displayValue = number;
    }
    //////////////////////////////////////////////
    inActionOp = curOp;
    curOp = undefined;
    //////////////////////////////////////////////
    removeAddButtonHiglight();
  } else {
    displayValue += number;
  }
}

//-------------------------------------------------------------------//

function doOperation(operationButton) {
  if (!+displayValue && prevValue.length === 0) return;
  /////////////////////////////////////////////////////////////////////
  if (prevValue.length !== 0 && inActionOp) {
    curValue.push(displayValue);
    const result = calculateValues(prevValue, inActionOp, curValue);
    inActionOp = curOp;
    prevValue.splice(0, 1, result);
    curValue.pop();
    displayValue = result;
  }
  /////////////////////////////////////////////////////////////////////
  if (prevValue.length === 0) {
    prevValue.push(displayValue);
    curOp = operationButton.innerText;
  } else {
    if (operationButton.innerText === curOp) return;
    curOp = operationButton.innerText;
  }
  /////////////////////////////////////////////////////////////////////
  removeAddButtonHiglight(operationButton);
}

//-------------------------------------------------------------------//

function equals(operationButton) {
  if (!+displayValue && prevValue.length === 0) return;
  /////////////////////////////////////////////////////////////////////
  if (prevValue.length !== 0 && inActionOp) {
    curValue.push(displayValue);
    const result = calculateValues(prevValue, inActionOp, curValue);
    prevValue.splice(0, 1, result);
    curValue.pop();
    inActionOp = undefined;
    displayValue = result;
  }
  /////////////////////////////////////////////////////////////////////
  if (!inActionOp) return;
  /////////////////////////////////////////////////////////////////////
  removeAddButtonHiglight(operationButton);
}

//-------------------------------------------------------------------//

function resetAll() {
  displayValue = "0";
  prevValue.pop();
  curValue.pop();
  inActionOp = undefined;
  curOp = undefined;
}

//-------------------------------------------------------------------//

function deleteNumber() {
  if (displayValue === "0") {
    return;
  } else if (displayValue.length === 1) {
    displayValue = "0";
  } else {
    displayValue = displayValue.slice(0, displayValue.length - 1);
  }
}

//************************ Helper Functions *************************//

function updateDisplay() {
  displayNumber.innerText = displayValue;
}

//-------------------------------------------------------------------//

function removeAddButtonHiglight(operationButton) {
  operationButtons.forEach((button) => (button.dataset.operator = ""));
  if (!curOp || operationButton.classList.contains("equals")) return;
  operationButton.dataset.operator = "selected";
}

//-------------------------------------------------------------------//

function calculateValues(prevValue, inActionOp, curValue) {
  switch (inActionOp) {
    case "+":
      return (+prevValue + +curValue).toString();
      break;
    case "-":
      return (+prevValue - +curValue).toString();
      break;
    case "×":
      return (+prevValue * +curValue).toString();
      break;
    case "÷":
      return (+prevValue / +curValue).toString();
  }
}
