// // Simulating API calls with callbacks
// function getUser(userId, callback) {
// setTimeout(() => {
// console.log('1. Got user');
// callback({ id: userId, name: 'John' });
// }, 1000);
// }
// function getOrders(user, callback) {
// setTimeout(() => {
// console.log('2. Got orders for', user.name);
// callback(['Order1', 'Order2']);
// }, 1000);
// }
// function getOrderDetails(order, callback) {
// setTimeout(() => {
// console.log('3. Got details for', order);
// callback({ order: order, total: 100 });
// }, 1000);
// }
// function processPayment(details, callback) {
// setTimeout(() => {
// console.log('4. Payment processed for', details.order);
// callback({ success: true, amount: details.total });
// }, 1000);
// }
// // CALLBACK HELL - Nested pyramid
// getUser(1, (user) => {
// getOrders(user, (orders) => {
// getOrderDetails(orders[0], (details) => {
// processPayment(details, (result) => {
// console.log('Final result:', result);
// console.log('Done!');
// });
// });
// });
// });


//        1- Convert Callback Code to Promises

function getUser(userId) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log('1. Got user');
            resolve({ id: userId, name: 'John' });
        }, 1000);
    })
}

function getOrders(user) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log('2. Got orders for', user.name);
            resolve(['Order1', 'Order2']);
        }, 1000);
    })
}

function getOrderDetails(order){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('3. Got details for', order);
            resolve({ order: order, total: 100 });
        }, 1000);
    })
}

function processPayment(details){
    return new Promise((resolve, rejecr) => {
        setTimeout(() => {
            console.log('4. Payment processed for', details.order);
            resolve({ success: true, amount: details.total });
        }, 1000);
    })
}



getUser(1).then((user) => getOrders(user).then((orders) => getOrderDetails(orders[0]).then((details) => processPayment(details).then((result) => {
    console.log('Final result:', result)
}).finally(() => {
    console.log('Done !')
    console.log('-'.repeat(50))

}))))

//--------------------------------------------------------------------------------------------------------

// XHR GET Request
// function getUserXHR(userId) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', `https://jsonplaceholder.typicode.com/users/${userId}`, true);
//     xhr.onload = function() {
//         if (xhr.status === 200) {
//             const user = JSON.parse(xhr.responseText);
//             console.log('XHR Success:', user);
//         } else {
//             console.log('XHR Error:', xhr.status);
//         }
//     };
//     xhr.onerror = function() {
//         console.log('Network Error!');
//     };
//     xhr.send();
// }
// getUserXHR(1);

// 2- Convert this code to Fetch API, and also provide an Async/Await version.

fetch('https://jsonplaceholder.typicode.com/users').then((response) => { 
    if (response.status === 200){
        return response.json()
    }else{
        console.log('Connection failed: ' + response.status)
    }
} ).then((data) => {
    console.log(`ID: ${data[0].id}, Name: ${data[0].name}`)
        console.log('-'.repeat(50))

}).catch((erorr) => {
    console.log("Network Error!")
    console.log('-'.repeat(50))

})


//-------------------------------------------------------------------------------------------------------

/* 3- Create a Fetch API POST request to the endpoint 'https://jsonplaceholder.typicode.com/posts'. The function
should accept an object as an argument containing the data to be posted. Validate the input data before
sending. Display the response message 'Created new post' upon success.
Use the XHR code as a reference for additional details.":
// XHR POST Request
function createPostXHR() {
const xhr = new XMLHttpRequest();
xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
xhr.setRequestHeader('Content-Type', 'application/json');
const newPost = {
title: 'My Post',
body: 'This is the content',
userId: 1
};
xhr.onload = function() {
if (xhr.status === 201) {
const response = JSON.parse(xhr.responseText);
console.log('XHR Created:', response);
} else {
console.log('XHR Error:', xhr.status);
}
};
xhr.send(JSON.stringify(newPost));
}
createPostXHR();*/



const newPost = {
title: 'My Post',
body: 'This is the content',
userId: 1
};

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(newPost)
})

.then((response) => {
    if (response.status === 201) {
        return response.json()
    }else{
        console.log('Connection failed: '+ response.status)
            console.log('-'.repeat(50))

        
    }
})

.then((result) => {
    console.log('Created new post ' + result.body)
    console.log('-'.repeat(50))

})
.catch((error) => {
    console.log('Created Error ' + error)
    console.log('-'.repeat(50))

})


//-------------------------------------------------------------------------------------------------------


