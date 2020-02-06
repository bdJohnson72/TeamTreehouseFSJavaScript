/*//const prices = [6.75, 3.10, 4.00, 8.12];
const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

let sNamesArray = [];

/!*let totalPrices = 0;

function getTotalPrice(prices) {
     prices.forEach( price => {
        totalPrices += price;
    });
}
getTotalPrice(prices);
console.log(totalPrices);

names.forEach((name) => {
    if (name.charAt(0) !== 'S'){
       sNames.push(name);
    }
})


function sNames1(array) {
    array.forEach((item) => {
        if (item.startsWith('S')){
            sNamesArray.push(item);
        }
    })

}
sNames1(names);
console.log('value of sNames' + sNamesArray);*!/

//YOu can also filter S Names by using Filter

// Use this sort of syntax for functions that return true or false

const  sNames = names.filter(((name) => name.startsWith('S') ));
console.log(sNames);

const startsWithS = name => name.startsWith('S');
const sNames2 = names.filter(startsWithS);
console.log(sNames2);

function multiplier(factor) {

    return number => number * factor;

}

const twice = multiplier(2);
const ten = twice(5);
console.log(ten);

const strings = ['1','2','3','4','5'];
const ints = [];

const numbers = strings.map(string => parseInt(string, 10));
console.log(numbers);

const fruits = ['apple', 'pear', 'cherry'];

const capFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(capFruits);

const prices = [5, 4.23, 6.4, 8.09, 3.20];
const updatedPrices = prices.map((price) => '$'+price.toFixed(2));
console.log(updatedPrices);

//This is a way to use the value anywhere we want to turn a price into a currecy

const priceToDollar = price => `$${price.toFixed(2)}`;

const newPrices = prices.map(priceToDollar);

console.log(newPrices);

//Reduce method -note that  reduce function needs two params the accumulator and current or acc  and cur

const reducedPrices = prices.reduce((acc, cur) => acc + cur);
console.log(reducedPrices.toFixed(2));

//return the g names*/
const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];

const gNameCount = names.reduce((count, name) => {
    if (name[0] === 'G'){
        return count +1
    }
    return count;
}, 0);

console.log(gNameCount);







