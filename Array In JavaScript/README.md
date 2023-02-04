# Array In JavaScript
Today is 04-02-2023, I revised some of the functions or methods that I learned recently. Hopefully I will add this kind of note on String as well.

## Array.at()
The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.
```
let index = 2;
const value = arr.at(index);
```
We can use it for finding the last element of an array by using following code:
```
const lastItem = arr.at(-1);
```
It Will return last item of the array 
*** 
## Array.concat()
The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
```
const arrayOne = ["a", "b", "c"];
const arrayTwo = ["d", "e", "f"];
const arrayConcat = arrayOne.concat(arrayTwo);

console.log(arrayConcat);
// Result: [ 'a', 'b', 'c', 'd', 'e', 'f' ]
```
### Concatenating three arrays
```
const arrayOne = ["a", "b", "c"];
const arrayTwo = ["d", "e", "f"];
const arrayThree = ['g', 'h', 'i'];
const threeConcat = arrayOne.concat(arrayTwo, arrayThree);

console.log(threeConcat);
// Results: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
```
### Concatenating values to an array
```
const arrayOne = ["a", "b", "c"];
const alphaNumeric = arrayOne.concat(1, 2, 3);
console.log(alphaNumeric);
// Results: [ 'a', 'b', 'c', 1, 2, 3 ]
```
*** 
## Array.find()
This Method returns the first element in the array that satisfies the provided testing function. If the array has multiple value that satisfies the condition, it will provide the value it found first. It will check the array if any element has value that is greater than 10. If function found any value, it will return the value.
```
const numbers = [5, 12, 8, 130, 44];

const found = numbers.find(element => element > 10);

console.log(found);
// Expected output: 12
```
Finding an Object in an array by one of its properties. We can write use function as it's condition.
```
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
// Result: { name: 'Bangladesh', capital: 'Dhaka' }
```
### findIndex()
This method returns the index of the first element that satisfies the provided condition. **find()** function returns the value, and **findIndex()** returns the index.
```
console.log(countries.findIndex(isBangladesh));
// Result: 0
```
If we want a value that satisfies the condition but we want last value instead of last value. We can use **findLast()** function, and **findLastIndex()**.
*** 
## Array.includes()
The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate. 
```
const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers.includes(7));
console.log(numbers.includes(8));
// Result: true
//         false
```
We can check whether a value is in right index or not by using indexOf() function. Suppose we have an array "const names = ['name1', 'name2', 'name3', 'name4']", then we want to check if the value 'name3' is in the 2 index or not. Or this array contains 'name3' value in index value 2. If yes it will return true, otherwise it will return false.
```
const names = ['name1', 'name2', 'name3', 'name4'];
console.log(names.includes('name3', 2));
// Result: true
```
*** 
## Array.indexOf()
The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. It will return the first index value if the array has the same value multiple times. Iff we want to check the index of that value after an index, we can pass the index number as parameter. Check the code below for reference.
It will take the index number as parameter, the index number which you want to start your array. In this case, I said that the array will be start at index 2. So it will start array from 'Bolivia'. If I put the index value to 1, it will include the value in the index 1.
If we want to check the last index number of that value, we can use lastIndexOf() function. Also, we can check whether a value is repeating in the array or not by using both function.
```
const countries = ['Argentina', 'Belgium', 'Bolivia' , 'Bangladesh', 'Brazil', 'Belgium'];
console.log(countries.indexOf('Belgium'));
// Result: 1
console.log(countries.indexOf('Belgium', 2));
```
Now I want to check if a value is repeating or not. Simply I can use indexOf() and lastIndexOf() function,
```
if(countries.indexOf('Bangladesh') === countries.lastIndexOf('Bangladesh'))
{
    console.log("The Value is not repeating");
}
// Result: The Value is not repeating
```
*** 
## Array.join()
The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
```
const myName = ['Abdullah', 'Nazmus', 'Sakib'];

console.log(myName.join());
// Result: Abdullah,Nazmus,Sakib

console.log(myName.join(' '));
// Result: Abdullah Nazmus Sakib

console.log(myName.join('XX'));
// Result: AbdullahXXNazmusXXSakib
```
*** 
## Array.push()
The push() method adds one or more elements to the end of an array and returns the new length of the array.
```
const animals = ['Dog', 'Cow', 'Horse', 'Tiger'];
console.log(animals);
// Result: [ 'Dog', 'Cow', 'Horse', 'Tiger' ]

const lengthOfArray = animals.push('Rabbit')
console.log(lengthOfArray);
// Result: 5

animals.push('Cat', 'Chicken', 'Sheep', 'Pigs');
console.log(animals);
// Result: [ 'Dog', 'Cow', 'Horse', 'Tiger', 'Rabbit',  'Cat', 'Chicken', 'Sheep', 'Pigs']
```
*** 
## Array.pop()
The pop() method removes the last element from an array and returns that element. This method changes the length of the array. Unlike push method, it does not return the length of the array. Instead iw will return the value that is being removed.
```
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// Result: tomato
```
*** 
## Array.unshift()
The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
Just have to remember that when we are adding element to the array it will return the new length of that array.
```
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// Result: 5

console.log(array1);
// Result: [4, 5, 1, 2, 3]
```
*** 
## Array.shift()
The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
Same way, when an item is being removed by using pop or shift function, it will return the value that is being removed.
```
const array1 = [78, 2, 99];

console.log(array1.shift());
// Result: 78
```
*** 
## Array.reverse()
This method reverse the array and returns the reference to the same array. The first element is now becoming the last element and last element becoming the first element.
```
const array1 = ['one', 'two', 'three'];
console.log(array1);
// Result: [ 'one', 'two', 'three' ]

array1.reverse();
console.log(array1);
// Result: [ 'three', 'two', 'one' ]
```
*** 
## Array.slice()
The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
```
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]
```
The slice() method is a copying method. It does not alter this but instead returns a shallow copy that contains some of the same elements as the ones from the original array.
```
console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
```
*** 
## Array.splice()
The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice()
It will return the deleted values.
```
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.splice(1, 3));
// Result: [ 2, 3, 4 ]

numbers.splice(1, 0, 55, 66, 77);

console.log(numbers);
// Result: [ 1, 55, 66, 77, 5 ]
```
*** 
## Array.sort()
The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The the elements are sorted in ascending, ASCII character order.
```
const numbers = [5, 1, 3, 78, 2, 6];

console.log(numbers.sort());
// Result: [ 1, 2, 3, 5, 6, 78 ]
```