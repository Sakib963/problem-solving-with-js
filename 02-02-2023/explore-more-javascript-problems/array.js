const country = 'Bangladesh'
const age = 52;
const isIndependent =  true;
const friends = [13, 12, 14, 11, 54, 18, 20];
const student = {id: 121, class: 11, name: 'Agun'};
function add(num1, num2)
{
    return num1+num2;
}

console.log(typeof country)
console.log(typeof age)
console.log(typeof isIndependent)
// can't check whether it's array or not 
// console.log(typeof friends)

// Checking array using Array.isArray()
// It will return true if it's a valid array otherwise it will return false
console.log(Array.isArray(friends));
console.log(typeof student)
console.log(typeof add)

// ----------Checking whether this value is in the array or not--------------
console.log(friends.includes(19));
console.log(friends.includes(20));

// We can do same thing using indexOf() function
if(friends.indexOf(19)!= -1)
{

}

// Concat two array

const newFriends = [12, 11, 10 ,13, 14]
const allFriends = newFriends.concat(friends);
console.log(allFriends);