let currentBalance = 1000;
const fee = 0.05;
const correctPassword = "1234";
let transactionHistory = [];

function login() {
    const password = document.getElementById("password").value;
    if (password === correctPassword) {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("main-section").style.display = "block";
    } else {
        alert("Incorrect password, try again.");
    }
}

function executeAction() {
    const action = document.getElementById("action").value;
    const amountElement = document.getElementById("amount");
    const amount = parseFloat(amountElement.value);

    switch (action) {
        case "1":
            document.getElementById("message").innerText = `Your current balance is: $${currentBalance.toFixed(2)}`;
            transactionHistory.push(`Checked balance: $${currentBalance.toFixed(2)}`);
            break;
        case "2":
            if (!isNaN(amount) && amount > 0) {
                const feeAmount = amount * fee;
                currentBalance += amount - feeAmount;
                transactionHistory.push(`Deposited $${amount.toFixed(2)}, Fee $${feeAmount.toFixed(2)}, New Balance $${currentBalance.toFixed(2)}`);
                document.getElementById("message").innerText = `You've deposited $${amount.toFixed(2)}. Your new balance is: $${currentBalance.toFixed(2)}`;
            } else {
                document.getElementById("message").innerText = "Please enter a valid number.";
            }
            break;
        case "3":
            if (!isNaN(amount) && amount > 0) {
                const feeAmount = amount * fee;
                const totalWithdrawal = amount + feeAmount;
                if (totalWithdrawal <= currentBalance) {
                    currentBalance -= totalWithdrawal;
                    transactionHistory.push(`Withdrew $${amount.toFixed(2)}, Fee $${feeAmount.toFixed(2)}, New Balance $${currentBalance.toFixed(2)}`);
                    document.getElementById("message").innerText = `You have successfully withdrawn $${amount.toFixed(2)}. Your current balance is $${currentBalance.toFixed(2)}`;
                } else {
                    document.getElementById("message").innerText = "Insufficient funds.";
                }
            } else {
                document.getElementById("message").innerText = "Enter a valid amount.";
            }
            break;
        case "4":
            const historyList = document.getElementById("history-list");
            historyList.innerHTML = '';
            transactionHistory.forEach(record => {
                const li = document.createElement('li');
                li.textContent = record;
                historyList.appendChild(li);
            });
            document.getElementById("history").style.display = "block";
            break;
        case "5":
            document.getElementById("main-section").style.display = "none";
            document.getElementById("login-section").style.display = "block";
            break;
        default:
            document.getElementById("message").innerText = "Invalid choice. Please select a valid option.";
    }
}
