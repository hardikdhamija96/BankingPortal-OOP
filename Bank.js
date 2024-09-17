class Bank{
    constructor(name){
        this.name = name;
        this.accounts = [];
        this.customers = [];
    }

    addAccount(account){
        this.accounts.push(account);
    }

    addCustomer(customer){
        this.customers.push(customer);
    }

    getCustomerAccounts(customerId){
        return this.accounts.filter( account => account.accountHolder === customerId );
    }
}

module.exports = Bank;