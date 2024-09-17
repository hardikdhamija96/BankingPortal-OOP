const Account = require("./Account");
const Customer = require("./Customer");
const Bank = require("./Bank");

//Create instances
const bank = new Bank("My Bank");
const customer1 = new Customer("Amit", "12345");
const account1 = new Account("001",customer1.customerId,1000);

// Add bank
bank.addCustomer(customer1);
bank.addAccount(account1);

// account functionality
account1.deposit(500);
account1.withdraw(200);

console.log(customer1.getCustomerInfo());
console.log(bank.getCustomerAccounts("12345"));