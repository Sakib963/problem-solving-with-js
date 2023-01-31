function getFirstPosition(marksOfJim, marksOfDela)
{
    if(marksOfJim > marksOfDela)
    {
        return "Jim";
    }
    else
    {
        return "Dela";
    }
}

let markOne = 84, markTwo = 75;
console.log(getFirstPosition(markOne, markTwo));