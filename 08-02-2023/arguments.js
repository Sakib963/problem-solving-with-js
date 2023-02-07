function add(num1, num2)
{
    console.log(num1, num2);
    // console.log(arguments);
    // Result: [Arguments] { '0': 12, '1': 13, '2': 45, '3': 89, '4': 78 }
    // Arguments is array-like object but not array
    console.log(arguments[3]);
}
add(12, 13, 45 , 89, 78);