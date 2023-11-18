let firstNum = null;
let operator = null;
let secondNum = false;

function displayNum(num) {
    let display = document.getElementById("display");
    if (secondNum === true) {
        display.value = num;
        secondNum = false;
    } else {
        if (display.value === "0") {
            display.value = num;
        } else {
            display.value += num;
        }
    }
}

function calculate(op) {
    let display = document.getElementById("display");
    if (firstNum === null) {
        firstNum = parseFloat(display.value);
    }
    operator = op;
    secondNum = true;
}

function clearDisplay() {
    firstNum = null;
    operator = null;
    secondNum = false;
    display.value = "0";
}

function performCalculation() {
    let display = document.getElementById("display");
    if (firstNum !== null && operator !== null && secondNum !== true) {
        var result = 0;
        secondNum = parseFloat(display.value);
        switch (operator) {
            case "+":
                result = firstNum + secondNum;
                break;
            case "-":
                result = firstNum - secondNum;
                break;
            case "*":
                result = firstNum * secondNum;
                break;
            case "/":
                result = firstNum / secondNum;
                break;
        }
        display.value = result;
        firstNum = result;
    }
}
function calculate(op) {
  var display = document.getElementById("display");
  if (op === ".") {
      if (display.value.indexOf(".") === -1) {
          display.value += ".";
      }
  } else {
      if (firstNum === null) {
          firstNum = parseFloat(display.value);
      }
      operator = op;
      secondNum = true;
  }
}

