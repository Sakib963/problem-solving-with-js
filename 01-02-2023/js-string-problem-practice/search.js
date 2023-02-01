const lyrics = 'tumi bondhu kala pakhi ami jeno ki. boshonto kale tomay bolte parini. Sada sada kala kala'

const searchString = 'kala';

// const doesExist = lyrics.includes('pokkhi');
// const doesExist = lyrics.includes('Pakhi');
const doesExist = lyrics.toLowerCase().includes(searchString.toLowerCase());

// console.log(doesExist);

// --------------------
// indexOf

// console.log(lyrics.indexOf(searchString))
console.log(lyrics.indexOf('tumi'))


// --------------------
if(lyrics.indexOf('sada') !== -1)
{
    console.log("Exists inside the string")
}
else 
{
    console.log("String ta nai ekhane");
}

// ---------------------
// startsWith

console.log(lyrics.startsWith('tumi'));

// Ends With
const fileName = 'mybiodata.pdf'
const otherFile = 'mypix.png'

console.log(fileName.endsWith(".pdf"));