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

/*Exercise 1 (Basic + operator):
Combine "JavaScript" and "is fun" with a space in between using the + operator. */

let str1 = "javaScript"
let str2 = "is fun"
console.log(str1 + " " + str2)


console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 2 (Template literal greeting):
Create variables firstName = "Sarah", lastName = "Chen", city = "New York". Use template literals
to create:
"Sarah Chen lives in New York" */

let firstName = "Sarah"
let lastName = "Chen"
let city = "new york"

console.log(`"${firstName} ${lastName} lives in ${city}"`)

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*• 5 + 5
• "5" + 5
• 5 + "5"
• "5" + "5"
Write a comment explaining each result. */


console.log(5 + 5) 
console.log("5" + 5)  
console.log(5 + "5")  
console.log("5" + "5")  

// عندما يكون أحد الطرفين نصاً يتم إعطاء الأولية لدمج النصوص

console.log("_".repeat(50))
"------------------------------------------------------------------------------"    

/*Exercise 4 (Order matters):
Predict then verify:
• 1 + 2 + "3"
• "1" + 2 + 3
• 1 + "2" + 3*/

console.log(1 + 2 + "3") // تم جمع الأعداد الصحيحة أولا ثم دمجها مع النص "3 لتصبح النتيجة 33"
console.log("1" +2 + 3)  // تم دمج النص "1" مع العدد 2 ليصبح "12" ثم دمجها مع العدد 3 لتصبح النتيجة "123"
console.log(1 + "2" + 3) // نفس الحالة السابقة

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 5 (Shopping receipt):
Given item = "Coffee", price = 4.5, quantity = 2, tax = 0.08. Use template literals to create:
text
Item: Coffee
Quantity: 2
Subtotal: $9
Tax: $0.72
Total: $9.72*/


let item = "Coffee"
let price = 4.5
let quantity = 2
let tax = 0.08

console.log(`Item: ${item} 
Quantity: ${quantity}
Subtotal: ${price * quantity}
Tax: ${price * quantity * tax}
Total: ${price * quantity + price * quantity * tax}`)

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 6 (Fix the missing space):
Fix this broken code:
let street = "123 Main";
let city = "Boston";
let address = street + "," + city;
console.log(address); // Currently "123 Main,Boston" - should be "123 Main, Boston" */

let street = "123 Main"
let city1 = "Boston"
let addressFalse = street + "," + city1
let addressTrue = street + ", " + city1

console.log(addressFalse) 
console.log(addressTrue)


console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 1 (Positive/Negative/Zero):
Write code that checks a number and prints "positive", "negative", or "zero".*/

function checkNumber(num) {
    if (num > 0) {
        console.log("Positive")
    } else if (num < 0) {
        console.log("Negative")
    } else {
        console.log("Zero")
    }
}

checkNumber(5)
checkNumber(-3)
checkNumber(0)

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 2 (Ternary for discount):
Use ternary to assign a message variable: if isPremium is true, message is "20% off", else "5% off".*/

let isPremium = 100

let resultTrue = isPremium > 50 ? "20% off" : "5% off"
let resultFalse = isPremium < 50 ? "20% off" : "5% off"

console.log(resultTrue)
console.log(resultFalse)

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 3 (Leap year checker):
Write a condition that checks if a year is a leap year (divisible by 4, but not by 100 unless also by
400). Test with 2020, 2021, 1900, 2000*/

function isLaepYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + ": is leap")
    }else {
        console.log(year + ": is not leap")
    }
}

isLaepYear(2020)
isLaepYear(2021)
isLaepYear(1900)
isLaepYear(2000)

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 4 (Login system):
Write an if/else chain that checks:
• If username is "admin" AND password is "1234" → "Welcome admin"
• Else if username is "guest" AND password is "guest" → "Welcome guest"
• Else → "Access denied"*/


function loginCheck(userName, password){
    if (userName === "admin" && password === "1234") {
        console.log("Welcome: " + userName)
    } else if (userName === "guest" && password === "guest") {
        console.log("Welcome: " + userName)
    } else {
        console.log("Access denied")
    }
}

loginCheck("admin", "1234")
loginCheck("guest", "guest")
loginCheck("Ali", "Alloush")

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 5 (Nested ternary for grades):
Rewrite this as a nested ternary:
let grade;
if (score >= 90) grade = "A";
else if (score >= 80) grade = "B";
else if (score >= 70) grade = "C";
else if (score >= 60) grade = "D";
else grade = "F";*/

let grade;

