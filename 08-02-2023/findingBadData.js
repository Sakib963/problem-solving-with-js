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

console.log(findingBadData([ -4, -9, 5, -33, -55 ]));