// this is for the sign in & sign up page from 1-55
// this part the error for sign in page

function setformmessage(formElement, type, message){
    const messageElement = formElement.querySelector(".form-message")
    messageElement.textContent = message;
    messageElement.classList.remove("form-message-success","form-message-error");
    messageElement.classList.add(`form-message-${type}`);
}
// this part the error for create account which is not working
function setinputerror(inputElement, message) {
    inputElement.classList.add ("form-input-error");

    inputElement.parentElement.querySelector(".form-input-errormessage").textContent = message;

}
function clearinputerror(inputElement) {
    inputElement.classList.remove("from-input-error");
    inputElement.parentElement.querySelector(".form-input-errormessage").textContent = "";
}

// show meessage
document.addEventListener("DOMContentLoaded", () => {
    const loginform = document.querySelector("#login");
    const createaccountform = document.querySelector("#signup");

    document.querySelector("#linksignup").addEventListener ("click", e =>{
        e.preventDefault();
        loginform.classList.add("form-hidden");
        createaccountform.classList.remove("form-hidden");        
    });
    document.querySelector("#linklogin").addEventListener ("click", e => {
        e.preventDefault();
        loginform.classList.remove("form-hidden");
        createaccountform.classList.add("form-hidden");        
    });
    // sign in error
    loginform.addEventListener("submit", e => {
        e.preventDefault();
        // perform your fetch login
        setformmessage(loginform, "error", "Invalid username or password")
    })

    // sign up error this part is not working
    document.querySelectorAll(".form-input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if(e.target.id === "signupusername" && e.target.value.lenth > 0 && e.target.value.lenth < 6 ) {
                setinputerror(inputElement, "Username must be at least 6 characters in length" );
            }
        })
        inputElement.addEventListener("input", e => {
            clearinputerror(inputElement);
        })
    })
})


const api_url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo';
fetch(api_url)
.then(res => res.json())
.then(data => console.log(data))

