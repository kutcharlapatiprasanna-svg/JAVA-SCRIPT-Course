// Inheritance Constructer

function BankAccount(name, bankName, balance) {
    this.name = name;
    this.bankName = bankName;
    this.balance = balance;
}

BankAccount.prototype.greetfn=function(amount){
    this.balance+=amount;
}

function SavingsAccount(name, bankName, balance) {
    // this.name = name;
    // this.bankName = bankName;
    // this.balance = balance;
   BankAccount.call(this,name,bankName,balance);
}

function SavingsAccountModified(name, bankName, balance, cibil) {
    // this.name = name;
    // this.bankName = bankName;
    // this.balance = balance;
    this.cibil = cibil;
    BankAccount.call(this,name,bankName,balance);

}
//earler this SavingsAccountModified.prototype was inheriting from
//objects.prototype but after this line
//it will inherit from BankAccount.prototype.
SavingsAccountModified.prototype.__proto__ = BankAccount.prototype
let result1 = new BankAccount("prasanna","AXIS",3000)
let result2 = new SavingsAccount("sandhya","StateBank",9000);
let result3 = new SavingsAccountModified("sudheer","Canara Bank",100,890);

console.log(result1);
console.log(result2);
console.log(result3);



result1.greetfn(200);
result3.greetfn(500);
console.log(result1)
console.log(result3)


/* 🎯 Goal of This Code (Short Explanation)
✔ You are creating inheritance in JavaScript using constructor functions.
✔ BankAccount is the parent constructor

Contains: name, bankName, balance, and method greetfn().

✔ SavingsAccount and SavingsAccountModified are child constructors

They inherit properties from BankAccount using:

BankAccount.call(this, name, bankName, balance);

✔ SavingsAccountModified also inherits methods from BankAccount.prototype using:
SavingsAccountModified.prototype.__proto__ = BankAccount.prototype; */