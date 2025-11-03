// let a = 10;
// let b = a;
// console.log(b);

// shallow copy through assignment operator

/* let obj1 = {
    a:10
};//#300

let obj2 = obj1;//#300
console.  log(obj1);
console.  log(obj2);
 
obj2.a =100;
console.log(obj1);
console.log(obj2);
    */

// trying deep copy clone using spread operator  spred opearator
/* let obj1 = {a:10};
let obj2 = {...obj1 };  
console.log(obj1)//10
console.log(obj2);//10
obj2.a=100;
console.log(obj2);//100
console.log(obj1)//10 */


//trying deep clone using nested object and using '...'operator


/* let obj1={a:10,
    b:{c:100} 
};
let obj2 = {...obj1};


 obj2.b.c=20; //there is ref of old
//  obj2.a.c=20;//becuse ther is no refernce
 console.log(obj1);
  console.log(obj2); */





// JSON.stringify//it convert obj to sting
let obj1={a:10,//a:"10",
    b:{c:100} ,
};
let stringObj1 = JSON.stringify(obj1);
console.log(stringObj1);
// console.log(obj1)


// JSON.parse
const obj2 = JSON.parse(stringObj1);
obj1.b.c=900;
console.log(obj1)
console.log(obj2);
 
// const test = JSON.parse("riyaza");
// console.log(test)