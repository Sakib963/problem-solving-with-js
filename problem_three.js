// 1. You are given three numbers 13, 79, and 45. Write a program that will print the
// largest number using if-else.
// 2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
// triangle is Isosceles or not using if-else.

// Isosceles => two sides are equal

var numOne = 13, numTwo = 79, numThree = 45;

if(numOne>numTwo && numOne>numThree)
{
    console.log("The largest number among three is: "+numOne);
}
if(numTwo>numOne && numTwo>numThree)
{
    console.log("The largest number among three is: "+numTwo);
}
else{
    console.log("The largest number among three is: "+numThree);
}

var firstSide = 9, secondSide = 7, thirdSide = 8;

if(firstSide == secondSide || firstSide == thirdSide || secondSide == thirdSide)
{
    console.log("Triangle is Isosceles")
}   
else{
    console.log("Triangle is Not Isosceles")
}

var ijk = 3;
if(ijk!==4)
{
    console.log("Joss")
}
console.log(6 >= 6);