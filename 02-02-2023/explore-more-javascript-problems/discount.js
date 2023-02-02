/*
1. If ticket number is less or equal than 100,
    Ticket Price ---> 100 tk
2. If ticket number is more than 100. but less or equal than 200,
    Ticket Price :
        first 100 pc : 100 tk
        rest : 90 tk
3. If ticket number is more than 200,
    Ticket Price:
        first 100 pc : 100 tk
        second 100 pc : 90 tk
        rest : 70 tk
*/

function ticketPrice(ticketQuantity)
{
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    if(ticketQuantity <= 100)
    {
        const price = ticketQuantity * 100;
        return price;
    }
    else if(ticketQuantity <= 200)
    {
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const price = first100Price + restTicketPrice;
        return price;
    }
    else
    {
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const price = first100Price + second100Price + restTicketPrice;
        return price;
    }
}

const price = ticketPrice(220);
console.log("Ticket Price: ", price);