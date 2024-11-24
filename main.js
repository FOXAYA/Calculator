const calculator = document.getElementById("calculator");
const displayArea = document.getElementById("display");

calculator.addEventListener("click", (ele) => {
  if (ele.target.nodeName == "BUTTON") {
    switch (ele.target.textContent) {
      case "CE":
        clearDisplay();
        break;
      case "DEL":
        clearLastValue();
        break;
      case "=":
        calculate();
        break;
      default:
        appendToDisplay(ele.target.textContent);
    }
  }
});

/*
     *>>>>>>>>>>>>>>>>>>>>>>> FUNCTIONS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 */

     function appendToDisplay(ele) {
  displayArea.value += ele;
}

function calculate() {
  try {
    displayArea.value = eval(displayArea.value);
  } catch (error) {
    displayArea.value = displayArea.value;
  }
}

function clearDisplay() {
  displayArea.value = "";
}
function clearLastValue() {
  displayArea.value = displayArea.value.slice(0, -1);
}
