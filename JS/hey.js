console.log(sadhya);
// console.log(age);
// html was used for sturucture
// css was used for styling
// java script is for functionality

// brenden eich 
// it was created in 10 days

// java and java script are not same 
// java script was named because of a marketing purpose

// java script have framework know as 
// angular / react 
// react we will learnn.... 

console.log("hey who are you");
// strings = sequence of alphabets

a = 5;
b = a + 6;
console.log(b);

// variables : 

// sandhya = 50;

{var sadhya = 50.0;}
console.log(sadhya)

// sandhya = 20;
var firstName = "kulsoom";
// var means variable 
// var is a functional scope
// ca redeclare 100 times

firstNameIsKulsoom= 20;
// can use underscore / attach name together 
// firstNameIsKulsoom = camelcase is variable naming convention

// {let age = 23 ; }
// let age = 35;

// let is a block scope
// cannot redeclare


// console.log(age);

// Const:
// constant 

const lastname = "something";
// const lastname = "whatever";
console.log(lastname);


// java / javascript

// java is programing lang it has compiler / interpreter
// human code = source code 
// binary numbers are = machine language
// compiler makes out code compiled together in binary numbers
// interpreter reads code line by line and give us the output

// human code -> machine code -> we got the output 
// java is compiler and interpreter both


// java script is just intrepreter

// functions:
function sleep () {
    console.log("i am sleeping")
}

sleep();
// function functionname (parameters){
//     code goes here logic
// }

function greet(firstname, lastname) {
    console.log("hello "+ "firstname: " + firstname + lastname )
}

greet("cat ", "dog");

greet("fish", "horse");

greet("kulsoom" , "agha");


// make a function of signal
// say light is green 

// make a function of greet pass parameters first name and lastname 
// pass the first name and last name 

// arrays
// data structure that are supposed to hold values in a particular index
// index: is a placeholder for a specific array

let names = ["benten", "pokemon" , "oggy"]
console.log(names);

// arrays can store different type of things in it

var person = ["kulsoom", 25, 2.34, 56, 7827]
            // 0         1    2 
console.log(person);

console.log(person[0])
console.log(person.length)

// names of 10 
// acces only the fifth 


var purse = ["black", "gucci", 50.00]
console.log(purse)

// console.log(purse[0])

// console.log(purse.reverse())

purse.push("hira")

// purse[3] = "xyz"
purse.splice(1,0, 123)
console.log(purse)

// if else 

var age = 18;
if (age > 21) {
   console.log("allowed")
}else if (age == 21) {
    console.log("yes")
} 
else {
    console.log("noo")
}

// make a signal variable that says
// if red print stop
// if green print drive 
// if yellow print yeild 

signal = "orange";

if (signal == "green") {
    console.log("drive")
} else if (signal == "red"){
    console.log("stop")
}else{
    console.log("yeild")
}

// If weather is "sunny", it prints "Wear sunglasses".
// If weather is "rainy", it prints "Take an umbrella".
// If weather is "snowy", it prints "Wear a coat".
// If weather is "windy", it prints "Hold onto your hat".
// If weather is none of these values, it prints "Stay indoors".


// if (condition1) {
//     // condition 1 fullfill this wll execute
// } else if(condition2){
//     // condition 2 fullfill this wll execute
// }else if (condition3){
//     // condition 3 fullfill this wll execute
// }else{
//     // out of ordinary this should always work
// }

function sub (a , b){
    return a - b;
}

const add = (a , b) => a +b;

console.log(sub(5,2))
console.log(add(2,5))


var name = "something";

// objects

const person1 = {
    firstName : "kulsoom",
    lastName : "agha",
    age : 234,
    weight: 2.00
}

console.log(person1)
