// let google = document.querySelector(".google-SignUp-Btn");
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
    formElement.requestSubmit();
});

formElement.addEventListener("submit", e=>{
    e.preventDefault();
    let arr = [ fullName, userName, email, password];
    arr.forEach((ele)=>{
    ele.addEventListener('input', (e)=>{
        e.preventDefault();
        if(!ele.value){
            setError(ele, "required");
        }
        else{
            if((ele.value.trim() === email.value.trim() && !validateEmail(ele))){
                setError(ele, "enter valid email!");
            }
            else if((ele.value.trim() === password.value.trim() && (ele.value).length<6)){
                setError(ele, "password should be atleast 6 characters!")
            }
            else setSuccess(ele);
        } 
        e.stopPropagation()
    })
})
    if(validateFields()){
        alert("Successfully submited!")
        e.target.reset();
        location.reload();
    }
    
})

const setError = (ele, message)=>{
        let inpControl = ele.parentElement;
        let error = inpControl.querySelector(".err");
        error.innerText = message;
        ele.classList.add("error");
        ele.classList.remove("success");
        return
}
const setSuccess = ele=>{
    let inpControl = ele.parentElement;
    let error = inpControl.querySelector(".err");
    error.innerText ='';
    ele.classList.add("success");
    ele.classList.remove("error");
}

const validateEmail = (ele)=>{
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

    if(!termsAndConditions.checked){
        termsAndConditions.style.cssText = `border: 2px solid red;
                                            height: 15px;
                                            width: 15px;`
                                            return;
    }
    console.log(fullNameValue);
    console.log(passwordValue);
    console.log(userNameValue);
    console.log(emailValue); 
    return true;
}
window.onload = ()=>{
    formElement.reset();
}