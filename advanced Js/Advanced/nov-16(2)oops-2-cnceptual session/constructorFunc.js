 function CreateCustomer(name,bankName,balance){
    this.name = name;
    this.bankName =bankName;
    this.balance= balance;
 }

CreateCustomer.prototype.greet = function(amount){
    this.balance-= amount;
}

 let user = new CreateCustomer("prasanna","axis",1000);
 console.log(user);

 user.greet(300);
console.log(user);



/* Goal of Your Code

You are creating a customer object using a constructor function.
Then using prototype, you added a function greet that subtracts money from the balance (like withdrawing money).

So your goal is:

✔ Create a customer
✔ Put name, bank name, balance inside it
✔ Add a method using prototype
✔ Use that method to reduce balance
✔ Print before & after object */