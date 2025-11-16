// //working with object literals
//1.create a function that accepts two inputs(name,age)and returns an object.lets the call this function makePerson.

/* function makePerson(name,age){
    const user = {};
    user.name = name;
    user.age = age;

    return user;
}

let result = makePerson("prasanna",21);
console.log(result);
console.log(result.name);
console.log(result.age) */

//we  can also create Object through Object.create() method.

/* const obj = {
    a:10,
    b:30,
};  

const result = Object.create(obj);
console.log(result) */

//questions
//qus inside personStore object , creat a property greet where the value is a
// function that logs "hello"
/* 
let personStore = {
    greet:function(){
        console.log("hello")
    }
}
personStore.greet();
 */
//create a function personfrompersonStore that takes as input a name and an age.when called,the function will create person object using the object.create method on the personstire object.n
/*  function personfrompersonStore(name,age){
    const person =Object.create(personStore);
    person.name = name;
    person   .age =age;
    return person;
 }

 const result= personfrompersonStore('Hitesh',22);
 console.log(result)
 console.log(result.name);
 console.log(result.age); */
  


//without editing the code you have already written,add an introduce method to the personStore object that logs "hi , my name is[name]"

 /* personStore.introduce=function(){

    console.log(`hi,my name is ${this.name}`)
 }
 result.introduce(); */

 //using the new  keyword
 //createa function personConstructer that uses this keyword to save a single property onto its scope called greet.greet shoud be a function that logs tha starting ``hello`;

  function personConstructer(){
    this.greetf=()=>{
        console.log(`hello`)
    }
  }





 //create a function personfromConstructer that takes as input a name and an
 //age.when called,the function will create person objects using the new keyword
 //instead of the object.create method.


/*  function personfromConstructer(name,age){
    const person = new personConstructer();
    person.name = name;
    person.age=age;
    return person;
 }


 //newand object.create()
 //new-->function constructer
 //onject.create()-->an object
 //new-->all the inheiting methods are directly introduced in the object. 
 //object..create-->it sends the inheiriting object properties ihn the prototype.

 const result = personfromConstructer(`hitesh`,22);
 console.log(result.name)
 console.log(result) */


  

//using ES6 classess

// crete a class personclass .personclass shoud have a constructer that is passed an input of name and saves it to a property by the 
// same name.personclass should also have a method called greet that logs the string `hello`

class personclass{
    constructor(name){
        this.name = name;
    }
    greet = ()=>{
        console.log(`prasanna`)
    };
}

// const result = new personclass(`prasanna`);
// // console.log(result);
// const result2 = new personclass(`sandhya`);


class DeveloperClass extends personclass{
    constructor(name){
        super(name);
    }
    
}

let hitesh = new DeveloperClass(`hitesh`);
console.log(hitesh.name);
