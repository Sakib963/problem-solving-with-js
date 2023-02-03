const phones = [
    { name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver'},
    { name: 'Walton', camera: 12, storage: '32gb', price: 88000, color: 'silver'},
    { name: 'iPhone', camera: 12, storage: '32gb', price: 99000, color: 'silver'},
    { name: 'Xiomi', camera: 12, storage: '32gb', price: 20000, color: 'silver'},
    { name: 'Redmi', camera: 12, storage: '32gb', price: 18000, color: 'silver'},
    { name: 'HTC', camera: 12, storage: '32gb', price: 36000, color: 'silver'},
    { name: 'blackberry', camera: 12, storage: '32gb', price: 65000, color: 'silver'},
    { name: 'Nokia', camera: 12, storage: '32gb', price: 44000, color: 'silver'}
]

function cheapestPhone(phones)
{
    let cheapest = phones[0];

    for( let i =0; i < phones.length; i++)
    {
        const phone = phones[i];
        if(phone.price < cheapest.price)
        {
            cheapest = phone;
        }
    }
    return cheapest;
}
function richestPhone(phones)
{
    let richest = phones[0];

    for( let i =0; i < phones.length; i++)
    {
        const phone = phones[i];
        if(phone.price > richest.price)
        {
            richest = phone;
        }
    }
    return richest;
}

const mySelection = cheapestPhone(phones);
console.log("Cheapest Phone: ")
console.log(mySelection)

const mySelectionRichest = richestPhone(phones);
console.log("Richest Phone: ")
console.log(mySelectionRichest)