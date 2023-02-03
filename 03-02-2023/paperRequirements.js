function paperRequirements(bookOneQuantity, bookTwoQuantity, bookThreeQuantity)
{
    const firstBookPages = 100;
    const secondBookPages = 200;
    const thirdBookPages = 300;

    if(bookOneQuantity > 0 && bookTwoQuantity > 0 && bookThreeQuantity > 0)
    {
        const bookOnePages = bookOneQuantity * firstBookPages;
        const bookTwoPages = bookTwoQuantity * secondBookPages;
        const bookThreePages = bookThreeQuantity * thirdBookPages;

        return bookOnePages + bookTwoPages + bookThreePages;
    }
    else
    {
        return "Please Input a Valid Number"
    }
}

const firstQuantity = 2, secondQuantity = 5, thirdQuantity = -2;

console.log("Total Pages Needed: "+ paperRequirements(firstQuantity, secondQuantity, thirdQuantity));