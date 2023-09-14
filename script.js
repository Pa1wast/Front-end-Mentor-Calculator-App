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
const operationButton = document.querySelectorAll(".operation");
const resetButton = document.querySelector(".reset");
const deleteButton = document.querySelector(".delete");
const equalsButton = document.querySelector(".equals");

//------------------- CSS manipulation ---------------//

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
    operationButton.forEach((operation) =>
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
    operationButton.forEach((operation) =>
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
    operationButton.forEach((operation) =>
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
    operationButton.forEach((operation) =>
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
