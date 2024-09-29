/*-------------------------------- steps --------------------------------*/
/*
- User chooses a bunch of numbers
- User presses + - / or *
- User chooses a bunch of other numbers
- User presses =
- we do the calculations
- we delete the input
- we present the number
*/

/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let isFirstNumber = true;
let firstNumber = ""
let operator
let secondNumber = ""
let answer

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');
const display = document.querySelector(".display");

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    if(event.target.classList.contains('number')){
      catchNumber(event);
    }

    else if(event.target.classList.contains('operator')){
      catchOperator(event);
    }
    
    else if(event.target.classList.contains('equals')){
      catchEquals(event);
    }
  });
});

/*-------------------------------- Functions --------------------------------*/

const catchNumber = (number) => {
  if(isFirstNumber){
    firstNumber+=number.target.textContent
    display.textContent=firstNumber;
  }

  else if(!isFirstNumber){
    secondNumber+=number.target.textContent
    display.textContent+=secondNumber;
  }

  else {
    display.textContent="something went wrong";
  }
}

const catchOperator = (op) => {
  if (op.target.textContent==="C"){
    clear();
  }

  else {
    isFirstNumber=false;
    operator=op.target.textContent
    display.textContent+=operator;
  }
}

const clear = () => {
  isFirstNumber=true;
  firstNumber=""
  secondNumber=""
  display.textContent = ""
}

const catchEquals = (equals) => {
  if(operator==="+"){
    answer=Number(firstNumber)+Number(secondNumber)
    display.textContent=answer
  }
  else if(operator==="-"){
    answer=Number(firstNumber)-Number(secondNumber)
    display.textContent=answer
  }
  else if(operator==="*"){
    answer=Number(firstNumber)*Number(secondNumber)
    display.textContent=answer
  }
  else if(operator==="/"){
    answer=Number(firstNumber)/Number(secondNumber)
    display.textContent=answer
  }
}