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

console.log(isLGSeven(6))