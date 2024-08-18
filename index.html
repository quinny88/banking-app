import datetime

current_balance = 1000
fee = 0.05
password = "1234"
transaction_history = []  # List to store transaction history

for attempts in range(3):
    login = input("What's your password? ")

    if login == password:
        print("Access granted")
        break
    else:
        print("Incorrect password, try again.")
else:
    print("Sorry, you have used all attempts.")
    exit()

options = ("1: Check Balance", "2: Deposit Money", "3: Withdraw Money", "4: View History", "5: Exit")

while True:
    for option in options:
        print(option)

    choice = input("Choose an option: ")

    if choice == "1":
        print(f"Your current balance is: ${current_balance}")
        transaction_history.append(f"Checked balance: ${current_balance}")

    elif choice == "2":
        deposit_amount = input("How much money would you like to deposit? ")
        if deposit_amount.isdigit():
            deposit_amount = int(deposit_amount)
            fee_amount = deposit_amount * fee
            current_balance += deposit_amount - fee_amount
            transaction_history.append(f"Deposited ${deposit_amount}, Fee ${fee_amount}, New Balance ${current_balance}")
            print(f"You've deposited ${deposit_amount}. Your new balance is: ${current_balance}")
        else:
            print("Please enter a valid number.")

    elif choice == "3":
        withdraw_amount = input("How much money would you like to withdraw? ")
        if withdraw_amount.isdigit():
            withdraw_amount = int(withdraw_amount)
            fee_amount = withdraw_amount * fee
            total_withdrawal = withdraw_amount + fee_amount
            if total_withdrawal <= current_balance:
                current_balance -= total_withdrawal
                transaction_history.append(f"Withdrew ${withdraw_amount}, Fee ${fee_amount}, New Balance ${current_balance}")
                print(f"You have successfully withdrawn ${withdraw_amount}. Your current balance is ${current_balance}")
            else:
                print("Insufficient funds.")
        else:
            print("Enter a valid amount.")

    elif choice == "4":
        print("Transaction History:")
        for record in transaction_history:
            print(record)

    elif choice == "5":
        now = datetime.datetime.now()
        if now.hour < 12:
            greeting = "morning"
        elif now.hour < 18:
            greeting = "afternoon"
        else:
            greeting = "evening"
        print(f"Thanks for banking with us and have a good {greeting}!")
        break  # This exits the while loop

    else:
        print("Invalid choice. Please select a valid option.")
