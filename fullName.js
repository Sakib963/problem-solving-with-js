function fullName(firstName, lastName)
{
    return firstName.concat(" ", lastName);
}

var nameFirst = "Abdullah Nazmus";
var nameLast = "Sakib";

var getName = fullName(nameFirst, nameLast);

console.log(getName);