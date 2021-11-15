const buttons = document.querySelector('.calc-buttons');
const screen = document.querySelector('.calc-screen');

let result = 0;
let screenValue = '0';
let operator = '=';

screen.innerHTML = screenValue.toString();

buttons.addEventListener("click", buttonHandler);

function buttonHandler(event) {
  const btn = event.target;
  const isButton = btn.tagName === 'BUTTON';
  if(isButton) {
    if(btn.classList.contains('number')) {
      screenValue = screenValue === '0' ? btn.innerHTML : screenValue + btn.innerHTML;
      screen.innerHTML = screenValue;
    }
    else if(btn.classList.contains('operator')) {
      result = calc();
      operator = btn.innerHTML;
      screenValue = '0';
      screen.innerHTML = result.toString()
    }
    else if(btn.classList.contains('backspace')) {
      screenValue = Math.floor(parseInt(screenValue) / 10).toString();
      screen.innerHTML = screenValue;
    }
    else if(btn.classList.contains('clear')) {
      screenValue = '0';
      result = 0;
      operator = '=';
      screen.innerHTML = screenValue;
    }
    ;
  }
}

function calc() {
  switch(operator) {
    case '+':
      return result + parseInt(screenValue);
    case '×':
      return result * parseInt(screenValue);
    case '÷':
      return result / parseInt(screenValue);
    case '-': 
      return result - parseInt(screenValue);
    case '=':
      if(screenValue === '0')
        return result;
    default:
      return parseInt(screenValue);
  }
}