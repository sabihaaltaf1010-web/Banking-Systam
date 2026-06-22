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

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let index = acc.indexOf(email);

    if (index !== -1 && pass[index] === password) {

        alert("Login Successfully");

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid Email or Password");

    }
}

function signup() {

    let newEmail = document.getElementById("newEmail").value;
    let newPassword = document.getElementById("newPassword").value;

    if (acc.includes(newEmail)) {

        // alert("Account Already Exists");

         window.location.href = "dashboard.html";
        return;
    }

    acc.push(newEmail);
    pass.push(newPassword);
    balance.push(0);

    alert("Account Created Successfully");

     window.location.href = "dashboard.html";
}

function exitProgram(){
    alert("Thank You For Using Sabia Bank");
}

function checkBalance(){

    let email = prompt("Enter Your Email");

    let index = acc.indexOf(email);

    if(index !== -1){

        alert(
            "Account Holder: " + acc[index] +
            "\nBalance: Rs. " + balance[index]
        );

    }else{

        alert("Account Not Found");

    }
}

function withdraw(){

    let email = prompt("Enter Your Email");
    let amount = Number(prompt("Enter Amount"));

    let index = acc.indexOf(email);

    if(index === -1){

        alert("Account Not Found");
        return;

    }

    if(amount > balance[index]){

        alert("Insufficient Balance");

    }else{

        balance[index] -= amount;

        alert(
            "Withdrawal Successful" +
            "\nRemaining Balance: Rs. " + balance[index]
        );

    }
}

function transfer(){

    let sender = prompt("Enter Your Email");
    let receiver = prompt("Enter Receiver Email");
    let amount = Number(prompt("Enter Amount"));

    let senderIndex = acc.indexOf(sender);
    let receiverIndex = acc.indexOf(receiver);

    if(senderIndex === -1 || receiverIndex === -1){

        alert("Invalid Account");
        return;

    }

    if(amount > balance[senderIndex]){

        alert("Insufficient Balance");

    }else{

        balance[senderIndex] -= amount;
        balance[receiverIndex] += amount;

        alert("Transfer Successful");

    }
}

function deposit(){

    let email = prompt("Enter Your Email");
    let amount = Number(prompt("Enter Deposit Amount"));

    let index = acc.indexOf(email);

    if(index === -1){

        alert("Account Not Found");
        return;

    }

    balance[index] += amount;

    alert(
        "Deposit Successful" +
        "\nCurrent Balance: Rs. " + balance[index]
    );

    if(amount <= 0){
    alert("Please Enter a Valid Amount");
    return;
}
}