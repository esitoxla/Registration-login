//get form element by id
const loginform = document.querySelector('#login');
//handle form submit event
loginform.addEventListener('submit', function (event){
    event.preventDefault();
    // collect form data
    const formData = new FormData(loginform);
    //console.log (formData)
    const messageH1 = document.querySelector('#message');
    messageH1.textContent = 'Account registered successfully!';



})


//write fullname function
 function fullName (firstName, lastName){
   //return firstName + lastName;
    return `${firstName} ${lastName}`;
}

const myName = fullName('irene', 'toxla')
console.log(myName)
