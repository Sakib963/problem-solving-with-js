function gemsToDiamond(gemsOne, gemsTwo, gemsThree)
{
   if(typeof gemsOne == 'number' && typeof gemsTwo == 'number' && typeof gemsThree == 'number')
   {
        const diamondOne = gemsOne * 21;
        const diamondTwo = gemsTwo * 32;
        const diamondThree = gemsThree * 43;
        const totalDiamond = diamondOne + diamondTwo + diamondThree;

        if(totalDiamond >= 2000)
        {
            return totalDiamond - 2000;
        }
        else
        {
            return totalDiamond;
        }
   }
   else
   {
    return "Please enter three valid numbers";
   }

}

console.log(gemsToDiamond(100, 5, 1))