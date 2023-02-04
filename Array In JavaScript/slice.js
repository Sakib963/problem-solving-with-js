const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

// The slice() method is a copying method. It does not alter this but instead returns a shallow copy that contains some of the same elements as the ones from the original array.
console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]