function negativeStop(numbers)
{
    let positiveArray = [];

    for (let i = 0; i < numbers.length; i++)
    {
        if(numbers[i] < 0 )
        {
            break;
        }
        else
        {
            positiveArray.push(numbers[i]);
        }
    }
    return positiveArray;
}

const numbers = [10, 15, 20, 25, 30, 100, -120];

console.log("The Positive Array Until Negative Comes In: "+ negativeStop(numbers));