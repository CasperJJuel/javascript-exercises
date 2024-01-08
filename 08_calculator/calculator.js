const add = function(firstNum, secondNum) {
	return firstNum + secondNum;
};

const subtract = function(firstNum, secondNum) {
	return firstNum - secondNum;
};

const sum = function(number) {
  let inSum = 0;
  number.forEach(elem => {
    inSum += elem
  });
  return inSum
};

const multiply = function(number) {
  let inSum = 1;
  number.forEach(elem => {
    inSum *= elem
  });
  return inSum
};

const power = function(aP, bP) {
	return aP ** bP;
};

const factorial = function(number) {
  let sum = 1;
  if(number != 0) {
    for (let i = 1; i < (number + 1) ; i++) {
      sum = sum * i;
  }
  } else {
    return 1;
  }
  return sum
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
