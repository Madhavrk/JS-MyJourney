/*
Primitive data-types
--------------------

1) String
2) Number
3) Boolean
4) null
5) undefined
6) Symbol
7) BigInt
*/
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 46516749816123n
// console.log(typeof bigNumber);


/*
Non-Premitive data-type/ Reference data-type
--------------------------------------------
1) Array
2) Objects
3) Functions

*/

const heros = ["he man", "arjun", "Hanuman"];
let myObj = {
    name : "madhav",
    age: 22
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/
