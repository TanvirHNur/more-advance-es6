const numbers = [22,4,5,35,2];
const output2 = []


// function doubleOld (number){
//     return number* 2;
// }


const doubleit= num => num *2;

for (const number of numbers){
    const result = doubleit(number);
    output2.push(result)
}

// console.log(output)
// 1.loop through each element
// 2. for each element call the provide function 
// 3. result for element will be stored in the array 

// const output = numbers.map(doubleit);
// const output = numbers.map(number => number *2)
const output = numbers.map(x => x*2);
console.log(output);



const squares = numbers.map(x => x*x);
console.log(squares)