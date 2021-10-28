let showResult = document.getElementById("displayresult");
let power = false;

function addToCalculator(value) {
  showResult.value += value;
  if (power) {
    let numbers = showResult.value.split("^");
    showResult.value = Math.pow(numbers[0], numbers[1]);
    power = false;
  }
}

function reset() {
  showResult.value = "";
}

function finilize() {
  showResult.value = eval(showResult.value);
}

function mathCalculate(mathFunction) {
  if (mathFunction == "power") {
    power = true;
    showResult.value += "^";
  } else {
    showResult.value = Math[mathFunction](showResult.value);
  }
}
