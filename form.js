var check = function() {
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
