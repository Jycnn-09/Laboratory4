const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    if (display.value.includes("/0")) {
      display.value = "Error";
    } else {
      display.value = eval(display.value);
    }
  } catch {
    display.value = "Error";
  }
}

document.addEventListener("keydown", function(event) {
  if (!isNaN(event.key) || "+-*/.".includes(event.key)) {
    appendValue(event.key);
  } else if (event.key === "Enter") {
    calculate();
  } else if (event.key === "Backspace") {
    backspace();
  } else if (event.key.toLowerCase() === "c") {
    clearDisplay();
  }
});