const obj = {
    firstName:`hitesh`,
    lastName:`marwaha`
};

function printname(city, country){
    return this.firstName+ ' '+this.lastName+ ' from ' + city + ', '+ country;
} 


// console.log(printname.call(obj));
//iam creating my own polyfiil method for call
// call>prototype>function type
Function.prototype.call2 = function(contextObj ={}, ...args){ //we need to rerturn an aswer from call method
    // console.log(args);
    // console.log(this);
//    console.log(contextObj);
//   this-->function
//   contextObj--->Object

if(typeof this !== `function`){//boundary analysis
    throw new Error(this+ " is not collble")
}
  //add this function inside contextObj.
  contextObj.fn = this; // i will add this func to  obj
//   console.log(contextObj);
  const ans = contextObj.fn(...args);
  delete contextObj.fn;
 return ans;

  
}
console.log(printname.call2(obj,[`hyd`,`delhi`]));
console.log(obj);
//i need to call method , i need to function name call
// (printname ) with the reference of context obj

// const obj2 = {
//     firstName:`jhon`,
//     lastName:`deo`,
//     printname(){
//         return this.firstName+ ' '+this.lastName;
//     }
// }
// console.log(obj2.printname());

/* Your polyfill `call2()` works like the real `.call()` — it temporarily assigns the function to the given object (`contextObj`), calls it so `this` refers to that object, then deletes it to keep the object clean.
Final result:

```js
printname.call2(obj, 'hyd', 'delhi');
// → "hitesh marwaha from hyd, delhi"
```

`obj` stays unchanged after execution. */



