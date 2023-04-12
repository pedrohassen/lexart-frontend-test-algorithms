// 1. Create an algorithm that runs through a one-dimensional array containing letters and numbers: [ “a”, 10, “b”, “hola”, 122, 15]
// a. Get an array containing just the letters
// b. Get an array containing just the numbers
// c. Get the highest number from the array above

const getInfoFromArray = (array) => {
  const lettersArray = [];
  const numbersArray = [];
  let highestNumber = 0;

  array.filter((item) => {
    if (typeof item === 'number') numbersArray.push(item);
    if (typeof item === 'string') lettersArray.push(item);
  })

  highestNumber = Math.max(...numbersArray);

  return {
    lettersArray,
    numbersArray,
    highestNumber
  }
}

const array = ['a', 10, 'b', 'hola', 122, 15];

// Example usage:
console.log('1:', getInfoFromArray(array));
