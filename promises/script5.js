/* 5- Give an example of Promise.all that returns data. Don't forget to use .catch() and .finally() .
output:
• First promise: success
• Second promise: success after 5 seconds
• Third promise: success */

    let success = true


const firstPromise = new Promise((resolve, reject) => {
        if(success){
            resolve("First promise: success")
        }else{
            reject("Promis Error")
        }
})

const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        if(success){
            resolve("Second promise: success after 5 seconds")
        }else{
            reject("Promis Error")
        }
    },5000)
})

const thirdPromise = new Promise((resolve, reject) => {
    if(success){
        resolve("Third promise: success")
    }else{
        reject("Promis Error")
    }
})


Promise.all([firstPromise, secondPromise, thirdPromise]).then((result) => {
    console.log(result)
})
.catch((error) => {
    console.log(error)
})
.finally(() => {
    console.log("Promises is Done")
})