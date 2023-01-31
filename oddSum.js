function oddSum(numbers)
{
    let oddArray = [];
    let sum = 0;
    for (let i = 0; i < numbers.length; i++)
    {
        if(numbers[i]%2 == 1 || numbers[i] == 1)
        {
            sum+=numbers[i];
            oddArray.push(numbers[i]);
        }
    }
    console.log(oddArray)
    return sum;
}
function evenSum(numbers)
{
    let evenArray = [];
    let sum = 0;
    for (let i = 0; i < numbers.length; i++)
    {
        if(numbers[i] % 2 == 0)
        {
            sum+=numbers[i];
            evenArray.push(numbers[i]);
        }
    }
    console.log(evenArray)
    return sum;
}

let numbers = [5, 7, 8, 10, 45, 30];

console.log(numbers);

console.log("Sum of Odd Numbers in this Array: "+oddSum(numbers));
console.log("Sum of Even Numbers in this Array: "+evenSum(numbers));