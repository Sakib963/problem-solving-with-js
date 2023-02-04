// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. It will return the first index value if the array has the same value multiple times. Iff we want to check the index of that value after an index, we can pass the index number as parameter. Check the code below for reference.
// It will take the index number as parameter, the index number which you want to start your array. In this case, I said that the array will be start at index 2. So it will start array from 'Bolivia'. If I put the index value to 1, it will include the value in the index 1.
// If we want to check the last index number of that value, we can use lastIndexOf() function. Also, we can check whether a value is repeating in the array or not by using both function.

const countries = ['Argentina', 'Belgium', 'Bolivia' , 'Bangladesh', 'Brazil', 'Belgium'];
console.log(countries.indexOf('Belgium'));
// Result: 1
console.log(countries.indexOf('Belgium', 2))

if(countries.indexOf('Bangladesh') === countries.lastIndexOf('Bangladesh'))
{
    console.log("The Value is not repeating");
}
// Result: The Value is not repeating
