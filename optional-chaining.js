// declare variable based on the name of an Object property

const myObject = {x:2, y: 3., z: 4., a:5, b:6};
const  {b} = myObject.b;



// destructuring Array
const [p, q] = [30,40, 45,90,45];
console.log(p, q)


const [best, faltu] = ['rakib','dude', 444];
console.log(best, faltu)

const {sky, cloud} = {sky: 'blue', soil: 'black', cloud: 'navy blue'};




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
console.log('no',company?.back?.tech?.third)

console.log('myObject.p', myObject?.p?.q);