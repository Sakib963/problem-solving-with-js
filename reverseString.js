function reverseMaker(word)
{
    let len = word.length;
    let arr = [];
    for(let i =0; i<len; i++)
    {
        arr.unshift(word[i]);
    }

    return arr.join("");
}

// Another Solution with IN built JS Functions
// function reverseMaker(word)
// {
//     return word.split("").reverse().join("");
// }

let str = "GeeksforGeeks";
console.log(reverseMaker(str));