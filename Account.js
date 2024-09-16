class Account{
    constructor(accountNumber, accountHolder, balance=0)
    {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    //Method for deposit
    deposit(amount){
        if(amount>0)
        {
            this.balance += amount;
            console.log(amount+" deposited to the bank account!");
        }
        else{
            console.log("Amount should be positive");
        }
    }

    //Method for withdraw
    withdraw(amount){
        if(amount>0 && amount<this.balance){
            this.balance -= amount;
            console.log(amount + " is debited successfully!");
        }
        else if(amount<=0){
            console.log("Amount should be positive number!");
        }
        else{
            console.log("Not enough balance!");
        }
    }
}

module.exports = Account;