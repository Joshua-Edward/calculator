// Globals used to track and pass the previous and current 
// values for the math functions
let aValue = 0;
let operatorSelection = '';
let bValue = 0;

// Math functions
const add = function(a, b) {
	const addTotal = a + b;
  return addTotal;
};

const subtract = function(a, b) {
	const subtractTotal = a - b;
  return subtractTotal;
};

const multiply = function(a, b) {
  const multiplyTotal = a * b;
  return multiplyTotal;
};

const divide = function(a, b) {
  const divideTotal = a / b;
  return divideTotal;
};

// Operate function to be run when = is clicked
const operate = function() {
  const aOperation = Number(aValue);
  const bOperation = Number(bValue);
  if (operatorSelection === '') {
    return bOperation;
  } else if (operatorSelection === 'add') {
    return add(aOperation,bOperation);
  } else if (operatorSelection === 'subtract') {
    return subtract(aOperation,bOperation);
  } else if (operatorSelection === 'multiply') {
    return multiply(aOperation,bOperation);
  } else if (operatorSelection === 'divide') {
    if (bOperation !== 0) {
      return divide(aOperation,bOperation);
    } else {
      alert("You cannot divide by zero.");
      operatorSelection = '';
      bValue = 0;
    };
  };
};

// Setting button elements
const zeroBtn = document.getElementById('zero');
const oneBtn = document.getElementById('one');
const twoBtn = document.getElementById('two');
const threeBtn = document.getElementById('three');
const fourBtn = document.getElementById('four');
const fiveBtn = document.getElementById('five');
const sixBtn = document.getElementById('six');
const sevenBtn = document.getElementById('seven');
const eightBtn = document.getElementById('eight');
const nineBtn = document.getElementById('nine');
const decimalBtn = document.getElementById('decimal');
const equalBtn = document.getElementById('equal');
const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
const delBtn = document.getElementById('del');
const clearBtn = document.getElementById('clear');
const topDisplay = document.getElementById('aValueDisplay');
const bottomDisplay = document.getElementById('bValueDisplay');


// Adding listeners to buttons
zeroBtn.addEventListener('click', appendNum);
oneBtn.addEventListener('click', appendNum);
twoBtn.addEventListener('click', appendNum);
threeBtn.addEventListener('click', appendNum);
fourBtn.addEventListener('click', appendNum);
fiveBtn.addEventListener('click', appendNum);
sixBtn.addEventListener('click', appendNum);
sevenBtn.addEventListener('click', appendNum);
eightBtn.addEventListener('click', appendNum);
nineBtn.addEventListener('click', appendNum);
decimalBtn.addEventListener('click', appendDecimal);
equalBtn.addEventListener('click', equalKeyOperation);
addBtn.addEventListener('click', setOperator);
subtractBtn.addEventListener('click', setOperator);
multiplyBtn.addEventListener('click', setOperator);
divideBtn.addEventListener('click', setOperator);
delBtn.addEventListener('click', deleteLastNum);
clearBtn.addEventListener('click', calcReset);

// Adds new digit to number when number buttons are clicked
function appendNum(e) {
  bValue = bValue === 0 ? Number(e.target.value) 
    : bValue + e.target.value;
  displayUpdater();
};

// Add decimal to number when clicked
function appendDecimal(e) {
  if (bValue.toString().includes(".") == false) {
    bValue = bValue + e.target.value;
    displayUpdater();
  };
};

// Sets wether add, subtract, multiply, or divide 
// operator will be used
function setOperator(e) {
  if (operatorSelection !== '') {
    operatorDisplay();
  };

  if (bValue !== 0) {
    aValue = operate();
    bValue = 0;
    operatorSelection = '';
    displayUpdater();
  };

  operatorSelection = e.target.value;
  operatorDisplay();
};

// Deletes the last number of the input
function deleteLastNum() {
  bValue = bValue.length > 1 ? bValue.slice(0, -1) : 0;
  displayUpdater();
};

// Resets all variables and operators of the calculator to 
// the default
function calcReset() {
  aValue = 0;
  if (operatorSelection !== '') {
    operatorDisplay();
  };
  operatorSelection = '';
  bValue = 0;
  displayUpdater();
};

// Runs the equaltion and resets what is needed when hitting 
// the equal button
function equalKeyOperation() {
  if (operatorSelection === '') {
    alert('Please select a math symbol')
  } else {
    aValue = operate();
    bValue = 0;
    operatorDisplay();
    operatorSelection = '';
    displayUpdater();
  };
};

// Updates the displays as they change when called
function displayUpdater() {
  const ReGex = /\.\d\d\d\d/;
  const aValueDisplay = aValue.toString();
  const bValueDisplay = bValue.toString();
  topDisplay.innerHTML = ReGex.test(aValueDisplay) 
    ? Number(aValueDisplay).toFixed(3) 
    : aValueDisplay;
  bottomDisplay.innerHTML = bValueDisplay;
};

// Updates the symbols element styling for add, subtract, multiply, and divide
function operatorDisplay() {
  const currentDisplay = `${operatorSelection}Display`;
  document.getElementById(currentDisplay).classList.toggle("activeDisplay");
};