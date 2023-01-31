function isLeapYear(year)
{
    if(year % 400 == 0)
    {
        console.log(year+" Is A Leap Year.")
    }
    else if(year % 100 == 0)
    {
        console.log(year+" Is Not A Leap Year.")
    }
    if(year % 4 == 0)
    {
        console.log(year+" Is A Leap Year.")
    }
    else
    {
        console.log(year+" Is Not A Leap Year.")
    }
}


const shamsuYear = 2025;
isLeapYear(shamsuYear);