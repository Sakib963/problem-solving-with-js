var fruits = ['apple', 'banana', 'orange']

var indexOfBanana = fruits.indexOf('banana')
console.log("Index of Banana: "+indexOfBanana)

fruits[indexOfBanana] = 'Mango'
console.log("After Replacing Banana with Mango: "+fruits)

fruits.pop()
console.log("After Removing orange: "+fruits)

fruits.push('WaterMelon')
console.log("Adding Watermelon: "+fruits)