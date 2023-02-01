// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
// [ 0, 1,  1,  2,  3,  5, 8, 13, 21, 34, 55, 89, 144]

function getFibo(number)
{
    let fibo = [0];

    for(let  i = 1; i< number; i++)
    {
        if(i==1)
        {
            fibo[i]= i;
        }
        else
        {
            fibo[i] = fibo[i-1]+fibo[i-2];
        }
    }
    return fibo;
}

console.log(getFibo(13));