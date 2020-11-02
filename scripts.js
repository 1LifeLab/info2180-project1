

/* Add your JavaScript to this file */

window.onload=function{
    var form = document.querySelector ("div form");
    var message = document.querySelector ("div .message");
    var button = document.querySelector("btn");
    
    var email =document.getElementById('email');


    button.addEventListener('click', function(e){
        e.preventDefault();
        if (email) {
            message.innerHTML = "Thank you! Your email address " + email + "has been added to our mailing list!"
        } else {
            
            message.innerHTML = " Please enter a valid email address " 
        }
        return false;
    }
   
}   




