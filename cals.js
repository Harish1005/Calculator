let calculation = localStorage.getItem('calculation') || '';

onKeyUp();

function updateCalculation(value) {
  calculation += value;
  onKeyUp();
  localStorage.setItem('calculation', calculation);
}

// Optional: you can also create a function in order
// to reuse this code.
function onKeyUp(){
   document.querySelector(".result").innerHTML = calculation;
}