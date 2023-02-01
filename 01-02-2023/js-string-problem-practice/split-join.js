const lyrics = 'tumi bondhu kala pakhi ami jeno ki. boshonto kale tomay bolte parini. Sada sada kala kala';

const parts = lyrics.split(' ')
const sentence = lyrics.split('.')

// Split every character from a string
const chars = lyrics.split('');

// console.log(parts);
// console.log(sentence);
// console.log(chars);

// ----------Slice-------------
const partial = lyrics.slice(5, 11);
console.log(partial);

// ---------SubString---------
const partial2 = lyrics.substring(5, 11);
console.log(partial2);


//--------Join----------------
const lines = [
    'tumi bondhu kala pakhi ami jeno ki',
    'boshonto kale tomay bolte parini',
    'Sada sada kala kala'
]

const newSong = lines.join('.');
console.log(newSong)