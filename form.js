let form = document.getElementById('CreateAccount')
const firstName = document.getElementById('first')
const password = document.getElementById('pass')
const errorMessage = document.getElementById('errorMessage')

function validate() {
  let messages = []

  if (password.value === 'password') {
    return messages.push('Password cannot be password')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorMessage.innerText = messages.join(', ')
  }
 //^ might just delete all this

  console.log(alert('success'))
}


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