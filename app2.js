/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let num1 = null;
let num2 = null;
let total = null;
let operation = null;
/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');
let display = document.querySelector('.display')
let operators = document.querySelectorAll('.operator')
/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      // console.log(event.target.innerText);
      display.innerText += event.target.innerText
    
      // Future logic to capture the button's value would go here...
    });
  });
  

  operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
      // store the first value
      if (num1 === null){
        num1 = parseInt(display.innerText)
        console.log(num1)
        display.innerText = ""
      }
// store the second value
      if (num1 != null){
        num2 = parseInt(display.innerText)
        console.log(num2)
        display.innerText = ""
      }
      // capture the operations itself
      if (operator.innerText === '+'){
        operation = "add"
        console.log(operation)
      }else if(operator.innerText === '-'){
        operation = "subtract"
        console.log(operation)
      }else if(operator.innerText === '*'){
        operation = "multiply"
        console.log(operation)
      }else if(operator.innerText === '/'){
        operation = "division"
        console.log(operation)
      }
      
// getting the math functions to run when we click equal
      if (operator.innerText === '='){
        if (operation === 'add'){
          total = num1 + num2; 
        }else if (operation === 'subtract'){
          total = num1 - num2;
        }else if (operation === 'multiply'){
          total = num1 * num2;
        }else if (operation === 'division'){
          total = num1 / num2
        }
        console.log(total)
        display.innerText = total
      }
// getting the clear button to work
      if(operator.innerText === 'C'){
        num1 = null
        num2 = null
        operation = null
        total = null
        display.innerText = ''
      }
    })
  }
)
/*-------------------------------- Functions --------------------------------*/
