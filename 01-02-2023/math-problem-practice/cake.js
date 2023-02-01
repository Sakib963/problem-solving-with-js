function getMax(jim, della, chinku)
{
    const max =  Math.max(jim, della, chinku);

    if(max === jim)
    {
        return "Jim got the Cake";
    }
    else if(max === della)
    {
        return "Della got the Cake";
    }
    else
    {
        return "Chinku got the Cake";
    }
}

let jim = 84, della = 99, chinku = 77;

console.log(getMax(jim, della, chinku));