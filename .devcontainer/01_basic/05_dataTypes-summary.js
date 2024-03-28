// primitives

// 7 types : Strings , Number , Boolean , Null , Undefined , Symbols , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemperature = null
let userEmail;  // underfined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 345235362  //bigInt

// Reference (Non Primitives)

// Array , Object , Functions.

const heroes = ["Thor" , "Ironman" , "Hulk"]
let myObj = {
    Name : "abhishek",
    age : 23,
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof myFunction)