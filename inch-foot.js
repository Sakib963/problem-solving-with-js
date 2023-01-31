function inchToFeet(inch)
{
    let feet = inch/12;

    return feet.toFixed(2);
}

let sakibHeight = 72;
let hrituHeight = 63;

console.log("Sakib's Height in Feet: "+inchToFeet(sakibHeight));
console.log("Hritu's Height in Feet: "+inchToFeet(hrituHeight));