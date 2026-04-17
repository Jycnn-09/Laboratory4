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
    if (display.value.includes("/0")) {
      display.value = "Error";
    } else {
      display.value = eval(display.value);
    }
    justCalculated = true;
  } catch {
    display.value = "Error";
    justCalculated = true;
  }
}

document.addEventListener("keydown", function(event) {
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
