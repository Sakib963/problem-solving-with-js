// power function
const result = Math.pow(3, 8);
// console.log(result);

const number1 = 25;
const number2 = 45;

const gap = Math.abs(number1 - number2);
// console.log(gap);

if(gap<5)
{
    // console.log('You guys can be friends')
}
else
{
    // console.log('You guys stay apart')
}

// -----------------
// 
// -----------------

const number = 2.5598;
// const fullNumber = Math.round(number);
// ceil diye uporer full number e jabe
// const fullNumber = Math.ceil(number);
// floor diye nicher full number e jabe
const fullNumber = Math.floor(number);
// console.log(fullNumber)

// -----------Random--------------
// console.log(Math.random())

// const random = Math.random()*100;
const random = Math.round(Math.random()*100);
// console.log(random);

for (let index = 0; index < 10; index++) {
    const random = Math.round(Math.random()*6); //values will be within 0-6
    console.log(random);
}