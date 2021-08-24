
class teamMember{
    name;
    designation = 'student care web dev';
    address = 'BD';
    constructor (name, address){
        this.name = name ;
        this.address = address;
    }

}

class Supporter extends teamMember{
    groupSupportTime;
    constructor(name, address ,time){
        super()
        this.groupSupportTime = time;

    }
    startsSession() {
        console.log(this.name, 'start a support session')
    }

}

const amir = new Supporter('amir', 'Dhaka', 11);
const salman =   new Supporter('salman', 'Cumilla', 2)
const sarukh =   new Supporter('sarukh', 'Cumilla', 4)
const atif =   new Supporter('atif', 'Cumilla',9)


// console.log(amir, salman, sarukh, atif)
amir.startsSession();
salman.startsSession();


class StudentCare{
    name;
    designation = 'student care web dev';
    address = 'BD';
    constructor (name, address){
        this.name = name ;
        this.address = address;
    }
    provideARoutine(student){
        console.log(this.name, 'build a routine for, student')
    }
}
class NaptuneDev{
    name;
    designation = 'student care web dev';
    address = 'BD';
    constructor (name, address){
        this.name = name ;
        this.address = address;
    }
   realseApp(version){
        console.log(this.name, 'realse app',  version)
    }
}



const alia = new StudentCare ('alia', 'UK');
console.log(amir.name);