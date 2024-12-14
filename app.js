/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let runningSum = 0;
let windowNum = 0;
let operator = null;
/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');


const display = document.getElementById('display');
/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const buttonValue = event.target.innerText;
  
      if (buttonValue === "C") {
        // Clear the display
        display.value = "";
        runningSum = 0; // Reset calculations
        windowNum = 0;
        operator = null;
      } else if (buttonValue === "=") {
        // Perform calculation when "=" is clicked
        calculate();
        display.value = runningSum; // Show the result
        windowNum = 0; // Reset current number
      } else if (["+", "-", "*", "/"].includes(buttonValue)) {
        // Set the operator and save the current number
        operator = buttonValue;
        runningSum = parseFloat(display.value); // Save the current total
        display.value = ""; // Clear display for next number
      } else {
        // Append number or decimal to the display
        display.value += buttonValue;
      }
    });
  });
  
  
/*-------------------------------- Functions --------------------------------*/
function calculate() {
    windowNum = parseFloat(display.value); // Get the second number
  
    if (operator === "+") {
      runningSum += windowNum;
    } else if (operator === "-") {
      runningSum -= windowNum;
    } else if (operator === "*") {
      runningSum *= windowNum;
    } else if (operator === "/") {
      if (windowNum === 0) {
        display.value = "Error"; // Handle division by zero
        runningSum = 0;
        operator = null;
        return;
      }
      runningSum /= windowNum;
    }
  }






