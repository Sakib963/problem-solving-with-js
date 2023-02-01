function maxInArray(numbers)
{
    // Approach: 1
    // let max = 0;
    // for( let i = 0; i < numbers.length; i++)
    // {
    //     if(numbers[i]>max)
    //         max = numbers[i];
    // }
    // return max;

    // Approach: 2(Using Math.max() function) 
    let max = Math.max(...numbers);
    return max;
}


const heights = [167, 190, 120, 165, 137];
const tallest = maxInArray(heights);
console.log('Tallest person is: '+tallest);

// const array1 = [1, 3, 2];

// console.log(Math.max(...array1));