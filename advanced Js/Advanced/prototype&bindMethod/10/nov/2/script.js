// begining of polifils

let arr= [1,2,3]

//  delete Array.prototype.map;

 Array.prototype.mymap = function(callBakfn){
    let res = [];
    for(let i = 0; i<this.length;i++){
        res.push(callBakfn(this[i], i));
    }
    return res;
};


const arr1 = arr.map((item)=>{
    return item*10;
})
const arr2 = arr.mymap((item)=>{
    return item*10;
});
console.log(arr1);
console.log(arr2);



/* Create your own custom version of map() → called mymap
✅ Understand how the real map() method works internally
✅ Compare built-in .map() with your custom .mymap()
✅ Show that both produce the same output */