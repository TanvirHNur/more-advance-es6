const hubby = 'tanvir'
let phone = 'mi'
phone = 'Iphone'

// templalte String 
const myNotes = `my phone is ${phone}. ${hubby} brought for  me`
console.log(myNotes)


// default parameter
//  spread oparetor

function maxNumber (array=[]){
 const max = Math.max(...array);
 return max
}

const numbers = []
console.log(maxNumber ())


// arrow function 
// function square(x){
//     return x *x
// }
const squre = x => x*x;
console.log(squre(8))
  