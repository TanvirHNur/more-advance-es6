
const friends = ['soliman', 'rakib ahmed', 'khaled', 'ahmad ibne rafic']


const fLengths = friends.map(friend => friend.length)
console.log(fLengths)


const products = [
    {name: 'water', price: 44, color: 'blue'},
    {name: 'phone', price: 15000, color: 'black'},
    {name: 'watch', price: 440, color: 'navy blue'},
    {name: 'sticky notes', price: 40, color: 'red'},
    {name: 'laptop', price: 400000, color: 'white'},
]

const pName = products.map(product=> product.name)
console.log(pName)

const pPrice = products.map(product => product.price)
console.log(pPrice)

const pColor = products.map(item => item.color)
console.log(pColor)

products.map(product =>  console.log( 'all 5 products', products))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
// products.forEach(product => console.log('looping by for each', product))

// console.log('all products',products)