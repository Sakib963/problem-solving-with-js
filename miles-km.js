function distanceInKm(miles)
{
    let km = miles*1.60934;
    return km.toFixed(2);
}

let distanceInMiles = 2;
console.log(distanceInMiles+" Miles is equal to "+distanceInKm(distanceInMiles)+" KiloMeters");