function lowerCase(nameGiven)
{
    var lowerName = nameGiven.toLowerCase();
    return lowerName;
}

var upperName = "SaKiB";
var getName = lowerCase(upperName);
console.log(getName);