const pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2
}

var propertyName = 'toppings';

var values = Object.values(pizza[propertyName]);

for (var i = 0; i < values.length; i++)
{
    if(values[i] == 'pepperoni')
    {
        console.log(values[i]);
        break;
    }
}