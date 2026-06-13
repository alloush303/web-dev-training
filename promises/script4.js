/* 4- Fetch the data from the URL: https://jsonplaceholder.typicode.com/users
Display the results on the page using JavaScript DOM. Create cards with CSS classes. Display 3 cards per row,
centered within the page. If there are 10 users, we will have 4 rows (3+3+3+1).
Each card should show the user's name, email, phone number, and address street. Design the CSS as you
like." */ 

const boxContainer = document.querySelector(".box")
fetch('https://jsonplaceholder.typicode.com/users').then((response)=> {
    if(response.ok){
        return response.json()
    }else{
        alert('فشل الاتصال: ' + response.status)
    }
})
.then((users) => {
    users.forEach((user) => {
        const card = document.createElement('div');
        card.classList.add('card')

        const userName = document.createElement('h3')
        userName.textContent = `- User Name: ${user.name}`;
        
        const userEmail = document.createElement('p')
        userEmail.textContent = `- User Email: ${user.email}`;
        
        const phoneNumber = document.createElement('p')
        phoneNumber.textContent = `- Phone Number: ${user.phone}`
        
        const address = document.createElement('p')
        address.textContent = `- Address: ${user.address.street}`
        
        card.appendChild(userName)
        card.appendChild(userEmail)
        card.appendChild(phoneNumber)
        card.appendChild(address)

        boxContainer.appendChild(card)

    })
})
.catch((error) => {
    alert('NetWork Error' + error);
})