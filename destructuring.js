const fish = {id: 59, name: 'king Hilsha', price:  1000, phone: '019388333555', address: 'chandpur', dress: 'silver' } 


// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

const {phone, price, dress,id} =fish;

//  const {phone, price, dress,id} fish = {id: 59, name: 'king Hilsha', price:  1000, phone: '019388333555', address: 'chandpur', dress: 'silver' }


// console.log(phone) 
// console.log(phone) 
// console.log(phone, price) 
// console.log(phone) 
// console.log(phone) 
// console.log(phone, price) 
// console.log(phone) 


const company = {name: 'GP',
 CEO: {id: 1, 
    name: 'ajmol', 
    food: 'water'},
 web: {work: 'web dev',
  frameWork: 'react', 
  employe: '30',
            tech: {first: 'html', 
            second: 'css',
             third: 'js'}}
};

const {frameWork, employe }= company.web;

const{first, third} = company.web.tech;
console.log(first,third, frameWork)


// chainging
console.log(company.web.tech.third)
// console.log(company.back.tech.third)