let score1 = 75

let result = score1 >= 90 ? grade = "A" : score1 >= 80 ? grade = "B" : score1 >= 70 ? grade = "C" : score1 >= 60 ? grade = "D" : grade = "F"

console.log(result)

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 6 (Short-circuit default):
Write code that uses || to set a variable username to the value of inputName if it exists,
otherwise "Anonymous". Test with inputName = "" and inputName = "John" */

let inputName1 = ""
let inputName2 = "John"
let userName1 = inputName1 || "Anynomous"
let userName2 = inputName2 || "Anynomous"

console.log(userName1)
console.log(userName2)

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 7 (Range validator):
Write a condition that checks if a number is between 1 and 100 (inclusive). If yes, print "Valid". If
below 1, print "Too low". If above 100, print "Too high".*/


function rangeCheck(num) {
    let result = num >= 1 && num <= 100 ? "Valid" : num < 1 ? "Too low" : "Too high"
    console.log(result)
}

rangeCheck(66)
rangeCheck(-10)
rangeCheck(115)

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 1 (Weekday/weekend):
Write a switch for dayNumber (1–7) that prints "Weekday" for 1–5 and "Weekend" for 6–7. Use fall-
through to group cases*/

let dayNumber = 3

switch (dayNumber) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("weekday")
        break;
    case 6:
    case 7:
        console.log("weekend")
        break;
}

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 2 (Simple calculator):
Write a switch that takes operator (+, -, *, /) and two numbers, then logs the result. Test with 10 +
5.*/

let operatore = "/"
let num5 = 10
let num6 = 5
let resulte

switch (operatore){
    case "+":
        resulte = num5 + num6
        break;
    case "-":
        resulte = num5 - num6
        break;
    case "*":
        resulte = num5 * num6
        break;
    case "/":
        resulte = num5 / num6
        break;
    default:
        resulte = "invalid operator"
}

console.log(resulte)

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 3 (Month to season):
Write a switch for month (1–12) that prints:
• Winter: 12, 1, 2
• Spring: 3, 4, 5
• Summer: 6, 7, 8
• Fall: 9, 10, 11
Use fall-through to group months.*/

let month = 7

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("winter")
        break;
    case 3:
    case 4:
    case 5:
        console.log("spring")
        break;
    case 6:
    case 7:
    case 8:
        console.log("summer")
        break;
    case 9:
    case 10:
    case 11:
        console.log("fall")
        break;
    default:
        console.log("Invalid month")
}

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 4 (HTTP status codes):
Write a switch for statusCode:
• 200 → "OK"
• 404 → "Not Found"
• 500 → "Server Error"
• default → "Unknown status"*/

function statuseCheck(httpStatus) {
    switch (httpStatus) {
        case 200:
            console.log("Ok")
            break;
        case 404:
            console.log("Not Found")
            break;
        case 500:
            console.log("Server Error")
            break;
        default:
            console.log("Unknown status")
    }
}

statuseCheck(200)
statuseCheck(404)
statuseCheck(500)
statuseCheck(403)

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 5 (Fall-through demonstration):
Write a switch for level (1–3) where:
• Level 1: "Basic"
• Level 2: "Intermediate" (and also includes Basic features)
• Level 3: "Advanced" (includes all lower levels)
Use fall-through so level 3 also shows "Intermediate" and "Basic". */


let level = 3
switch (level) {
    case 3:
        console.log("Advanced")
    case 2:
        console.log("Intermediate")
    case 1:
        console.log("Basic")
    break;
}

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 6 (Switch without break - intentional):
Write a switch for a command string ("start", "stop", "pause"). In each case, log the action, but
purposely omit break for "start" so it also logs "stop". Observe what happens. */

let state = 3

switch (state) {
    case 3:
        console.log("start")
    case 2:
        console.log("stop")
        break;
    case 1:
        console.log("pause")
}

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 7 (Switch with true expression):
Write a switch that uses switch(true) to check score ranges:
• score >= 90 → "A"
• score >= 80 → "B"
• score >= 70 → "C"
• score >= 60 → "D"
• default → "F"
Test with score = 85 */

let score4 = 85

switch (true) {
    case score4 >= 90:
        console.log("A")
        break;
    case score4 >= 80:
        console.log("B")
        break;
    case score4 >= 70:
        console.log("C")
        break;
    case score4 >= 60:
        console.log("D")
        break;
    default:
        console.log("F")
}


console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 1 (Countdown):
Write a for loop that counts backward from 10 to 1 and logs each number. Then log "Blast off!". */

