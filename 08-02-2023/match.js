const numbers = [45, 65, 23, 98, 19];
// for(let i =0; i<numbers.length; i++)
// {
//     const number = numbers[i];
//     console.log(number);
// }

// For Of Loop
// IT will traverse array more easily
for(const number of numbers)
{
    // console.log(number);
}

const products = [
    {id: 1, name: 'walton phone', price: 19000},
    {id: 2, name: 'iphone', price: 19000},
    {id: 3, name: 'mac book', price: 19000},
    {id: 4, name: 'lenovo yoga', price: 19000},
    {id: 5, name: 'dell inspiron', price: 19000},
    {id: 6, name: 'samsung s7', price: 19000},
    {id: 7, name: 'nokia 6', price: 19000},
    {id: 8, name: 'oneplus 6t Phone', price: 19000},
]

for(const product of products)
{
    // console.log(product);
}

function matchedProducts(products, search)
{
    const matched = [];
    for(const product of products)
    {
        if(product.name.toLowerCase().includes(search.toLowerCase()))
            matched.push(product);
    }
    return matched;
}

const result = matchedProducts(products,  'phone');
console.log(result);