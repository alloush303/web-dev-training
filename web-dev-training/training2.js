/* 1- Given the following list of names: [moaz, yassen, lana, mazen, loay, lama].
Iterate through each name, and for each character in the name, if the character is
one of the vowels (a, i, o, u, e), convert it to uppercase.
Spotcode
The final printed output should look like this: [mOAz, yAssEn, lAnA, mAzEn, lOAy,
lAmA]. */



let names = ["moaz", "yassen", "lana", "mazen", "loay", "lama"]
let vowels = ["a", "o", "u", "i", "e"]

const namesUpdate = names.map(name => {
    return name.split('').map(char => {
        return vowels.includes(char) ? char.toUpperCase() : char;
    }).join('')
})

console.log(namesUpdate)

console.log("_".repeat(50))
"--------------------------------------------"

/* 2- I want to create 2 arrays: one for males and one for females.
I want to store each name inside an object, and each person should have their own ID consisting of 3 digits.
Create the IDs, making sure they are not repeated among all people.
Names:
[yamen, majd, hanan, rawan, yazan, moaz]
Expected output example for men:
[{name: "yamen", id: 231}, {name: "majd", id: 478}, ...]
(Note: hanan and rawan go to females array; the rest go to males.) */


let name = ["yamen", "majd", "hanan", "rawan", "yazan", "moaz"]

let male = []
let female = []

name.forEach(item => {
    const nameObj = {id : Math.trunc(Math.random() * 1000), name : item}
    
    if (item === "hanan" || item === "rawan"){
        female.push(nameObj)
    }else {
        male.push(nameObj)
    }
});

console.log(male)
console.log(female)



console.log("_".repeat(50))
"-------------------------------------------------------"

/* 3- You are given the following array of items:
["banana", "syria", "iphone 12", "orange", "blueberry", "france", "labtop", "s23", "turkey"]
Classify these items into three separate arrays:
countries
fruits
electronics
Then, print each array as a list, starting with the array name as a title, followed by the items numbered from
1.
Expected output:
text
fruits:
1- banana
2- orange
3- blueberry
countries:
1- syria
2- france
3- turkey
electronics:
1- iphone 12
2- labtop
3- s23*/

let items = ["banana", "syria", "iphone 12", "orange", "blueberry", "france", "labtop", "s23", "turkey"]

let fruits = []
let countries = []
let electronics = []

items.forEach(item => {
    if (item === "banana" || item === "orange" || item === "blueberry"){
        fruits.push(item)
    }else if (item === "syria" || item === "france" || item === "turkey"){
        countries.push(item)
    }else if ( item === "iphone 12" || item === "labtop" || item === "s23"){
        electronics.push(item)
    }
})

function list(title, array){
    console.log(`${title}`)
    array.forEach((item, index) => {
        console.log(`${index + 1}- ${item}`)
    } )
}

list("fruits:", fruits)
list("countries:", countries)
list("electronic:", electronics)



console.log("-".repeat(50))
"-----------------------------------------------------------"


/* 4- Write a mathematical equation in the following form:
3x^2 + 4x + 3 = ....
Where:
x is a number entered by the user.
The constants (3, 4, 3) are also numbers entered by the user.
The only mathematical operation is addition (no subtraction — all constants are positive or handled via
signed input if needed).
Finally, print the output in the following format:
text
3x^2 + 4x + 3 ====> 3(3)^2 + 4(3) + 3 = result
Example:
If x = 2, constants are 2, 6, 1, the output would be:
text
2x^2 + 6x + 1 ====> 2(2)^2 + 6(2) + 1 = 21*/



function mathEquation(X, const1, const2, const3, operation){
    if (X && const1 && const2 && const3 > 0 && operation === "+"){
        result = const1 * Math.pow(X, 2) + const2 * X + const3 

        console.log(`${const1}x^${2} + ${const2}x + ${const3} =====> ${const1}(${X})^${2} + ${const2}(${X}) + ${const3} = ${result}`)
    }else {
        console.log("Erorr input")
    }
}

mathEquation(2, 5, 4, 7, "+")



console.log("-".repeat(50))
"-----------------------------------------------------------------"

