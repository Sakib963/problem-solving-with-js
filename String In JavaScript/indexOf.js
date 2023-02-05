const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);
// console.log(indexOfFirst);
// Result: 40


// const str = 'Hello, we are counting letter e'

// console.log(paragraph.indexOf('e', 3));
// Result: 2

const str = 'Hello, we are counting letter e'
let count = 0;
let position = str.indexOf("e");

while (position !== -1) {
  count++;
  position = str.indexOf("e", position + 1);
}

console.log(count); // 6