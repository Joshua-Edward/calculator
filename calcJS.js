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
let operatorSelection = '';
let bValue = 0;

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

// button functions
function appendNum(e) {
  if (bValue === 0) {
    bValue = Number(e.target.value);
  } else {
    bValue = bValue + e.target.value;
  };
  displayUpdater();
};

function appendDecimal(e) {
  if (bValue.toString().includes(".") == false) {
    bValue = bValue + e.target.value;
    displayUpdater();
  };
};

function setOperator(e) {
  if (operatorSelection !== '') {
    const currentDisplay = `${operatorSelection}Display`;
    document.getElementById(currentDisplay).classList.toggle("activeDisplay");
  };

  if (bValue !== 0) {
    aValue = operate();
    bValue = 0;
    operatorSelection = '';
    displayUpdater();
  };

  operatorSelection = e.target.value;

  const newDisplay = `${operatorSelection}Display`;
  document.getElementById(newDisplay).classList.toggle("activeDisplay");
};

function deleteLastNum() {
  if (typeof bValue == 'number') {
    bValue = 0;
  } else if (bValue.length !== 0 & bValue !== 0) {
    bValue = bValue.slice(0, -1);
  };
  displayUpdater();
};

function calcReset() {
  aValue = 0;
  if (operatorSelection !== '') {
    const currentDisplay = `${operatorSelection}Display`;
    document.getElementById(currentDisplay).classList.toggle("activeDisplay");
  };
  operatorSelection = '';
  bValue = 0;
  displayUpdater();
};

function equalKeyOperation() {
  if (operatorSelection === '') {
    alert('Please select a math symbol')
  } else {
    aValue = operate();
    bValue = 0;
    const currentDisplay = `${operatorSelection}Display`;
    document.getElementById(currentDisplay).classList.toggle("activeDisplay");
    operatorSelection = '';
    displayUpdater();
  };
};

function displayUpdater() {
  const ReGex = /\.\d\d\d\d/;
  const aValueDisplay = aValue.toString();
  console.log(typeof aValueDisplay);
  const bValueDisplay = bValue.toString();
  console.log(typeof aValueDisplay);
  if (ReGex.test(aValueDisplay)) {
    topDisplay.innerHTML = Number(aValueDisplay).toFixed(3);
  } else {
    topDisplay.innerHTML = aValueDisplay;
  };
  bottomDisplay.innerHTML = bValueDisplay;
};
