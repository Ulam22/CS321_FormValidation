const form = document.getElementById('CreateAccount')
const firstName = document.getElementById('first')
const password = document.getElementById('pass')
const errorMessage = document.getElementById('errorMessage')

form.addEventListener('onClick', (e) => {
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
function check(){
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
  
  function checkFields() { 
    if (document.getElementById('first').value == "")  { 
        window.alert("Please enter your first name."); 
        return false; 
    } 
  
    if (document.getElementById('last').value == "")  { 
        window.alert("Please enter your last name.");  
        return false; 
    } 
    if (document.getElementById('phone').value == "") { 
      window.alert( 
        "Please enter your phone number"); 
      return false; 
  } 
  
    if (document.getElementById('address').value == "") { 
        window.alert( 
          "Please enter your home address"); 
        return false; 
    } 
  
    if (document.getElementById('email').value == "") { 
        window.alert( 
          "Please enter your email."); 
        return false; 
    } 
  
    if (document.getElementById('pass').value == "") { 
        window.alert("Please enter your password");  
        return false; 
    } 
  
    if (document.getElementById('confirmPass').value == "") { 
      window.alert("Please enter your password");  
      return false; 
  }
    window.alert("From successfully submitted"); 
    return true;
     
  } 