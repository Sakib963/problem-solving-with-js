// This Method returns the first element in the array that satisfies the provided testing function.
// It will check the array if any element has value that is greater than 10. If function found any value, it will return the value.
// If the array has multiple value that satisfies the condition, it will provide the value it found first.
const numbers = [5, 12, 8, 130, 44];

const found = numbers.find(element => element > 10);

console.log(found);
// Expected output: 12

// --------------- Finding an Object ------------------
// Finding an Object in an array by one of its properties. We can write use function as it's condition.
const countries = [
    { name: 'Bangladesh', capital: 'Dhaka'},
    { name: 'Bhutan', capital: 'Thimphu'},
    { name: 'Germany', capital: 'Berlin'},
];

function isBangladesh(countries)
{
    return countries.name == "Bangladesh";
}
console.log(countries.find(isBangladesh));
console.log(countries.findIndex(isBangladesh));
// Result: { name: 'Bangladesh', capital: 'Dhaka' }
// Result: 0
