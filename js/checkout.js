const form = document.querySelector ("form");
const firstname = document.querySelector ("#firstName");
const firstNameError= document.querySelector ("#firstNameError");
const lastName = document.querySelector ("#lastName");
const lastNameError = document.querySelector ("#lastNameError");
const email = document.querySelector ("#email");
const emailError = document.querySelector ("#emailError");
const tel = document.querySelector ("#tel");
const telError = document.querySelector ("#telError");
const adress = document.querySelector ("#adress");
const adressError = document.querySelector ("#adressError");
const zip = document.querySelector ("#zip");
const zipError = document.querySelector ("#zipError");
const cvc = document.querySelector ("#cvc");
const cvcError = document.querySelector ("#cvcError");
const submit = document.querySelector ("#submit");


function checkoutValidation (event) {
    event.preventDefault();

    if (checkValue(firstname.value, 1)){
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }

    if (checkValue(lastName.value, 1)){
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }

    if (checkEmail(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkValue(tel.value, 8)) {
        telError.style.display = "none";
    } else {
        telError.style.display = "block";
    }

    if (checkValue(adress.value, 5)){
        adressError.style.display = "none";
    } else {
        adressError.style.display = "block";
    } 

    if (checkValue(zip.value, 4)){
        zipError.style.display = "none";
    } else {
        zipError.style.display = "block";
    } 

    if (checkValue(cvc.value, 3)){
        cvcError.style.display = "none";
    } else {
        cvcError.style.display = "block";
    } 
   
    if (
    checkValue(firstname.value, 1) && 
    checkValue(lastName.value, 1) && 
    checkEmail(email.value) &&
    checkValue(tel.value, 8) &&
    checkValue(adress.value, 5) && 
    checkValue(zip.value, 4) &&
    checkValue(cvc.value, 3) 
    ){
    window.location.href = "Checkoutsuccess.html";
    }
};

form.addEventListener("submit", checkoutValidation);

function checkValue (value, len){
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
};

function checkEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
};
