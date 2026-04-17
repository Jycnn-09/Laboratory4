const display = document.getElementById("display");

let justCalculated = false;

function getValue() {
  return display.value === "0" ? "" : display.value;
}

function setValue(val) {
  display.value = val === "" ? "0" : val;
}

function appendValue(value) {
  let current = getValue();

  if (justCalculated && !isOperator(value)) {
    current = "";
    justCalculated = false;
  }

  current += value;
  setValue(current);
  justCalculated = false;
}

function isOperator(value) {
  return ["+", "-", "*", "/", "."].includes(value);
}

function clearDisplay() {
  display.value = "0";
  justCalculated = false;
}

function backspace() {
  let current = getValue();

  current = current.slice(0, -1);
  setValue(current);
  justCalculated = false;
}

function calculate() {
  try {
    let expression = getValue();

    if (!expression) {
      display.value = "0";
      return;
    }

    const result = Function("return " + expression)();

    display.value = Number.isFinite(result) ? result : "Error";
    justCalculated = true;
  } catch {
    display.value = "Error";
    justCalculated = true;
  }
}
