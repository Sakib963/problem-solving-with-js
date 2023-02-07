function sum(i)
{
    if(i == 1)
    {
        return 1;
    }
    return i + sum(i - 1)
}

console.log(sum(5));

// When a function call itself is known as recursive function.
// IT needs a base case to stop function, otherwise it will exceed stack size.--

// 5 + sum(5-1)
// 5 + 4 + sum(4-1)
// 5 + 4 + 3 + sum(3-1)
// 5 + 4 + 3 + 2 + sum(2-1)
// 5 + 4 + 3 + 2 + 1 = 15