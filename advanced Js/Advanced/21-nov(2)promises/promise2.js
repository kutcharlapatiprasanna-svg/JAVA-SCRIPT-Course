//the moment you write pomise
//the codde is inside promise starts
//executing
//code outside resolve and rejects && 
//inside promise are sync in nature.

//promises can handle async

let p2 =new Promise((res,reject)=>{
  console.log(`hi iam inside promise`)
  const condition = true;
  if(condition){
    setTimeout(()=>{
      res(`this promise is now resolved`);
    // console.log(`hi`)
    },1000)
       
    }
    else{
        reject(`this promise is failed`);
    }
});
 
for (let i = 0;i<100;i++){
    console.log(`some sync code`);
}

p2.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err);
})




       