let obj = {
    a:10,
    b:100,
    c:{
        q:70,
    },
};

const deepClone = (oldObj)  =>{
    //this our base case
   const type = typeof oldObj;
   if(type!=="object"|| !oldObj)return oldObj; 
//    Without this check, recursion would never stop for primitives or null

   //i want to convert my obj to array of key value pairs 
   //object.enteries it will give:Object.entries(obj) → Converts an object into an array of [key, value] pairs

   const arrayOfKeyValue =  Object.entries(oldObj);
   console.log(arrayOfKeyValue)
let deepCloneVersionOfArray = arrayOfKeyValue.map((item) =>[
    item[0],
    deepClone(item[1])
]);
console.log(deepCloneVersionOfArray)
const finalObj = Object.fromEntries(deepCloneVersionOfArray);
return finalObj;
  

}

const res = deepClone(obj);
// res.c.q = 100;
// console.log(res);
// console.log(obj)








/* 
The ! (logical NOT) operator in JavaScript converts a value to a boolean and then flips it.

So:

if the value is truthy, ! makes it false

if the value is falsy, ! makes it true */




//  let obj2 = {
//    a:60,
//    b:56,
//    c:{d:900},
// };

// let deepclonefunction = (oldObj) =>{
//    const type = typeof oldObj;
//    if(type!== "object" || !oldObj) 
//     return oldObj;
//    const arrysObjevts = Object.entries(oldObj);
//    console.log(arrysObjevts);
//    const deepclonethroughmapping  = arrysObjevts.map((item)=>[
//     item[0],
//     deepclonefunction(item[1])
//    ]) ;
//    console.log(deepclonethroughmapping)
//    const backtokbject = Object.fromEntries(deepclonethroughmapping);
//    return backtokbject
   

// }
// // deepclonefunction(obj2);

// const res = deepclonefunction(obj2); 
// res.c.d = 300;
// console.log(res);
// console.log(obj2) 







// let obj ={
//      firstname:'pras',
//      lastname:'sudhe',
//      mother:{
//         firstname:'kumari',
//         lastname:'sand'
//      }
// }
// console.log(obj);

// const deepcopy = JSON.parse(JSON.stringify(obj));
// console.log(deepcopy);
// deepcopy.firstname='syham';
// deepcopy.mother.firstname='raju';
// console.log(deepcopy)



// structured clone:implementation session


// let obj1 = {
//     firstName:'prasanna',
//     lastName:'kutcharlapati',
//     mother:{
//         firstName:'thirupathi',
//         lastName:'amma',
//     },
// };

/* const obj2 = obj1;
console.log(obj1===obj2);//true

obj2.mother.lastName='ram';
console.log(obj1);
console.log(obj2);

let shallowCopy = {...obj1}
console.log(shallowCopy);

shallowCopy.mother.firstName='prash';
console.log(shallowCopy);
console.log(obj1);
console.log(obj2);
shallowCopy.firstName='sandy'
console.log(shallowCopy);
console.log(obj1);
console.log(obj2); */


// assign method to create shallow will perffomance like spread 
/*  */
/* const copyies ={a:'2',b:'9'};
const copy = Object.assign({}, obj1,copyies);
console.log(obj1);
console.log(copyies) */


// how to make a deep copy

 


        // let obj2 = {
        //     firstName:'prasanna',
        //     lastName:'kutcharlapati',
        //     mother:{
        //         firstName:'thirupathi',
        //         lastName:'amma',
        //     },
        // };
        // this is one way
        // const jsonObj = JSON.stringify(obj2);
        // console.log(jsonObj);
        // const parseObj = JSON.parse(jsonObj);
        // console.log(parseObj);
        // obj2.mother.lastName='gangi';
        // console.log(parseObj);
        // console.log(obj2);
        // parseObj.mother.firstName='sukku';
        // console.log(parseObj);
        // console.log(obj2);


// this secpnd way
// const jsonObj2 = JSON.parse(JSON.stringify(obj2));
// console.log(jsonObj2)

// obj2.firstName='hgdsz';
// console.log(jsonObj2);
// console.log(obj2);

// 2.structured clone:: inbuilt function

// const deepcopy


// const structuredCop = structuredClone(obj2);
// console.log(structuredCop);
// structuredCop.lastName='hjxfbv';
// console.log(structuredCop)