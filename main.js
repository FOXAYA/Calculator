const input = document.querySelector("#display");

function appendToDisplay(ele) {
  input.value += ele;
}
function calculate() {
  try {
    input.value = eval(input.value);
  } catch (error) {
    input.value = "Erorr";
  }
}

function clearDisplay() {
  input.value = "";
}
function clearLastValue() {
  input.value = input.value.slice(0, -1);
}
function sqrtValue() {
  try {
    input.value = Mathgit .sqrt(Number(input.value));
  } catch (error) {
    input.value = "Error";
  }
}