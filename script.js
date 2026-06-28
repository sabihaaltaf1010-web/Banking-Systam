// =========================
// Default Accounts
// =========================

var acc = [
    "ali@gmail.com",
    "ahmed@gmail.com",
    "sara@gmail.com",
    "fatima@gmail.com",
    "usman@gmail.com",
    "noman@gmail.com"
];

var pass = [
    "ali123",
    "ahmed123",
    "sara123",
    "fatima123",
    "usman123",
    "noman123"
];

var balance = [
    500,
    1200,
    750,
    2000,
    900,
    5000
];

var statement = [
    [],
    [],
    [],
    [],
    [],
    []
];

// =========================
// Load Local Storage
// =========================

acc = JSON.parse(localStorage.getItem("accounts")) || acc;
pass = JSON.parse(localStorage.getItem("passwords")) || pass;
balance = JSON.parse(localStorage.getItem("balances")) || balance;
statement = JSON.parse(localStorage.getItem("statements")) || statement;

// =========================
// Save Function
// =========================

function saveData() {

    localStorage.setItem("accounts", JSON.stringify(acc));
    localStorage.setItem("passwords", JSON.stringify(pass));
    localStorage.setItem("balances", JSON.stringify(balance));
    localStorage.setItem("statements", JSON.stringify(statement));

}

// =========================
// Login
// =========================

function login() {

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (!email || !password) {
        alert("Please Enter Email and Password");
        return;
    }

    let index = acc.indexOf(email);

    if (index !== -1 && pass[index] === password) {

        alert("Login Successful");

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid Email or Password");

    }

}

// =========================
// Signup
// =========================

function signup() {

    let newEmail = document.getElementById("newEmail").value.trim();
    let newPassword = document.getElementById("newPassword").value.trim();

    if (!newEmail || !newPassword) {

        alert("Please Enter Email and Password");
        return;

    }

    if (!newEmail.endsWith("@gmail.com")) {

        alert("Email must end with @gmail.com");
        return;

    }

    if (acc.includes(newEmail)) {

        alert("Account Already Exists");
        return;

    }

    acc.push(newEmail);
    pass.push(newPassword);
    balance.push(0);
    statement.push([]);

    saveData();

    alert("Account Created Successfully");

    window.location.href = "dashboard.html";

}

function exitProgram() {

    alert("Thank You For Using Sabia Bank");

}
// =========================
// Check Balance
// =========================

function checkBalance() {

    let email = prompt("Enter Your Email");

    let index = acc.indexOf(email);

    if (index === -1) {
        alert("Account Not Found");
        return;
    }

    alert(
        "Account Holder : " + acc[index] +
        "\nCurrent Balance : Rs. " + balance[index]
    );

}

// =========================
// Deposit
// =========================

function deposit() {

    let email = prompt("Enter Your Email");
    let amount = Number(prompt("Enter Deposit Amount"));

    let index = acc.indexOf(email);

    if (index === -1) {
        alert("Account Not Found");
        return;
    }

    if (amount <= 0) {
        alert("Please Enter Valid Amount");
        return;
    }

    balance[index] += amount;

    statement[index].push(
        "Deposit : +" + amount +
        " | Balance : " + balance[index]
    );

    saveData();

    alert(
        "Deposit Successful" +
        "\nCurrent Balance : Rs. " + balance[index]
    );

}

// =========================
// Withdraw
// =========================

function withdraw() {

    let email = prompt("Enter Your Email");
    let amount = Number(prompt("Enter Amount"));

    let index = acc.indexOf(email);

    if (index === -1) {
        alert("Account Not Found");
        return;
    }

    if (amount <= 0) {
        alert("Please Enter Valid Amount");
        return;
    }

    if (amount > balance[index]) {
        alert("Insufficient Balance");
        return;
    }

    balance[index] -= amount;

    statement[index].push(
        "Withdraw : -" + amount +
        " | Balance : " + balance[index]
    );

    saveData();

    alert(
        "Withdrawal Successful" +
        "\nRemaining Balance : Rs. " + balance[index]
    );

}

// =========================
// Transfer
// =========================

function transfer() {

    let sender = prompt("Enter Your Email");
    let receiver = prompt("Enter Receiver Email");
    let amount = Number(prompt("Enter Amount"));

    let senderIndex = acc.indexOf(sender);
    let receiverIndex = acc.indexOf(receiver);

    if (senderIndex === -1 || receiverIndex === -1) {
        alert("Invalid Account");
        return;
    }

    if (amount <= 0) {
        alert("Please Enter Valid Amount");
        return;
    }

    if (amount > balance[senderIndex]) {
        alert("Insufficient Balance");
        return;
    }

    balance[senderIndex] -= amount;
    balance[receiverIndex] += amount;

    statement[senderIndex].push(
        "Transfer to " + receiver +
        " : -" + amount +
        " | Balance : " + balance[senderIndex]
    );

    statement[receiverIndex].push(
        "Received from " + sender +
        " : +" + amount +
        " | Balance : " + balance[receiverIndex]
    );

    saveData();

    alert("Transfer Successful");

}

// =========================
// Statement
// =========================

function showStatement() {

    let email = prompt("Enter Your Email");

    let index = acc.indexOf(email);

    if (index === -1) {
        alert("Account Not Found");
        return;
    }

    let history = "";

    if (statement[index].length === 0) {
        history = "No Transactions Yet";
    } else {
        history = statement[index].join("\n");
    }

    let msg =
        "========== BANK STATEMENT ==========\n\n" +
        "Account Holder : " + acc[index] +
        "\nCurrent Balance : Rs. " + balance[index] +
        "\n\nTransactions:\n" +
        history;

    alert(msg);

}


function logout() {

    alert("Logged Out Successfully");
    window.location.href = "login.html";

}