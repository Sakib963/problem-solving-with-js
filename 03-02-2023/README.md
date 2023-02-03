# Notes For JavaScript
This note contains things I learned until 4th february, 2023. I wish to add more, but that will appear on another file with according date. Best of luck to me.

## Variables and Data Types in JavaScript
* JavaScript is a high-level, interpreted programming language. It makes the web pages more interactive. We can use JavaScript to make animations.
* Variable is like a box that store things. There are five types of variables number, string, boolean, null and undefined. Though, primarily variables are two types: 1. Primitive Data, 2. Non-Primitive Data. Non primitive data types are Objects, arrays etc.
* JavaScript keywords are reserved words and they cannot be used as variable name and function name.
* Camel Case, Snake Case and Pascal Case are the three most common naming convention in JavaScript.
* Variable names are Case Sensitive. 

## Math Operation in JavaScript
* Four types of mathematical operations: addition, subtraction, multiplication and division. (+, -, *, /).
* Shorthand mathematical operations (+=, -=, *=, /=, ++, --)
* We can join two strings together using concatenation operator, **+**
* Using the modulus operator, **%**, we can find the remainder of a division.

## Random functionality or methods in JavaScript
* We can convert variable type string to integer type. We have to use **parseInt()** Function.
* We can convert variable type string to float type. We have to use **parseFloat()** Function.
* If we want to know the type of a variable, we can use **typeof** function. It will return the type of variable.
* The **startsWith()** method determines whether a string begins with the characters of a specified string. It returning true or false as output.
* The **concat()** method is used to merge two or more arrays.

## Array in JavaScript
* We can get the array length using **ArrayName.length** function, It will return total length of an array.
* The **indexOf()** method returns the index (position) of a specific value.
* We can replace an element in an array with the help of array indices. e.g. **arrayName[index] = newValue;**
* The **push()** method adds new items to the end of an array.
* The **pop()** method removes last element from an array.
* The **includes()** method returns true if an array contains a specified value.
* The **splice()** method changes the contents of an array by removing and/or adding new elements in place.
* The **isArray()** method determines whether the passed value is an Array.

## Conditional Logic in JavaScript
* Comparison operators are used to test for **true** or **false**.
* The **if Statement** executes if the condition is **true**.
* The **else Statement** executes if the condition is false.
* Logical operator ,**&&**, returns true if **both statement are true** and logical operator, **||**, return **true** if **one of the statement is true**.
* **We write multi stage conditions if-else when we have multiple conditions**.
* A nested conditional statement is **an if or if else statement** inside another **if else statement**.


## Loop in JavaScript
* A **while loop** is used to repeat a specific block of code until a condition is met.
* A **for loop** iterates through a block of code a number of times.
* The **break** statement is used to terminate the loop immediately. The **continue** statement is used to skip the current iteration of the loop.

## Function in JavaScript
* A block of code
* A set of statements that performs a task when it is called
* Maintains a relationship with input and output.

## Object in JavaScript
* The object type is used to store various collection and more complex entities.
    const object = {
        hello: 'World'
        key: value
    }