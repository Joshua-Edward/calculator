//Math functions
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

//Variables and operate function to be run when = is clicked
let aValue = 30;
let operatorSelection = 'add';
let bValue = 5;

const operate = function() {
  const aOperation = Number(aValue);
  const bOperation = Number(bValue);
  if (operatorSelection === 'add') {
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
      aValue = 0;
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

// button functions
function appendNum(e) {
  if (bValue === 0) {
    bValue = e.target.value;
  } else {
  bValue = bValue + e.target.value;
};
  console.log(bValue);
};

function appendDecimal(e) {
  if (bValue.includes(".") == false) {
    bValue = bValue + e.target.value
  };
};

function setOperator(e) {
  if (bValue !== 0) {
    aValue = operate();
    bValue = 0;
    operatorSelection = '';
  };
  operatorSelection = e.target.value;
  console.log(aValue);
  console.log(operatorSelection);
  console.log(bValue);
};

function deleteLastNum() {
  if (bValue.length !== 0) {
    bValue = bValue.slice(0, -1);
  }
};

function calcReset() {
  aValue = 0;
  operatorSelection = '';
  bValue = 0;
};

function equalKeyOperation() {
  aValue = operate();
  bValue = 0;
  operatorSelection = '';
};