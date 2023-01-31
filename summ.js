function getSum(numbers)
{
    let sum = 0;
    for( let i = 0; i < numbers.length; i++)
    {
        sum += numbers[i];
    }

    return sum;
}


let numbers = [5, 7, 8, 10, 45, 30];

const sumOfNumbers = getSum(numbers);
console.log(sumOfNumbers);