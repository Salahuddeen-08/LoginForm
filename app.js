function textPwdS() {
    var x = document.getElementById("passwS");
    var seen = document.getElementById("eyeOS");
    var Nseen = document.getElementById("eyeSS");

    if (x.type === "password") {
        x.type = "text";
        seen.style.display = "flex";
        Nseen.style.display = "none";
    } else {
        x.type = "password";
        seen.style.display = "none";
        Nseen.style.display = "flex";
    }
}

function textPwdL() {
    var x = document.getElementById("passwL");
    var seen = document.getElementById("eyeOL");
    var Nseen = document.getElementById("eyeSL");

    if (x.type === "password") {
        x.type = "text";
        seen.style.display = "flex";
        Nseen.style.display = "none";
    } else {
        x.type = "password";
        seen.style.display = "none";
        Nseen.style.display = "flex";
    }
}

var signupCont = document.getElementById("signupC");
var loginCont = document.getElementById("loginC");

function switchToLogin() {
    signupCont.style.display = "none";
    loginCont.style.display = "flex";
}

function switchToSignup() {
    signupCont.style.display = "flex";
    loginCont.style.display = "none";
}