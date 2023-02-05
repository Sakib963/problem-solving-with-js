# String In JavaScript
Okay, I have revised string in JS. Here's the note that I have taken for myself. I followed the [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) for reference. I'm really enjoying the journey with JS.\
\
Alongside this, I have to work on some data structure and algorithm stuffs. Okay bye...
***
## String.concat()
The concat() method concatenates the string arguments to the calling string and returns a new string.
```
const str1 = 'Java';
const str2 = 'Script';

console.log(str1.concat(str2));
// Result: JavaScript

console.log(str1.concat(' ', str2));
// Result: Java Script

console.log(str2.concat(str1));
// Result: ScriptJava
```
***
## String.endsWith()
The endsWith() method determines whether a string ends with the characters of a specified string, It will return true or false.
```
const str = 'Cats are the best';

console.log(str.endsWith("best"));
// Result: True
```
We can pass end position as parameter and it will check whether that position is ending with the value that has been passed as arguments.
![endsWith](https://user-images.githubusercontent.com/66853064/216793577-b56c89a4-c49b-47ef-b159-84d748a2d2bf.PNG)
```
console.log(str.endsWith('are', 8));
// Result: True
```
***
## String.includes()
This methods performs a case sensitive search to determine whether one string may be found within another string, returning true or false as result.
```
const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.includes('fox'));
// Result: true
```
We can also pass position as parameter within this function. It will take the position number where the string has started.
![includes](https://user-images.githubusercontent.com/66853064/216793429-98a3c465-3c91-41a3-9fa4-193947a1e65e.PNG)
```
console.log(sentence.includes('brown', 10));
// Result: true
```
***
## String.indexOf()
The indexOf() method, given one argument: a substring to search for, searches the entire calling string, and returns the index of the first occurrence of the specified substring.
```
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);
console.log(indexOfFirst);
// Result: 40
```

We can pass index number where it should start search for the provided string. Example below:
```
const str = 'Hello, we are counting letter e'

console.log(paragraph.indexOf('e', 3));
// Result: 2
```
### Using indexOf() to count occurrences of a letter in a string:
The following example sets count to the number of occurrences of the letter e in the string str:
```
const str = 'Hello, we are counting letter e'
let count = 0;
let position = str.indexOf("e");

while (position !== -1) {
  count++;
  position = str.indexOf("e", position + 1);
}

console.log(count); // 6
```

***
## String.repeat()
The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
```
const myName = 'Sakib ';
const newString = myName.repeat(5)

console.log(myName);
// Result: Sakib 

console.log(newString);
// Result: Sakib Sakib Sakib Sakib Sakib 
```
***
## String.replace()
An object that supports searching for and replacing matches within a string. Passes a string and replaceValue to the [Symbol.replace] method on searchValue. This method is expected to implement its own replacement algorithm.
```
const str = 'I love you so much. I will do anything for you';

console.log(str.replace("you", "money"));
// Result: I love money so much. I will do anything for you
```
### The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement. 
```
const str = 'I love you so much. I will do anything for you';

console.log(str.replaceAll("you", "money"));
// I love money so much. I will do anything for money
```
***
## String.slice()
The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
```
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, -5));
// Expected output: "lazy"
```
***
## String.toLowerCase()
Converts all the alphabetic characters in a string to lowercase.
```
const welcome = "I'm welcoming you to this note, If you are READING AGAIN";

console.log(welcome.toLowerCase());
// Result: i'm welcoming you to this note, if you are reading again
```
***
## String.toUpperCase()
Converts all the alphabetic characters in a string to uppercase.
```
const welcome = "I'm welcoming you to this note, If you are READING AGAIN";

console.log(welcome.toUpperCase());
// Result: I'M WELCOMING YOU TO THIS NOTE, IF YOU ARE READING AGAIN
```
***
## String.toString()
The toString() method returns a string representing the specified string value.
```
const stringObj = new String('Nicely Done');

console.log(stringObj);
// Result: [String: 'Nicely Done']

console.log(stringObj.toString());
// Result: Nicely Done
```
***
## String.trim()
The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string.
```
const greeting = '   Hello world!   ';

console.log(greeting);
// Result: "   Hello world!   ";

console.log(greeting.trim());
// Result: "Hello world!";

console.log(greeting.trimStart());
// Result: "Hello world!   ";

console.log(greeting.trimEnd());
// Result: "   Hello world!";
```