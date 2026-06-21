var acc = ["ali@gmail.com",
    "ahmed@gmail.com",
    "sara@gmail.com",
    "fatima@gmail.com",
    "usman@gmail.com"]

var pass = ["ali123",
    "ahmed123",
    "sara123",
    "fatima123",
    "usman123"]

var balance = [500,
    1200,
    750,
    2000,
    900]

function login() {
    // var email = prompt ("Enter Email")
    // var password = prompt ("Enter Password")
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    var index = acc.indexOf("email")
    if (index != -1, pass[index] === password) {
        alert("login succesfully");


    }
    else {

    }
}

function signup() {

    let newEmail = document.getElementById("newEmail").value;
    let newPassword = document.getElementById("newPassword").value;

    if (accounts.includes(newEmail)) {
        alert("Account Already Exists");
        return;
    }

    accounts.push(newEmail);
    passwords.push(newPassword);
    balances.push(0);

    alert("Account Created Successfully");
}