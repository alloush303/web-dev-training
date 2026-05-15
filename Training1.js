console.log("#".repeat(50))

/* Exercise 1 (String vs Number):
Create a variable that stores your name as a string and another that stores your age as a number.
Log both along with their types.*/ 

let name = "ali" 
let age = 20
console.log("name "+ name + " ," + "type:" + " " + typeof name + " || " + "age " + age + " ," + "type:" + " " + typeof age)

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/* Exercise 2 (Null vs Undefined):
Declare a variable with null (representing an empty value on purpose) and another
with undefined (never assigned). Log both values and their types */

let num = null
let num1
console.log("num: " + num + " ," + "type: " + typeof num + " || " + "num1: " + num1 + " ," + "type: " + typeof num1)

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/* Exercise 3 (The null bug):
Write a condition that checks if a variable is null — but since typeof null returns "object", you
must check the value directly (e.g., if (x === null)). Test with let data = null.*/


let data = null

if (data === null) {
    console.log("data is null")
}else console.log("data is not null")

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 4 (Boolean conversion) new:
Write code that shows what Boolean(0), Boolean(1), Boolean(""), Boolean("hello"), Boolean(null),
and Boolean(undefined) return.*/ 

console.log("boolean(0): " + Boolean(0))
console.log("boolean(1): " + Boolean(1))
console.log('boolean(""): ' + Boolean(""))
console.log('boolean("hello"): ' + Boolean("hello"))
console.log("boolean(null): " + Boolean(null))
console.log("boolean(undefined): " + Boolean(undefined))

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 5 (Type checker function):
Write a function describe(value) that returns:
• "This is a string" for strings
• "This is a number" for numbers
• "This is a boolean" for booleans
• "This is null" for null
• "This is undefined" for undefined
• "This is an array" for arrays
• "This is an object" for other objects
Test
with: describe("hi"), describe(42), describe(null), describe([1,2]), describe({name:"John"}).*/


function describe(value) {
    if (typeof value === "string") {
        console.log("this is a string")
    }else if (typeof value === "number") {
        console.log("this is a number")
    }else if (typeof value === "boolean") {
        console.log("this is a boolean")
    }else if (typeof value === null) {
        console.log("this is null")
    }else if (typeof value === "undefined") {
        console.log("this is undefined")
    }else if (Array.isArray(value)) {
        console.log("this is array")
    }else {
        console.log("this is a object")
    }
}

describe("hi")
describe(42)
describe(true)
describe(null)
describe()
describe([1, 2])
describe({ name: "John" })

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 1 (let reassignment):
Create a let variable score starting at 0. Increment it by 10, then by 25, then by 5. Log the value
after each change. */

let score = 0
console.log(score)
score += 10
console.log(score)
score += 25
console.log(score)
score += 5
console.log(score)

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 2 (const object trap):
Create a const variable user = { name: "Anna", age: 25 }. Change user.age to 26. Then try to
reassign the whole user to a new object { name: "Bob", age: 30 }. Catch the error and log
"Cannot reassign const". */

const user = {name: "ali" , age: 20}
console.log(user)
user.age = 26
console.log(user)
// user = {name: "bob" ,age: 30}
// console.log(user)
try {
    user = {name: "bob" ,age: 30}
} catch (error) {
    console.log("cannot reassign const")
}

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 3 (var hoisting puzzle):
Write this exact code and explain the output:
console.log(a);
var a = 10;
console.log(a); */

console.log(a);  //  undefined تم الإعلان عن المتغير دون اسناد قيمة له بالتالي قيمته الافتراضية   
var a = 10;
console.log(a);

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 4 (TDZ demonstration):
Write this code and explain the error:
console.log(b);
let b = 20; */
try {
console.log(b);
let b = 20; //    المتغير من نوع let او const لا يتم رفعه الى الاعلى بالتالي لا يمكن الوصول اليه قبل اسناد قيمة له
} catch (error) {
    console.log("cannot access 'b' before initialization")
}

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 5 (Block scope battle):
Write a block { let x = 5; var y = 10; }. Try to log x and y outside the block. Which one works?
Why? */

{ let x = 5 ; var y = 10}
// console.log(x)        //          let x => Block scope => لا يمكن الوصول اليه خارج البلوك
console.log(y)           //       var y => blobal scope => يمكن الوصول اليه خارج البلوك

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 6 (Pre vs post increment):
Write code that demonstrates the difference between:
let a = 5;
let b = a++;
let c = ++a;
Log a, b, and c and explain each value. */

let a1 = 4;
console.log(a1) 
let b1 = a1++;
console.log(b1)   //  زيادة لاحقة تم استخدام المتغير قبل الزيادة بالتالي تبقى قيمته 4 ثم تأخذ زيادة ب 1 بعد الطباعة لتصبح 5
let c1 = ++a1;  
console.log(c1)   // زيادة سابقة يتم زيادة بقيمة 1 ثم طباعته لتصبح القيمة 6

console.log("_".repeat(50))
"------------------------------------------------------------------------------"



