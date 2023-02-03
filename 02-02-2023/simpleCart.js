const shoppingCart = [
    { name: 'show', price: 1200},
    { name: 'shirt', price: 2200},
    { name: 'pant', price: 3700},
    { name: 'belt', price: 700},
];

function totalCost(products)
{
    let total = 0;
    for ( let i = 0; i < products.length; i++)
    {
        const element = products[i];
        total = total + element.price;
    }
    return total;
}

const getTotal = totalCost(shoppingCart);
console.log("Total Cost: "+getTotal);