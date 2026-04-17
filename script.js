const display = document.getElementById("display");

let justCalculated = false;

function appendValue(value) {
  if (justCalculated && !isOperator(value)) {
    display.value = "";
    justCalculated = false;
  }

  display.value += value;
  justCalculated = false;
}

function isOperator(value) {
  return ["+", "-", "*", "/", "."].includes(value);
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
