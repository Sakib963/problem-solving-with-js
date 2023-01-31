function getFirstPosition(marksOfJim, marksOfDela, marksOfChinku)
{
    if(marksOfJim > marksOfDela && marksOfJim > marksOfChinku)
    {
        return "Jim";
    }
    else if(marksOfDela > marksOfJim && marksOfDela > marksOfChinku)
    {
        return "Dela";
    }
    else
    {
        return "Chinku";
    }
}

let markOne = 84, markTwo = 99, markThree = 77;

console.log(getFirstPosition(markOne, markTwo, markThree));