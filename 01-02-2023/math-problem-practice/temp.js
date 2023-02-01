let first = 5, second = 7;

console.log(first, second)

// Swapping value using temp variable
// let temp = first;
// first = second;
// second = temp;
// console.log(first, second)

// Swapping value with destructuring
// [ first, second ] = [ second, first ];
// console.log(first, second);

// Swapping value without temp variable
first = first + second;
second = first - second;
first = first - second;
console.log(first, second);