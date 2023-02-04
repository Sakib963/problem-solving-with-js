// This method is used to merge two or more arrays. This does not change the existing array but instead returns a new array.

const arrayOne = ["a", "b", "c"];
const arrayTwo = ["d", "e", "f"];
const arrayConcat = arrayOne.concat(arrayTwo);

// console.log(arrayConcat);
// Result: [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// Concatenating three arrays
const arrayThree = ['g', 'h', 'i'];
const threeConcat = arrayOne.concat(arrayTwo, arrayThree);

// console.log(threeConcat);

// Concatenating values to an array

const alphaNumeric = arrayOne.concat(1, 2, 3);
console.log(alphaNumeric);
// Results: [ 'a', 'b', 'c', 1, 2, 3 ]

