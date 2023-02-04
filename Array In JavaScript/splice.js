const numbers = [1, 2, 3, 4, 5];

console.log(numbers.splice(1, 3));
// Result: [ 2, 3, 4 ]

numbers.splice(1, 0, 55, 66, 77);

console.log(numbers);
// Result: [ 1, 55, 66, 77, 5 ]