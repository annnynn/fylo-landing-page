function validateEmail() {
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var error = document.getElementById("error");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        error.innerHTML = "Email is correct";
        error.style.color = "#00ff00";
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        error.innerHTML = "check your email";
        error.style.color = "#ff0000";
    }

     if(email == ""){
        form.classList.remove("valid");
        form.classList.remove("invalid");
        error.innerHTML = "";
        error.style.color = "#00ff00";
     }
}