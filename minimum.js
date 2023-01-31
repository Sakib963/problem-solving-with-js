function minimum(numbers)
{
    let min = numbers[0];
    for(let i =0; i<numbers.length; i++)
    {
        if(numbers[i]<min)
            min = numbers[i];
    }
    return min;
}

let arr = [10,33,5,99,6,105];
console.log(minimum(arr));