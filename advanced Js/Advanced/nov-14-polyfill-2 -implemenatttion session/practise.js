
//call

/* let objprasanna = {
    initialName:`prasanna`,
    surName:`Kutcharlapati`,
}

function printingVersion(city, country){
    return this.initialName + ' ' +this.surName+ ' from ' + city + ' ' + country;
}

// console.log(printingVersion.call(objprasanna));

//now iam starting my own call method on polyfill

Function.prototype.call2 = function(contextObj2 = {},...args){
//   console.log(this);
//   console.log(contextObj2);
  //boundary analysis
  if(typeof this !== `function`){
    throw new Error(this+ " is not callble ")
  }
  contextObj2.fn = this;
//   console.log(contextObj2);
const ans = contextObj2.fn(...args);
// console.log(contextObj2);
delete contextObj2.fn;
return ans;
}

console.log(printingVersion.call2(objprasanna,`delhi`,`india`));
console.log(objprasanna); */


//apply