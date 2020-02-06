//Simple example both filer and map return an array so they can be called on each other

const arr = [1,2,3,4,5];

const smallerArr = arr.filter(number => number !== 2).map(number => number +100);

console.log(smallerArr);

const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let displayYears;

displayYears = years.filter(year => year >= 2001).map(year => `${year} A.D.`);
console.log(displayYears);

const users = [
    {name: 'Samir', age: 27},
    {name: 'Angela', age: 33},
    {name: 'Beatrice', age: 42},
    {name: 'Sam', age: 25},
    {name: 'Brooks', age: 47},
    {name: 'Jean Luc', age: 55},

];

const samir = users.filter(user =>  user.name != 'Samir').map(user => `${user.name} is ${user.age} years old` );
console.log(samir);

const usersObject = users.reduce((usersObject, user) => {
    usersObject[user.name] = user.age;
    return usersObject;
}, {});

console.log(usersObject);

const authors = [
    { firstName: "Beatrix", lastName: "Potter" },
    { firstName: "Ann", lastName: "Martin" },
    { firstName: "Beverly", lastName: "Cleary" },
    { firstName: "Roald", lastName: "Dahl" },
    { firstName: "Lewis", lastName: "Carroll" }
];
let fullAuthorNames;

fullAuthorNames = authors.map(author => `${author.firstName} ${author.lastName}`);
console.log(fullAuthorNames);

//take values from an array and create an Obj with name and only the s names
const userObj = users.filter(name => name.name.charAt(0) === 'S').map(name => ({name: name.name}));
console.log(userObj);

// users over 40
const over40 = users.filter(user => user.age >= 40).map(user => user.name);

console.log(over40);

//find product with highest price under 10 dollars
const products = [
    { name: 'hard drive', price: 59.99 },
    { name: 'lighbulbs', price: 2.59 },
    { name: 'paper towels', price: 6.99 },
    { name: 'flatscreen monitor', price: 159.99 },
    { name: 'cable ties', price: 19.99 },
    { name: 'ballpoint pens', price: 4.49 }
];
//Note there is no existing value because we are not combining values
const productPrice = products.filter(product => product.price < 10.00).reduce((acc, cur) => {
    if(acc.price > cur.price){
        return  acc.price;
    }
    return cur;
});
console.log(productPrice);

//return a total of all products over 10.00
const overTen = products.filter(product => product.price > 10.00).reduce((total, current) => total + current.price,
0);
console.log(overTen.toFixed(2));

//flatten the array of arrays -note that the accumuulator is being set to a new empty array
//note use of spread syntax

const movies = [
    ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters'],
    ['Finding Dory'],
    ['Jaws', 'On the Waterfront']
];

const flatMoves = movies.reduce((arr, cur) => [...arr, ...cur] ,[]);
console.log(flatMoves);

//create an array of favorite books
const books = [
    {
        name: 'Samir',
        age: 27,
        favoriteBooks:[
            {title: 'The Iliad'},
            {title: 'The Brothers Karamazov'}
        ]
    },
    {
        name: 'Angela',
        age: 33,
        favoriteBooks:[
            {title: 'Tenth of December'},
            {title: 'Cloud Atlas'},
            {title: 'One Hundred Years of Solitude'}
        ]
    },
    {
        name: 'Beatrice',
        age: 42,
        favoriteBooks:[
            {title: 'Candide'}
        ]
    }
];

const favBooks = books.filter(user => user.favoriteBooks).reduce((arr, current) => [...arr, ...current.favoriteBooks], []);
console.log(favBooks);

const favTitles = books.map(user => user.favoriteBooks.map(book => book.title))
    .reduce((arr, titles) => [...arr, ...titles], []);

console.log(favTitles);

//final challenge
let hobbies = customerList.map(customer => customer.personal).map(personal => personal.hobbies)
    .reduce((arr, cur) => [...arr, ...cur], []);