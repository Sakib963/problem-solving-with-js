// You and your friends Tom, Jane, Peter and John got their final exam results. Your total
// score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
// and John’s total score is 40. The grading chart is
// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade

// Write a program to find your and your friends’ grades using if-else.
var myScore = 85, tomScore = 66, janeScore = 95, peterScore = 56, johnScore = 40;

if(tomScore >= 80)
{
    console.log("Grade A");
}
else if(tomScore>=60 && tomScore<80)
{
    console.log("Grade B");
}
else if(tomScore>=50 && tomScore<60)
{
    console.log("Grade C");
}
else if(tomScore>=40 && tomScore<50)
{
    console.log("Grade D");
}
else{
    console.log("Grade F");
}
