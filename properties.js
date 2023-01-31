var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

// 1. When you know the specific property name, use dot notation to get the property value
var penCount = shoppingCart.pen;

// Alternative System
// 2. When you know the property name, Use array indexing to get the value
var penCount2 = shoppingCart["pen"];


// Convert object into arrays by Object.keys. It will change key name to array property
// It will be enumerable


// It will get object keys, and save it to an array
var properties = Object.keys(shoppingCart);
// console.log(properties);


// It will get object values and save it to an array
var property = Object.values(shoppingCart);
// console.log(property)

// Another Option
// 3. Store key name to a variable and call it as an parameter
var propertyName = 'mouse';

var propertyValue = shoppingCart[propertyName];
// console.log(propertyName,propertyValue);

// Set property values
shoppingCart.mouse = 15;
console.log(shoppingCart);
shoppingCart['mouse'] = 47;
console.log(shoppingCart);
shoppingCart[propertyName] = 103;
console.log(shoppingCart);