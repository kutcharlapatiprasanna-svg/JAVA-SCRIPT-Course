let arr = [3,3,4,[2]]
const result = arr.flat();
console.log(result);

let arr2 = [2,3,4,5,6,[1,2,[3,5]]]
console.log(arr2.flat(2));//[2,3,4,5,6,1,2,3,5]

let arr3=[7,3,1,4,5,[4,5,6,7,[2,3,4,5,[2,4,5,6,1]]]];
console.log(arr3.flat(Infinity));


let arr4 = [7,3,1,4,5,[4,5,6,7,[2,3,4,5,[2,4,5,6,1]]]];
//[7,3,1,4,5,4,5,6,7,2,3,4,5,[2,4,5,6,1]];

// console.log(arr4.flat(2));

console.log(arr4.flat(Infinity));

/*  let oldarr = [0,1,2,[3,4,5],[6,7,[8,9]]]
function myflat (arr){
    const result =[];
     arr.forEach((element)=>{
    console.log(element);
     });
    //  return myflat;
}

myflat(oldarr); */

let oldArry = [0,1,2,[3,4,5],[6,7,[8,9]]];
function myflat(arr){
    const result = [];
    arr.forEach((element)=>{
     if(Array.isArray(element)){
       const miniresult = myflat(element);
       result.push(...miniresult);
     }
     else{
        result.push(element);
     }
    })
    return result

}
const newArry = myflat(oldArry);
console.log(newArry);