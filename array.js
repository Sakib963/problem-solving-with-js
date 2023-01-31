var books = [250, 150, 120, 400, 900, 180, 120, 400, 205, 350]

var lengthOfBooks = books.length;
for ( var i = 0; i < lengthOfBooks; i++)
{
    if(books[i] > 200)
    {
        continue;
    }
    console.log(books[i]);

}
