
//class syntax
//we are wrapping over constructer fn which class.




class BankAccount{
    constructor(name,bankName,balance){
        this.name = name;
        this.bankName = bankName;
        this.balance = balance;
    }
     addMoney(amount) {
        this.balance-=amount;
    }
}


//class will hnadle adding functs in prototype
//you dont have to add functions explicitly.

const user1 = new BankAccount("prasanna","Axis",1000);
console.log(user1);
user1.addMoney(900)
console.log(user1)


class SavingsAccount extends BankAccount{
     constructor(name,bankName,balance){
        // this.name = name;
        // this.bankName = bankName;
        // this.balance = balance;
        super(name,bankName,balance);

    }
     
}
const user2 = new SavingsAccount("sandhya","CANARA BANK",500);
console.log(user2);
user2.addMoney(100)
console.log(user2)



class LastAccount extends SavingsAccount{
     constructor(name,bankName,balance){
        // this.name = name;
        // this.bankName = bankName;
        // this.balance = balance;
        super(name,bankName,balance);

    }
     
}
const user3 = new LastAccount("laxmi","Syndicate",400);
console.log(user3);
user3.addMoney(100)
console.log(user3)