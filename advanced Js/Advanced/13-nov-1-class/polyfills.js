//map


let arr = [1,2,3]

//declare a polyfill for a map method

// first we have to derive
Array.prototype.mymap = function(callbackfn){
console.log(this);

//in the map method we create a new array
let ans = []
for(let i =0;i<this.length;i++){

    ans.push(callbackfn(this[i]));
}
return ans;

}

let newArray = arr.mymap((item)=>item*3);
console.log(newArray);





// example

let arr1 = [3,4,5,6,7];

Array.prototype.mymapversion=function(callbackfn2){//parameter that stores the callback function
    console.log(this);
    let ans1 = []//This is similar to how real .map() creates a new array.
    for(let i=0 ; i<this.length; i++){
           ans1.push(callbackfn2(this[i]));//stores callback's result . this is where callback executes
    }
    return ans1;

}
const result2 = arr1.mymapversion((item)=>item*4);
console.log(result2);








    let arr3 = [3,4,5,6,7];

    Array.prototype.filter2=function(callbackfn3){//parameter that stores the callback function
        console.log(this);
        let ans3 = []//This is similar to how real .map() creates a new array.
        for(let i=0 ; i<this.length; i++){
            if(callbackfn3(this[i])){
                ans3.push(this[i]);
            }//stores callback's result . this is where callback executes
        }
        return ans3;

    }
    const result3 = arr3.filter2((item)=>item%2==0);
    console.log(result3);




let arr10 = [3,4,5,6,7];

Array.prototype.reduce2=function(callbackfn20,initialValue=0){//parameter that stores the callback function
    console.log(this);
    let ans10 = initialValue;//This is similar to how real .map() creates a new array.
    for(let i=0 ; i<this.length; i++){
           ans10=callbackfn20(ans10,this[i]);//stores callback's result . this is where callback executes
    }
    return ans10;

}
const sum = arr10.reduce2((prev,currentvalue)=>prev+currentvalue,10);
console.log(sum);












/* ou created your own version of map()

It loops through the array

Applies a function to every item

Stores results in a new array

Returns the new array */









// arr.pras((item)=>{
//     console.log(item*2);

// })




// let result = arr.map((item)=>{
//        return item*2;
// })
// console.log(result);
// console.log(arr)




/* Great — your code **is already a polyfill** ✅
Let me show you **exactly where the polyfill is** and **why this code is a polyfill**.

---

# ✅ **Where is the polyfill in your code?**

👉 **THIS line is the polyfill:**

```js
Array.prototype.mymap = function(callbackfn) { ... }
```

That single line **adds a custom `mymap` method** to the array prototype —
meaning **ALL arrays** in JavaScript will now have a new method called `mymap()`.

✅ That is exactly what a polyfill does.

---

# ✅ **Why is this a polyfill?**

A **polyfill = giving old browsers a missing feature**.

Example:
Old browser does not support `.map()`
So you implement your own version.

In your code, you implemented your own `mymap()`.
This is a **polyfill for map-like behavior.**

If you wanted a REAL polyfill, it would be:

```js
if (!Array.prototype.map) {
    Array.prototype.map = function(callbackfn) {
        let ans = [];
        for (let i = 0; i < this.length; i++) {
            ans.push(callbackfn(this[i]));
        }
        return ans;
    }
}
```

✅ Only creates map() if it doesn’t exist (old browsers)
✅ That is called a polyfill

---

# ✅ **In YOUR code**

You created your own method:

```js
Array.prototype.mymap = function(callbackfn){ ... }
```

This is also called a polyfill (custom polyfill), because:

* You added a new method to Array.prototype
* All arrays can now use it
* You implemented map() logic manually

---

# ✅ **Where exactly is the polyfill? (very clear)**

**The polyfill = your function on Array.prototype.**

```
Array.prototype.mymap = function(callbackfn){...}
```

Everything inside that function is your **custom map implementation**,
and attaching it to `Array.prototype` makes it a polyfill.

---

# ✅ **Summary**

### ✅ Polyfill means:

➡️ Adding missing features to old browsers
➡️ Implementing the feature manually
➡️ Adding it to prototype

### ✅ You did that here:

```
Array.prototype.mymap = function(callbackfn){ ... }
```

### ✅ This is the polyfill.

---

 */