const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numArr) {
  let result = 0;
  for (let i = 0; i < numArr.length; i++) {
    //console.log(numArr[i]);
    result += numArr[i];
  }
  return result;
};

const multiply = function (numArr) {
  // iterate through array
  // take that result and multiply with index val
  let result = 1;
  for (let i = 0; i < numArr.length; i++) {
    //console.log(numArr[i]);
    result *= numArr[i];
  }
  return result;
};

const power = function (base, exp) {
  return base ** exp;
};

const factorial = function (num) {
  // init result
  let result = 1;
  // iterate from 1 to num
  for (let i = 1; i <= num; i++) {
    // multiple each consecutive value
    result *= i;
  }
  // return result
  return result;
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
