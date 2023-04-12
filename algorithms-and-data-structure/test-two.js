// 2. Create a hashmap (or a simple object in PHP) that contains the elementary functions of addition, subtraction, multiplication, and division.
// a. Take into account that the division must not allow 0 dividend
// b. The sum function allows an array as an input parameter and adds all its elements.
// c. The subtraction function allows an array as an input parameter and subtracts all its elements.
// d. Multiplication Function - Ditto
// e. The division function accepts two parameters: a and b.

function checkArrayInput(arr) {
  if (!Array.isArray(arr)) throw new Error('Input must be an array');
  if (arr.length === 0) throw new Error('Input array must not be empty');
}

const sum = arr => {
  checkArrayInput(arr);
  return arr.reduce((acc, num) => acc + num, 0);
};

const subtraction = arr => {
  checkArrayInput(arr);
  return arr.slice(1).reduce((acc, num) => acc - num, arr[0]);
};

const multiplication = arr => {
  checkArrayInput(arr);
  return arr.reduce((acc, num) => acc * num, 1);
};

const division = (a, b) => {
  if (b === 0) throw new Error('Dividend must not be 0');
  return a / b;
};

const elementaryFunctions = new Map([
  ['sum', sum],
  ['subtraction', subtraction],
  ['multiplication', multiplication],
  ['division', division]
]);

// Example usage:
const arr = [1, 2, 3, 4];

console.log('sum:', elementaryFunctions.get('sum')(arr));
console.log('subtraction:', elementaryFunctions.get('subtraction')(arr));
console.log('multiplication:', elementaryFunctions.get('multiplication')(arr));
console.log('division:', elementaryFunctions.get('division')(10, 2));
