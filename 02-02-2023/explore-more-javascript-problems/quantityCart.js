const shoppingCart = [
    { name: 'show', price: 1200, quantity: 3 },
    { name: 'shirt', price: 2200, quantity: 1 },
    { name: 'pant', price: 3700, quantity: 2 },
    { name: 'belt', price: 700, quantity: 1 },
];

function totalCost(products)
{
    let total = 0;
    for ( let i = 0; i < products.length; i++)
    {
        const element = products[i];
        const productTotal = element.price * element.quantity;
        total = total + productTotal;
    }
    return total;
}

const getTotal = totalCost(shoppingCart);
console.log("Total Cost: "+getTotal);