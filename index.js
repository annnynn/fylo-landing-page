const email = document.getElementById("email");
const form = document.querySelector("form");
const errorMessage = document.getElementById("errorMessage");
const formTwo = document.querySelector("formTwo");



function validate() {

    document.getElementById("submit").addEventListener("click", validate);

    let regx = /^([a-z 0-9\.-]+)@([a-z0-9]+).([a-z]{2,8})(.[a-z]{2,8})?$/;

    if (regx.test(email.value)) {
        document.getElementById("errorMessage").innerHTML = "";
        document.getElementById("errorMessage").style.visibility = "visible";
        document.getElementById("errorMessage").style.color = "green";
        document.getElementById("email").style.border = "1px solid green";
    } else {
        document.getElementById("errorMessage").innerText = "Please check your email";
        document.getElementById("errorMessage").style.visibility = "visible";
        document.getElementById("errorMessage").style.color = "red";
        document.getElementById("email").style.border = "1px solid red";
    }  

}

function validateSignUp() {

    let regx = /^([a-z 0-9\.-]+)@([a-z0-9]+).([a-z]{2,8})(.[a-z]{2,8})?$/;

    if (regx.test(signup.value)) {
        document.getElementById("signUpError").innerHTML = "";
        document.getElementById("signUpError").style.visibility = "visible";
        document.getElementById("signUpError").style.color = "green";
        document.getElementById("signup").style.border = "1px solid green";
    } else {
        document.getElementById("signUpError").innerHTML = "Please check your email";
        document.getElementById("signUpError").style.visibility = "visible";
        document.getElementById("signUpError").style.color = "white";
        document.getElementById("signup").style.border = "1px solid red";
    }
}