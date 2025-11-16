

//prototype
//why we are using prototypes
//you have an objct
//obj.__proto  __ ={} //protupical inheritance
const obj = {
    city:`Delhi`,
    greet(){
        console.log(`Greetings from ${this.city}`);
    },
    rest(){
        console.log("iam taking rest from my mom");
    }
}
console.log(obj);


const obj2 = {

}
console.log(obj2);

//if we have to find the prototype of an object ___proto__

 
console.log(Object.prototype);//is the top prototype, no parent. in java Object class
console.log(obj.__proto__===Object.prototype);//Objects inherit from prototype:


//the prototype of protoype of object is null

console.log(obj.__proto__.__proto__);


let arr = [1,2,3];
console.log(arr);
console.log(obj.rest.__proto__);
console.log(obj.greet.__proto__);//Show me the parent object from which this function inherits
// console.log(Function.prototype);
// console.log(typeof obj.greet.__proto__) ;

console.log(typeof obj);
console.log(typeof Object)



// practical

const obj3 ={
    firstName:`hitesh`,
    lastName:`   marwaha`,
    getfullName:function(){
       return this.firstName + ' ' +this.firstName.lastName 
    }
}

console.log(obj3.getfullName.__proto__);//f()
console.log(Function.prototype)//function()
console.log(obj3.getfullName.__proto__==Function.prototype);//true
console.log(obj3.getfullName.__proto__.__proto__.__proto__)//null
//prototype of any object
console.log(typeof obj3.getfullName.__proto__.__proto__)




let objects = {
      name:`prasanna`,
      city:`rajam`,
      vey:function () {
        // return this.name + ' from '+ this.city;

        console.log(this.name + ' from '+ this.city);
      }
}
let object2 = {
    name:`chay`,
    getIntro2:function () {
        console.log("hiiiii");
      }
}

object2.__proto__ = objects;
// console.log(object2.city);
console.log(object2.vey());
console.log(object2.getIntro2())


// begining of polifils

let arr3= [2,4.5]
// delete Array.prototype.map;
arr.map((item)=>{
    console.log(item);
})