const numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];
let largest = 0;

for (let i = 0; i<numbers.length; i++)
{
    let number = numbers[i]
    if(number> largest)
    {
        largest = number;
    }
}

console.log(largest);