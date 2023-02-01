function reverseWords(str)
{
    const words = str.split(' ');
    const result = []

    for( let i = words.length - 1; i>= 0; i--)
    {
        result.push(words[i]);
    }
    return result.join(' ');
}

const myString = 'I am a good boy'
console.log(reverseWords(myString));