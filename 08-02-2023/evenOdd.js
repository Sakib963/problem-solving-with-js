function evenOdd(message)
{
    if(typeof message == 'string')
    {
        const length = message.length;

        if( length % 2 == 0)
        {
            return 'even';
        }
        else
        {
            return 'odd';
        }
    }
    else
    {
        return "Please input a valid string";
    }
    
}
const message = 'chatgpt';
console.log(evenOdd(message));