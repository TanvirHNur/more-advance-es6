const numbers = [4,4,24,14,54, 44,33,6,10];
const bigNumber= numbers.filter(number => number > 20);
console.log(bigNumber)
const smallNumbers = numbers.filter(number => number <20);
console.log(smallNumbers)

const products = [
    {name: 'water', price: 44, color: 'blue'},
    {name: 'phone', price: 15000, color: 'black'},
    {name: 'watch', price: 440, color: 'navy blue'},
    {name: 'sticky notes', price: 40, color: 'red'},
    {name: 'laptop', price: 400000, color: 'white'},
]
const expensive = products.filter(product => product.price > 10000);
console.log(expensive);

const blacks = products.filter(product => product.color == 'black')
const empty = products.filter(product => product.color == 'yellow')
// console.log(blacks) 
// console.log(empty)

const finding = products.find(product => product.color == 'blue');
console.log(finding)

const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"]; 
const name1 = friends.find(friend => friend.length == 5);
 console.log(name1)