const display = document.getElementById("display");

let justCalculated = false;

function appendValue(value) {
  if (justCalculated) {
    if (!isOperator(value)) {
      display.value = "";
    }
    justCalculated = false;
  }

  if (isOperator(value)) {
    handleOperator(value);
    return;
  }

  display.value += value;
}

function isOperator(value) {
  return ["+", "-", "*", "/", "."].includes(value);
}

function handleOperator(operator) {
  const lastChar = display.value.slice(-1);

  if (display.value === "" && operator !== "-") {
    return;
  }

  if (isOperator(lastChar)) {
    display.value = display.value.slice(0, -1) + operator;
  } else {
    display.value += operator;
  }

  justCalculated = false;
}

function clearDisplay() {
  display.value = "";
  justCalculated = false;
}

function backspace() {
  display.value = display.value.slice(0, -1);
  justCalculated = false;
}

function calculate() {
  try {
    if (!display.value) return;

    const result = Function("return " + display.value)();

    display.value = Number.isFinite(result) ? result : "Error";
    justCalculated = true;
  } catch {
    display.value = "Error";
    justCalculated = true;
  }
}

/* Keyboard Support */
document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (!isNaN(key) || "+-*/.".includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    backspace();
  } else if (key.toLowerCase() === "c") {
    clearDisplay();
  }
});
