const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.buttons');
const display = document.querySelector('.display');
const textbox = display.querySelector('.text');

let displayValue = '0';
let previousValue = '0';
let previousOperand = "";
let currentOperand = "";

function updateDisplay() {
    if (textbox.innerHTML.toString().length >= 8 || displayValue.length >= 8) {
        textbox.classList.toggle("overflow", true);
    }
    if (textbox.innerHTML.toString().length >= 24  || displayValue.length >= 24) {
        textbox.classList.toggle("overflow-more", true);
    }
    if (textbox.innerHTML.toString().length <= 24 || displayValue.length <= 24) {
        textbox.classList.toggle("overflow-more", false);
    }
    if (textbox.innerHTML.toString().length <= 8  || displayValue.length <= 8) {
        textbox.classList.toggle("overflow", false);
    }
    textbox.innerHTML = displayValue;
}

function add() {
    let n1 = parseFloat(previousValue.toString());
    let n2 = parseFloat(displayValue.toString());
    let result = n1 + n2;
    return result;
}
function subtract() {
    let n1 = parseFloat(previousValue.toString());
    let n2 = parseFloat(displayValue.toString());
    let result = n1 - n2;
    return result;
}
function divide() {
    let n1 = parseFloat(previousValue.toString());
    let n2 = parseFloat(displayValue.toString());
    let result = n1 / n2;
    return result;
}
function multiply() {
    let n1 = parseFloat(previousValue.toString());
    let n2 = parseFloat(displayValue.toString());
    let result = n1 * n2;
    return result;
}

function equate() {
    switch (previousOperand) {
        case "add":
            displayValue = add().toString();
            break;
        case "subtract":
            displayValue = subtract().toString();
            break;
        case "multiply":
            displayValue = multiply().toString();
            break;
        case "divide":
            displayValue = divide().toString();
            break;
        default:
            break;
    }
}

keys.addEventListener("click", e => {
    if (e.target.matches('button')) {
        if (e.target.dataset.action === "add") {
            if (previousValue === '0') {
                previousValue = displayValue.toString();
                displayValue = '0';
                previousOperand = "add";
                updateDisplay();
                return;
            }
            else {
                equate();
                updateDisplay();
                previousValue = displayValue;
                displayValue = '0';
                previousOperand = "add";
                return;
            }
        }
        if (e.target.dataset.action === "subtract") {
            if (previousValue === '0' && displayValue === '0') {
                displayValue = '-';
                return;
            }
            if (previousValue === '0' && !previousOperand === '') {
                equate();
            }
            else {
                equate();
                updateDisplay();
                previousValue = displayValue;
                displayValue = '0';
                previousOperand = "subtract";
                return;
            }
        }
        if (e.target.dataset.action === "divide") {
            if (previousValue === '0') {
                previousValue = displayValue.toString();
                displayValue = '0';
                previousOperand = "divide";
                updateDisplay();
                return;
            }
            else {
                equate();
                updateDisplay();
                previousValue = displayValue;
                displayValue = '0';
                previousOperand = "divide";
                return;
            }
        }
        if (e.target.dataset.action === "multiply") {
            if (previousValue === '0') {
                previousValue = displayValue.toString();
                displayValue = '0';
                previousOperand = "multiply";
                updateDisplay();
                return;
            }
            else {
                equate();
                updateDisplay();
                previousValue = displayValue;
                displayValue = '0';
                previousOperand = "multiply";
                return;
            }
        }
        if (e.target.dataset.action === "allclear") {
            displayValue = '0';
            previousValue = '0';
            previousOperand = "";
            updateDisplay();
            textbox.classList.toggle("overflow", false);
            textbox.classList.toggle("overflow-more", false);
            return;
        }
        if (e.target.dataset.action === "clear") {
            if (displayValue.length <= 1) {
                displayValue = '0';
                updateDisplay();
                return;
            }
            else {
                displayValue = displayValue.substr(0, displayValue.length - 1);
                updateDisplay();
                return;
            }
        }
        if (e.target.dataset.action === "calculate") {
            equate();
            updateDisplay();
            displayValue = '0';
            previousValue = '0';
            return;
        }
        if (e.target.dataset.action === "decimal") {
            if (displayValue.toString().includes(".")) {
                return;
            }
            else {
                displayValue = displayValue + ".";
                updateDisplay();
                return;
            }
        }

        else {
            if (previousOperand === '') {
                if (textbox.innerHTML === '0' && displayValue === '0') {
                    let value = e.target.innerHTML;
                    displayValue = value;
                    updateDisplay();
                    return;
                }
                else {
                    let value = e.target.innerHTML;
                    displayValue = displayValue + value;
                    updateDisplay();
                    return;
                }
            }
            if (textbox.innerHTML === '0' && displayValue === '0') {
                let value = e.target.innerHTML;
                displayValue = value;
                updateDisplay();
                return;
            }
            if (previousValue === '0') {
                if (textbox.innerHTML === '0' && displayValue === '0') {
                    let value = e.target.innerHTML;
                    displayValue = value;
                    updateDisplay();
                    return;
                }
                else {
                    let value = e.target.innerHTML;
                    displayValue = displayValue + value;
                    updateDisplay();
                    return;
                }
            }
            if (displayValue === '0') {
                let value = e.target.innerHTML;
                displayValue = value.toString();
                updateDisplay();
                return;
            }
            else {
                let value = e.target.innerHTML;
                displayValue = displayValue + value.toString();
                updateDisplay();
                return;
            }
        }
    }
});