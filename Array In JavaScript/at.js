const arr = [5, 12, 8, 130, 44];

let index = 2;

console.log(arr.at(-3));

index = -1;
console.log(arr.at(index));

// We can use it for finding the last element of an array by using following code:
const lastItem = arr.at(-1);
// It Will return last item of the array 