// get form element by id
const registerForm = document.querySelector('#register');
// handle form submit event
registerForm.addEventListener ('submit', function (event){ 
    event.preventDefault();
     //collect form data
     const formData = new FormData(registerForm);
     //send data to backend
     //display success message to user
     const messageH1 = document.querySelector('#message');
     messageH1.textContent = 'Account registered successfully!';

});
//declare variable age
const age = 71;


//define squareAge function
function squareAge (age) {
    return age**2;
}

const squaredAge = squareAge(34);
console.log (squaredAge);




