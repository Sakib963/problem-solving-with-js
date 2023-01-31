function secondLargest(numbers)
{
    let sorted = [], temp =0;
    let length = numbers.length;
    for( let i = 0; i< numbers.length; i++)
    {
        for (let j =0; j<numbers.length; j++)
        {
            if(numbers[j]>numbers[j+1])
            {
                temp = numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1] = temp;
            }
        }
    }

    return numbers[length-2];
}

let arr = [10,33,5,99,6, 45];
const secondNumber = secondLargest(arr);
console.log(secondNumber)