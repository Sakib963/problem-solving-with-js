function reverseString(text)
{
    // Approach: 1
    let reverse = ''
    for (let i =text.length -1; i>= 0; i--)
    {
        reverse = reverse + text[i];
    }
    return reverse;
}

let text = 'okay';

console.log(reverseString(text));