// Primitives

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = '100'
const scorevalue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol("123")
const anotherid = Symbol("123")

// console.log(id == anotherid);

const bigNumber = 687865453453746874668768n

// console.log(typeof bigNumber);



// Reference (Non Premitive)

// Array, Objects, functions

const heros = ["hello","world"];
const heross = {name:"savan",age:23}

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof score);
console.log(typeof scorevalue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof heross);
console.log(typeof myFunction);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack(Primitive) , Heap(Non-Primitive)

let dec1 = "savan"

let dec2 = dec1
dec2 = "savanpatel"

console.log(dec1);
console.log(dec2);

let user = {
    name:"savanpatel",
    age:23
}

let user1 = user

user1.name = "anothersavan"

console.log(user.name);
console.log(user1.name);
