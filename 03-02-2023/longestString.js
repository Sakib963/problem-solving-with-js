function longestString(friends)
{
    let longest = 0, index = 0;
    for ( let i = 0; i < friends.length; i++)
    {
        const friend = friends[i].length;

        if(friend > longest)
        {
            longest = friend;
            index = i;
        }
    }
    return friends[index];
}

const friends = ['Abul', 'Kabul, now is the longest one', 'Abdul', 'Karim', 'This is Longest.'];

console.log(longestString(friends));