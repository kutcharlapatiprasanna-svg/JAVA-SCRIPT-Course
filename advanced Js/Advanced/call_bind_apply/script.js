// this:refers current object

// function test(){
//     console.log(this);

// }
// test();

// let  obj ={
//     test2(){
//         console.log(this);
//         }
// }
// obj.test2();






/* call,bind&apply will Worker
only with normal functioms
not only with arrow functions */




// call method
/* function intro(){
    console.log(this.age);
}
intro();

let obj={
    age:30,  
}
intro.call(obj); //it is basically overrides the this keyword



let obj2={
   age:  23,
   nestedobj:{
       myAge:21,
   },
};
function intro(){
    console.log(this.age);
        console.log(this.myAge);
}
intro(); *///iam just here myage is binded with window you are just calling the function not obj
// When you call myAge() directly, it is not called as a method of any object.
// So this inside the function refers to:

// myAge.call(obj);
// intro.call(obj2.nestedobj);//because there is no age



// whatever parameters ar passed we just mention arguments after the obj.
// let obj = {
//     firstName:"rohit",
// }
// function intro(lastName){
//     console.log(`hi i am ${this.firstName} ${lastName}`);
// }
// // intro(`kaushal`);
// intro.call(obj,`kaushal`);

// // apply method is the same way for call ut only syntax different 


// apply


// let obj = {
//      firstName:"rohit",
// }
//  let arr = [2,4,5]

//  function add(arg1,arg2,arg3){
//     console.log(this);
//     return arg1+arg2+arg3;
//  }
//  console.log(add(arr[0],arr[1],arr[2]));
// or
// console.log(add(...arr));
// console.log(add.call(obj,...arr));
// console.log(add.call(obj,arr));
//  console.log(add(arr(arr[0])))

/* call takes obj as is 1st rgument
and rest of the arguments
so in total we have->(obj+args) as total arguments  


apply takes obj as 1st argument 
it takes array of argumentsso intotal apply accepts only 2 arguments. */


//this
//call apply bind i go trouhm them again
 


/* let obj1 = {
    firstName:`Hitesh`,
    lastName:`marwaha`,
   
}
// function should be independent
 function fullName(city,country){
        console.log(this)
      return(this.firstName + ' '+this.lastName + ' from ' + city + ' ,'+country);
    }



const obj2 = {
 firstName:`jhon`,
 lastName:`Doe`
}


// console.log(obj1.fullName("vzm","ap"));
console.log( fullName.call(obj2,"texas","USA"))
console.log(fullName.apply(obj2,["texas", "USA"]))
 
// bind:it will creat acopy of new function using bind method and argumrnts 
// for future and use after sometime if we want to call the the function we can call itt


// console.log(fullName.bind(obj2,'texas','usa')())

const func = fullName.bind(obj2,'texas','usa');
console.log(func()); */
/* var a = 1;

console.log(this)//this refers to global scenario
// everything that is specified in the global aspect it contined in the window 

console.log(this==window)

const obj ={
    x:function(){
        console.log(this===window);//this and window same nature bt in this scenario this will refers current obj thats why different natures it will false
    },
}
obj.x(); */

/* const person ={name:`piyush`};
function sayHi(age){
    return `${this.name} is ${age} years`;
}
console.log(sayHi.call(person,24));
console.log(sayHi.bind(person,24)()) */


/* const age=10;
var person = {
    name:"piyush",
    age:20,
    getAge:function(){
        return this.age;
    }
}

var person2 = {age:24};
console.log(person.getAge.call(person2));
console.log(person.getAge.apply(person2));
console.log(person.getAge.bind(person2)()); */


var array =[1,2];
var elements =[3,4,5];

// concatenate both the arrays using apply method

//apply

//we need a method to apply it to

//we need a reference

//we needs the arguments/elements


/* array.push(elements[0]);
array.push(elements[1]);
array.push(elements[2]);
console.log(array);

// array.push->method
console.log() */

// array.push.apply(array,elements);

array.push.call (array,...elements);

console.log(array);

