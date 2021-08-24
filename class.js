class Supporter {
    name; 
    designation = 'support web dev';
    address = 'BD';
    constructor(name, address){
        this.name = name;
        // this.name = address;
        // console.log(this.name)
    }
    startsSession() {
        console.log(this.name, 'start a support session')
    }
}

const amir = new Supporter('amir', 'Dhaka');
const salman =   new Supporter('salman', 'Cumilla')
const sarukh =   new Supporter('sarukh', 'Cumilla')
const atif =   new Supporter('atif', 'Cumilla')


// console.log(amir, salman, sarukh, atif)
amir.startsSession();
salman.startsSession();

// class Supporter1 {
//     name;
//     address = 'BD';
//     constructor(name, address){
//          this.name = name;
//          this.address = address;
//     }
//     supportSession(){
//         console.log(this.name, 'starting')
//     }
// }

// const amir = new Supporter1 ('amir', 'dhaka')
// amir.supportSession();