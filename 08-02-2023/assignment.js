/* 
    Problem 1: Let’s play a mind game
    ---------------------------------
    This function will take a number as parameter then It will perform operations below:
    1. Multiply number by 3
    2. Add 10 to the result
    3. Divide by 2
    4. Subtract 5
    Then it will return the final result.

    Before everything, it will check whether the parameter is valid positive number or not,
    if not then it will return a error message.
*/
function mindGame(number)
{
    if(typeof number == 'number' && number >= 0)
    {
        const afterMultiplication = number * 3;

        const afterAddition = afterMultiplication + 10;
    
        const afterDivision = afterAddition / 2;
    
        const result = afterDivision - 5;
    
        return result;
    }
    else
    {
        return "Please enter a valid positive number";
    } 
    
}

/*
    Problem 2: Finding even or odd
    ------------------------------
    This function will take a string as parameter and it will check the length of that string.
    If the length of the string is even it will return the message 'even', otherwise it will return 'odd'
    Similar to previous function, first it will check whether the parameter is a string or not, if not then it will print an error message.
*/
function evenOdd(message)
{
    if(typeof message == 'string')
    {
        const length = message.length;

        if( length % 2 == 0)
        {
            return 'even';
        }
        else
        {
            return 'odd';
        }
    }
    else
    {
        return "Please input a valid string";
    }
    
}


/*
    Problem 3: Is Less or Greater than seven
    ----------------------------------------
    This function will take a number as parameter. If the parameter is a valid number then it will subtract the number by 7, and store it to 'difference' variable. Then it will check the value of difference is less than 7 or not.
    If yes, then it will return the number, otherwise it will return the input number multiplied by 2.
    IF the parameter is not a valid number then it will return an error message.
*/
function isLGSeven(number)
{
    if(typeof number == 'number')
    {
        const difference = number - 7;
        if(difference < 7)
        {
            return difference;
        }
        else
        {
            return number * 2;
        }
    }
    else
    {
        return "Please Enter A Valid Number";
    }
}

/*
    Problem 4: Finding Bad data
    ---------------------------
    It will take an array as parameter and check whether the inputted value is an array or not, if not then it will return an error message.
    It will start a for loop to traverse the array, inside the loop if any element of array contains negative value it will increase badDataCount variable value by 1. After successfully traversing the array, it will return the value of badDataCount variable.
    In other words, this function will return the number of element contains negative value or bad data. 
*/
function findingBadData(numbers)
{
    if(Array.isArray(numbers))
    {
        let badDataCount = 0;

        for (let i =0; i < numbers.length; i++)
        {
            if(numbers[i] < 0)
            {
                badDataCount++;
            }
        }
        return badDataCount;
    }
    else
    {
        return 'Please enter a valid Array';
    }
}


/*
    Problem 5: Convert your gems into diamond
    -----------------------------------------
    This function will take three numbers and check whether the inputted value is number or not, if not then it will return an error message.
    It will perform operations below:
    1. gemsOne will be multiplied by 21
    2. gemsTwo will be multiplied by 32
    3. gemsThree will be multiplied by 43
    After multiplication it will store the summation of all three result values to 'totalDiamond' variable.
    Then it will check if totalDiamond is greater or equal than 2000 or not,
    if yes, it will return totalDiamond value subtracted by 2000,
    if no, it will return totalDiamond value.
*/
function gemsToDiamond(gemsOne, gemsTwo, gemsThree)
{
   if(typeof gemsOne == 'number' && typeof gemsTwo == 'number' && typeof gemsThree == 'number')
   {
        const diamondOne = gemsOne * 21;
        const diamondTwo = gemsTwo * 32;
        const diamondThree = gemsThree * 43;
        const totalDiamond = diamondOne + diamondTwo + diamondThree;

        if(totalDiamond >= 2000)
        {
            return totalDiamond - 2000;
        }
        else
        {
            return totalDiamond;
        }
   }
   else
   {
    return "Please enter three valid numbers";
   }

}