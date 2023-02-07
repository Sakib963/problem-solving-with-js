function mindGame(number)
{
    if(typeof number == 'number' && number >= 0)
    {
        const afterMultiply = number * 3;

        const afterAddition = afterMultiply + 10;
    
        const afterDivision = afterAddition / 2;
    
        const result = afterDivision - 5;
    
        return result;
    }
    else
    {
        return "Please enter a valid positive number";
    } 
    
}

console.log(mindGame(33))