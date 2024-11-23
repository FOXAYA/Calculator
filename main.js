const input = document.querySelector("#display");

function appendToDisplay(ele) {
  input.value += ele;
}
function calculate(){
  try{
    input.value = eval(input.value);
  }
  catch(error){
    input.value = "Erorr"
  }
}

 function clearDisplay(){
      input.value = "";
 }
