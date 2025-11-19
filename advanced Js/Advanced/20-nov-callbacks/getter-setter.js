class BankAccount{
    #accountBalance; // it follows the same creation as of object (so no let and const)
    constructor(name,bankName,accountBalance){
        
        this.name = name;
        this.bankName = bankName; 
        this.#accountBalance = accountBalance;
    }
    getBalance(){
        return this.#accountBalance
    };//to use this get to acces private  
    setBalancee(amount){
        this.#accountBalance += amount;
        return this.#accountBalance;
    }
    get  balance(){
        return this.#accountBalance; 
    }

     set balancee (amount){
        this.#accountBalance += amount;
        return this.#accountBalance; //we only put one property to det no more any
    }
}

let user1 = new BankAccount("deva","IOB",4000 );
// console.log(user1)  
//  user1.#accountBalance  
console.log(user1.getBalance());
user1.setBalancee(3000);
user1.balancee = 2000;
console.log(user1) ;

// console.log(user1.balance())//js engine autometicallll invoke it we dont do manuallly

// console.log(user1.balance);
