
// Array vs Object
var shoppingItems = ['books', 'sunglass', 'shoes', 'pen'];

var friendAge = [12, 45, 78, 32, 12, 14];
var friendsAge = {
    rahim: 23,
    karim: 34,
    jamal: 24,
    kamal: 45,
    robi: 56
}

var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
}

const keys = Object.keys(shoppingCart);
// console.log(keys);

const values = Object.values(shoppingCart);
// console.log(values);

for ( var i = 0; i < keys.length; i++)
{
    // console.log("Key: "+keys[i]+" Value: "+values[i]);
}

// For In Loop
for(var propertyName in shoppingCart)
{
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}

console.log(Object.entries(shoppingCart));