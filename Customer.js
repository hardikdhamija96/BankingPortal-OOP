class Customer{
    constructor(name, customerId){
        this.name = name;
        this.customerId = customerId;
    }

    getCustomerInfo(){
        return `Customer: ${this.name}, customerId: ${this.customerId}`;
    }
}

module.exports = Customer;