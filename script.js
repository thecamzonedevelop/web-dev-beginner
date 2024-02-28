
var SwitchResgister = document.getElementById("Switch-Resgister");
var SwitchLogin = document.getElementById("Switch-Login");
var LoginForm = document.getElementById("LoginForm")
var ResgisterForm = document.getElementById("ResgisterForm");
var Form = document.getElementById("Form");


var checkGmail = document.getElementById("h6");

function CreateAccount(){
var userName = document.getElementById("userName");
var Gmail = document.getElementById("RegisterEmail");
var Password = document.getElementById("RegisterPassword");

    var userInfo = {
        userName : userName.value,
        Gmail :Gmail.value,
        Password : Password.value
    }
    localStorage.setItem("UserGmail",JSON.stringify(userInfo));
    alert("Register Success !! ");
    userName.value = "";
    Gmail.value = "";
    Password.value = "";
}
function checkUser(){
    var LoginGmail = document.getElementById("email").value;
    var LoginPassword = document.getElementById("password").value;

    var keys = Object.keys(localStorage);
    var isUserEmailFound = false;
    for(var i = 0 ; i < keys.length ; i++){
        var storedUser = JSON.parse(localStorage.getItem(keys[i]));
        if(storedUser && storedUser.Gmail === LoginGmail && storedUser.Password === LoginPassword){
            isUserEmailFound = true;
            break;
        }
    }
    if(isUserEmailFound){
        alert("Welcome "+storedUser.userName);
    }
    else{
        checkGmail.style.visibility = "visible";
    }
}

function ClearAlert(){
    checkGmail.style.visibility = "hidden";
}
SwitchResgister.onclick = function(){
    ResgisterForm.style.left = "175px";
    LoginForm.style.right = "-400px";
    Form.style.height= "500px";
    Form.style.width= "350px";
}
SwitchLogin.onclick = function(){
    ResgisterForm.style.left = "-400px";
    LoginForm.style.right = "25px";
    Form.style.height= "400px";
    Form.style.width= "300px";
}



