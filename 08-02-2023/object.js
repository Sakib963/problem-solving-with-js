const nayok = {
    name: 'Sakib Khan',
    id: 121,
    address: 'Movie cinema',
    isSingle: true,
    friends: ['apu', 'Raaz', 'Salman', 'Amir'],
    act: function()
    {
        console.log("acting like sakib khan")
    },
    movies: [{name: 'no. 1', year: 2015},{name: 'king khan', year: 2020}],
    car: {
        brand: 'tesla',
        price: 500000,
        made: 2025,
        manufacturer: {
            name: 'tesla',
            ceo: 'elon musk',
            country: 'USA'
        }
    }
}
// console.log(nayok.act());
nayok.act();