const email = document.getElementById("email").value;
const form = document.querySelector("form");
const errorMessage = document.getElementById("errorMessage");

document.getElementById("submit").addEventListener("click", validate);

function validate(){

    let regx = /^([a-z 0-9\.-]+)@([a-z0-9]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
   
      if(regx.test(email)){
        document.getElementById("errorMessage").innerText="enni";
        document.getElementById("errorMessage").style.visibility="visible";
        document.getElementById("errorMessage").style.color="green";
      }else{
           document.getElementById("errorMessage").innerText="Please check your email";
           document.getElementById("errorMessage").style.visibility="visible";
           document.getElementById("errorMessage").style.color.red;
      }

}