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
let aValue = 0;
let operatorSelection = 'add';
let bValue = 0;

const operate = function(aValue, bValue) {
  const aOperation = aValue;
  const bOperation = bValue;
  console.log(typeof(operatorSelection));
  if (operatorSelection === 'add') {
    return add(aOperation,bOperation);
  } else if (operatorSelection === 'subtract') {
    return subtract(aOperation,bOperation);
  } else if (operatorSelection === 'multiply') {
    return multiply(aOperation,bOperation);
  } else if (operatorSelection === 'divide') {
    return divide(aOperation,bOperation);
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
equalBtn.addEventListener('click', operate);
addBtn.addEventListener('click', operatorSelect);
subtractBtn.addEventListener('click', operatorSelect);
multiplyBtn.addEventListener('click', operatorSelect);
divideBtn.addEventListener('click', operatorSelect);
delBtn.addEventListener('click', deleteLastNum);
clearBtn.addEventListener('click', calcReset);

function appendNum(e) {
}

function appendDecimal(e) {
}

function operatorSelect(e) {
}

function deleteLastNum(e) {
}

function calcReset(e) {
}