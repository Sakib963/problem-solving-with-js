function getFactorial(number)
{
    let factorial = 1;
    if(number<0)
    {
        console.log("Factorial of negative number doesn't exists.")
    }
    // For Loop
    // for (let i = 1; i <= number; i++)
    // {
    //     factorial*=i;
    // }

    // While Loop and Decremental Loop
    while(number>0)
    {
        factorial*=number;
        number--;
    }



    console.log("Factorial Of "+number+" is: "+factorial);
}


const findFactorial = 5;

getFactorial(findFactorial);