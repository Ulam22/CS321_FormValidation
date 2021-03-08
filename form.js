const form = document.getElementById('CreateAccount')
const firstName = document.getElementById('first')
const password = document.getElementById('pass')
const errorMessage = document.getElementById('errorMessage')


form.addEventListener('submit', (e) => {
  let message = []
  if (firstName.value === '' || firstName.value == null) {
    message.push('Name is required')
  }
  if (password.value === 'password') {
    message.push('Password cannot be password')
  }
  if (password.length <= 7) {
    message.push('Password cannot be less than 8 characters')
  }
  if (message.length > 0) {
    e.preventDefault()
    errorElement.innerText = message.join(', ')
  }

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

)
console.log('success!')