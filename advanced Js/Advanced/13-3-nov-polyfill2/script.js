// filter 

// how can i delete existing filter   delete Array.prototype

// let age = [20,10,20,30,40];

// delete Array.prototype.map;

Array.prototype.map = function(callbackfn){
    //it creats new arryy
    const result = [];
    for(let i = 0; i<this.length; i++){
       /*  if(callbackfn(this[i],i)){
            result.push(this[i])
        } */

            result.push(callbackfn(this[i],i));
    }
    return result ;


}


let age = [20,10,20,18,40];

let newaAge = age.map((item)=>{
/*     if(item<18) return false;
    else return true; */
     return item*3;

});

console.log(newaAge);

/* We create our own version (a polyfill) of methods like .filter()
👉 to understand how they actually work internally and
👉 to make them work in old browsers that didn’t support them */



// reduce 

/* delete Array.prototype.reduce;
Array.prototype.reduce = function(callbackfunc,initialValue){
    let accumulator = initialValue;
    for(let i = 0;i<this.length;i++){
        accumulator = callbackfunc(accumulator,this[i]);
    }
    return accumulator;
}
let arr = [10,3,5,2,5];
let sum = arr.reduce((acc,item)=>{
    return acc + item;
},2);
console.log(sum); */


// when user forgot to put initial value like 0 in that time we will this apporocah



delete Array.prototype.reduce;
Array.prototype.reduce = function(callbackfunc,initialValue){
    let accumulator = initialValue;
    //there is very high chance that this initialValue is undefined
    //if initial value in undefined make it 0.
    //this is what my intitution says.
    //if my initial value in undefined.
    //make ot 0th element of array
    for(let i = 0;i<this.length;i++){
        if(accumulator==undefined){
         accumulator=this[i];
        }
        else{
       accumulator = callbackfunc(accumulator,this[i]);
        }
        
    }
    return accumulator;
}
let arr = [10,3,5,2,5];
let sum = arr.reduce((acc,item)=>{
    return acc + item;
});
console.log(sum);




// rest operator 

function abc(...archna){
    // console.log(archna[3]);
    for(let i =0;i<archna.length;i++){
        console.log(archna[i]);
    }

}
abc(6,8,9,0,5,3,2);



















