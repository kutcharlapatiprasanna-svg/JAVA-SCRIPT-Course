



//___proto__

 
/* irst, check inside the object itself.

If not found → go to the prototype.

If not found → search deeper in prototype chain.

If still not found → return undefined. */



/* const o = {
    a:1,
    b:2,    
    b:3,
    b:5,
    d:10,
 
    __proto__:{
        b:3,
        c:4,

        __proto__:{
            d:5,
        }


    }


};



console.log(o.a);
console.log(o.b);
console.log(o.c);
console.log(o.d)
 */
//first {a:1,b:2} ---->{b:3,c:4}-->{d:5}-->Object.prototype//null








/* 
First b:2

Then overwritten by b:3

Then overwritten by b:5 ✅ final value */




// inheriting methods/functions


/* onst parent = {
    value:1,
    method(){
        return this.value;
    },
};

// console.log(parent.method( ));

const child = {
    
 
    __proto__:parent
};
// console.log(child)
console.log(child.method());
child.value = 3;
console.log(child.method())
console.log(parent.method( ));

 */



// polyfills:

 








