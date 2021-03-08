const form = document.getElementById('CreateAccount')
const firstName = document.getElementById('first')
const password = document.getElementById('pass')
const errorMessage = document.getElementById('errorMessage')

document.getElementById('submit-btn').addEventListener('submit', (e) => {
  let message = []

  if (password.value === 'password') {
    return message.push('Password cannot be password')
  }

  if (message.length > 0) {
    e.preventDefault()
    errorMessage.innerText = message.join(', ')
  }
 //^ might just delete all this


  
 }
)

function passwordMatch() {
   if (document.getElementById('pass').value ==
     document.getElementById('confirmPass').value) {
      document.getElementById('message').innerHTML = 'Passwords Match';
      document.getElementById('message').style.color = 'green';
     return true;
   } else {
   document.getElementById('message').innerHTML = 'Passwords NOT Matching';
   document.getElementById('message').style.color = 'red';
     return false;
   }
}