for (let i = 10; i >= 1; i--) {
    console.log(i)
}
console.log("Blast off!")


console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 2 (Sum of numbers):
Use a while loop to calculate the sum of all numbers from 1 to 50. Log the result.*/

let sum = 0
let i = 1

while (i <= 50) {
    sum += i
    i++
}
console.log(sum)

console.log("_".repeat(50))
"------------------------------------------------------------------------------"


/*Exercise 3 (Multiplication table):
Write a for loop that prints the multiplication table for 7 (7×1=7, 7×2=14, ..., 7×12=84).*/

for (let i = 1; i <= 12; i++) {
    console.log(`7 * ${i} = ${7 * i}`)
}


console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 4 (Find first even):
Given an array [3, 7, 9, 12, 15, 18], use a for loop with break to find and log the first even
number*/

let array = [3, 7, 9, 12, 15, 18]

for (i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log("first even number: " + array[i])
        break;
    }
}

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Given a string "hello world", use a for loop to log each character, but use continue to skip vowels
(a, e, i, o, u).*/

let text = "hello world"

for (let i = 0; i < text.length; i++) {
    if (text[i] === "a" || text[i] === "e" || text[i] === "i" || text[i] === "o" || text[i] === "u" || text[i] === " ") {
        continue;
    }
    console.log(text[i])
}

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 6 (Triangle pattern):
Use nested loops to print:
text
*
**
***
****
*****/

for (let i = 1; i <= 5; i++) {
    let x = ""
    for (let j = 1; j <= i; j++) {
        x += "*"
    }
    console.log(x)
}

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 7 (Do-while user prompt simulator):
Simulate a prompt that asks the user to guess a number. Use a do-while loop with a variable guess
= 3 (simulating user input). Keep looping while guess !== 7. Change the guess after 2 iterations
to 7 so the loop exits.*/

let guess = 3 

do {
    console.log(guess)
    guess += 2
} while (guess !== 7)

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 1 (Basic function with return):
Write a function multiply(a, b) that returns the product. Call it with 4 and 5, then log the result.*/

function multiply(a, b) {
   return result = a * b
}

console.log(multiply(4, 5))

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 2 (Arrow function with default parameters):
Write an arrow function greet(name = "Guest") that returns "Hello, name!". Test with "Maria" and
with no argument.*/

const greet = (name = "Guest") => "Hello, " + name + "!";

console.log(greet("Maria"))
console.log(greet())

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 3 (Rest parameter sum):
Write a function product(...numbers) that multiplies all arguments and returns the result. Test
with product(2,3,4) and product(5,10).*/

function product(...numbers) {
    result = 1
    for (let i = 0; i < numbers.length; i++) {
        result *= numbers[i]
    }
    console.log(result)
}

product(2, 3, 4)
product(5, 10)

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 4 (Spread for array merge):
Write code that merges arr1 = [1, 2, 3] and arr2 = [4, 5, 6] into one array using spread. Then
log the merged array.*/

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

let arraymerge = [...arr1, ...arr2]
console.log(arraymerge)

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 5 (Spread for max value):
Given numbers = [45, 12, 78, 34, 89, 23], use spread with Math.max() to find and log the largest
number.*/

let numbers = [45, 12, 78, 34, 89, 23]

let largest = Math.max(...numbers)

console.log(largest)

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 6 (Rest with multiple parameters):
Write a function sendMessage(greeting, ...recipients) that returns an array of strings like:
// Example: sendMessage("Hi", "Anna", "Bob", "Charlie")
// Returns: ["Hi Anna", "Hi Bob", "Hi Charlie"]*/

function sendMessage(greeting, ...recipients) {
    let message =[]
    for (let i = 0; i < recipients.length; i++) {
        message.push(greeting + " " + recipients[i])
    }
    console.log(message)
}

sendMessage("Hi","Ali", "Anna", "Bob", "Charlie")

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

/*Exercise 7 (Spread for object merge with override):
Create defaultSettings = { theme: "dark", fontSize: 14, notifications: true }.
Create userSettings = { fontSize: 18, language: "en" }. Use spread to merge them (user
settings override defaults). Log the final object.*/

let defaultSettings = { theme: "dark", fontSize: 14, notifications: true }
let userSettings = { fontSize: 18, language: "en" }

let finalSettings = {...defaultSettings, ...userSettings}
console.log(finalSettings)

console.log("_".repeat(50))
"------------------------------------------------------------------------------"

console.log("End of Training")