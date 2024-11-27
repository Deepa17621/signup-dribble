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

function validateTermsAndConditions(ele){
    ele.addEventListener("change", e=>{
        if(ele.cheaked) return true;
        else return false;
    })
}

createBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    if(validateTermsAndConditions(termsAndConditions)){
        validateFields();
    }  
    else {
        termsAndConditions.style.borderColor="red";
        return;
    }
});

const setError = (ele, message)=>{
        let inpControl = ele.parentElement;
        let error = inpControl.querySelector(".err");
        error.innerText = message;
        ele.classList.add("error");
        ele.classList.remove("success");
}
const setSuccess = ele=>{
    let inpControl = ele.parentElement;
    let error = inpControl.querySelector(".err");
    error.innerText ='';
    ele.classList.add("success");
    ele.classList.remove("error");
}

const validateEmail = (ele, message)=>{
    return (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(ele.value)
}

function validateFields(){
    const fullNameValue = fullName.value;
    const userNameValue = userName.value;
    const passwordValue = password.value.trim();
    const emailValue = email.value.trim();
    
    !(fullNameValue) ? setError(fullName, "required") : setSuccess(fullName);
    !(userNameValue) ? setError(userName, "required") : setSuccess(userName);

    if(!emailValue) setError(email, "required");
    else if(!validateEmail(email)) setError(email, "invalid email pattern!");
    else setSuccess(email);

    if(!passwordValue) setError(password, "required");
    else if(passwordValue.length < 6) setError(password, "atleast 6 characters required!");
    else setSuccess(password);
}
