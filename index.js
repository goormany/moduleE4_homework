// task 1
// const person = {
//     city: "Moscow"
// }
// const student = Object.create(person);
// student.ownCity = "Piter";

// function ownProp(obj){
//     for (let key in obj){
//         if (obj.hasOwnProperty(key)) {
//             console.log(`key ${key}: value ${obj[key]}`)
//         }
//     }
// }
// ownProp(student)


// task 2
// const obj1 = {
//     c: 'hi',
//     b: 123,
// };

// function a(str, obj) {
//     if (str in obj){
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// };

// a('c', obj1)


// task 3
// const obj1 = Object.create(null)
// console.log(obj1)


// task 4

// function ElectroItems(name, status, power, other){
//     this.name = name;
//     this.status = status;
//     this.power = power;
//     this.other = other;
// }
// ElectroItems.prototype.getStatus = function(status){
//     if (status==1){
//         console.log(`status is on`)
//     }
//     else{
//         console.log('status is off')
//     }
// }

// let pc = new ElectroItems('PC', 1, 57, 'win10')
// pc.getOS = function(){
//     console.log(`OS is ${this.other}`)
// }


// let phone = new ElectroItems('phone', 0, 11, 'IOS')
// phone.system = phone.other
// phone.getSystem = function(system=phone.system){
//     console.log(`sys is ${system}`)
// }

// console.log(pc)
// console.log(phone)



// task 5

// class ElectroItems {
//     constructor(name, status, power, other){
//     this.name = name;
//     this.status = status;
//     this.power = power;
//     this.other = other;
//     }

//     getStatus(){
//         if (this.status==1){
//             console.log('status is on')
//         } else{
//             console.log('status is off')
//         }
//     }
// }
// class PersonalComputer extends ElectroItems{
//     constructor(model, name, status, power, other){
//         super(name, status, power, other);
//         this.model = model;
//         this.os = this.other
//     }

//     getOS(other=this.other){
//         console.log(`OS is ${other}`)
//     }
// }

// class SmartPhone extends ElectroItems{
//     constructor(name, status, power, other){
//         super(name, status, power, other);
//         this.system = this.other;
//     }

//     getSys(){
//         console.log(`system on ${this.name} is ${this.system}`)
//     }
// }

// const pc = new PersonalComputer('NoPs', 'personalC', 1, 3200, 'Win10')
// console.log(pc)
// console.log(pc.getStatus())
// console.log(pc.getOS())

// const phone = new SmartPhone('Poco x3', 0, 120, 'IOS')
// console.log(phone)
// console.log(phone.getStatus())
// console.log(phone.getSys())