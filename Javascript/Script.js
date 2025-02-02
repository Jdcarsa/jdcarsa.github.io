const navToggle = document.querySelector(".nav-burger");
const navMenu = document.querySelector(".menu");
const form = document.getElementById('form');
const submit = document.querySelector('.btn-send');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const open = document.getElementById('open');
const close = document.getElementById('close');
const messageError = document.querySelector('.message-error');



/* This code adds a click event listener to the `navToggle` element.
When the element is clicked, it
toggles the visibility of the `navMenu` element by adding or removing the 
class "menu_visible". */
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("menu_visible");
    if (navMenu.classList.contains("menu_visible")) {
        open.style.display = "none";
        close.style.display = "block";
    } else {
        close.style.display = "none";
        open.style.display = "block";
    }
});


form.addEventListener("submit", sentEmail)

/**
 * @brief The function `sentEmail` is an asynchronous function 
 * that sends an email using form data and
 * displays a success or failure message.
 * @param event - The event parameter is the event object that is 
 * passed to the function when the event
 * occurs. In this case, it is the submit event object of a form.
 */

async function sentEmail (event){
        event.preventDefault();
        const formData = new FormData(this);
        const response = await fetch(this.action , {
            method: this.method,
            body: formData,
            headers:{
                'Accept': 'application/json'
            }
        })
        let flag = validateContac();
        if(response.ok && flag){
            this.reset()
            alert('Email sent successfully')
        } else {
            alert('Email not sent ')
        }
} 



/**
 * The function "validateContac" is used to validate the inputs 
 * for name, email, and message, and
 * returns true if all inputs are valid.
 * @returns the result of the validation checks for the name, email, and message inputs.
 */
function validateContac(){
    return validateInputs(nameInput,'Name is required', 'Invalid name')
    &validateEmail(emailInput.value, 'Email is required' , 'Invalid email')
    &validateInputs(messageInput,'Message is required', 'Invalid message')
}


/**
 * The function "validateInputs" is used to validate input fields in a form, 
 * checking for empty fields
 * and invalid data.
 * @param inputElement - The inputElement parameter is the HTML input element 
 * that you want to validate.
 * @param messageFieldEmpty - The message to display in the input element's placeholder 
 * when the field is empty.
 * @param messageInvalidData - The parameter `messageInvalidData` is a message that 
 * will be displayed in the input element's placeholder if the input data is invalid.
 * @returns a boolean value. It returns true if the input is valid and false 
 * if the input is empty or contains invalid data.
 */

function validateInputs(inputElement, messageFieldEmpty , messageInvalidData){
    inputElement.value.trim();
    if(inputElement.value.length === 0){
        inputElement.classList.add("error");
        inputElement.placeholder = messageFieldEmpty;
        return false;
    }
    if(isBlank(inputElement.value)){
        inputElement.value = '';
        inputElement.classList.add("error");
        inputElement.placeholder = messageInvalidData;
        return false;
    }
    else {
        inputElement.classList.remove("error");
        return true;
    }
}


/**
 * The function `validateEmail` checks if an email address is valid and displays 
 * error messages if the field is empty or the data is invalid.
 * @param correo - The "correo" parameter represents the email address that needs 
 * to be validated.
 * @param messageFieldEmpty - The parameter "messageFieldEmpty"
 * is a message that will be displayed when the email input field is empty.
 * @param messageInvalidData - The message to display when the email is invalid.
 * @returns a boolean value. If the email is valid, it returns true. 
 * If the email is empty, it calls the validateInputs function and returns its result. 
 * If the email is invalid, it sets the email input value to an empty string, adds the 
 * error" class to the email input, sets the placeholder to the
 * messageInvalidData, and returns false.
 */

function validateEmail(correo , messageFieldEmpty, messageInvalidData) {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(regex.test(correo)){
        emailInput.classList.remove("error");
        return true;
    } else if(emailInput.value.length === 0){
        return validateInputs(emailInput, messageFieldEmpty, messageInvalidData)
    } 
    else{
        emailInput.value = '';
        emailInput.classList.add("error");
        emailInput.placeholder = messageInvalidData;
        return false;
    }
}

/**
 * The function checks if a string is blank or consists only of whitespace characters.
 * @param str - The parameter "str" is a string that you want to check if it is blank or not.
 * @returns The function isBlank is returning a boolean value.
 * It returns true if the input string is
 * blank (empty or contains only whitespace characters), and false otherwise.
 */

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}





