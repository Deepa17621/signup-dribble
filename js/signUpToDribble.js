let google = document.querySelector(".google-SignUp-Btn");
let twitter = document.querySelector(".twitter");
let faceBook = document.querySelector(".facebook");
let createBtn = document.querySelector(".createBtn");
let formElement = document.querySelector(".formElement");

let fullName = document.querySelector("#fullName");
let userName = document.querySelector("#userName");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let termsAndConditions = document.querySelector("#termsConditions");

createBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log(termsAndConditions.value);
    
    
});