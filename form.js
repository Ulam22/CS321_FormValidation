const form = document.getElementById('CreateAccount')
const firstName = document.getElementById('first')
const password = document.getElementById('pass')
const errorMessage = document.getElementById('errorMessage')


form.addEventListener('submit', (e) => {
  let messages = []
  if (firstName.value === '' || firstName.value == null) {
    messages.push('Name is required')
  }
  if (password.value === 'password') {
    messages.push('Password cannot be password')
  }
  if (password.length <= 7) {
    messages.push('Password cannot be less than 8 characters')
  }
  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
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
