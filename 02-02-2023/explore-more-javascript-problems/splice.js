let friend = [13, 12, 14, 11, 54, 18, 20, 87];

// Removes elements from an array and, if necessary, 
// inserts new elements in their place, returning the deleted elements..
// Will change the original array
// let part = friend.splice(2 , 3);
let part = friend.splice(2 , 3, 0, 0, 0);
console.log(part);
console.log(friend);