function isLeapYear(years)
{
    let leapArray = [];

    for ( let i = 0; i < years.length; i++)
    {
        if(years[i] % 400 == 0)
        {
            leapArray.push("Leap Year");
        }
        else if(years[i] % 100 == 0)
        {
            leapArray.push("Normal Year");
        }
        else if(years[i] % 4 == 0)
        {
            leapArray.push("Leap Year");
        }
        else
        {
            leapArray.push("Normal Year");
        }
    }

    console.log(leapArray);
}

let array = [2023, 2024, 2025, 2026, 2027, 2028];
console.log(array);
isLeapYear(array);