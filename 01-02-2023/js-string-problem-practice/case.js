const userName = "blackPink";
const userInput = "blackPinK";

console.log(userName);
console.log(userInput.toUpperCase())

if(userName.toLowerCase() === userInput.toLowerCase())
{
    console.log("Valid User");
}
else{
    console.log("Invalid User");
}