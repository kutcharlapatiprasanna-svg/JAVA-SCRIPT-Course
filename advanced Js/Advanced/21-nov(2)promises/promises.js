

//instance promise class and  promise is a predefined class it takes a callback function.

//this callback  function access to give me to things (resolve and rejected)

//resolve ... fullfill

//reject...rejected


let p1 = new Promise((resolve,reject)=>{
    const condition = false ;
    if(condition){
        resolve(`this promise is now resolved`);

        // setTimeout(()=>{
        //             resolve(`this promise is now resolved`);

        // },5000);
    }
    else{
        reject(`this promise is failed`);
    }
});


  setTimeout(()=>{
      console.log(`this is settimeout`);

        },0);
// console.log(p1)


p1.then((data)=>console.log(data)).catch((err)=>{
    console.log(err)
})

//this is thread block code.
for(i = 0;i<=1000;i++){
    console.log(`this is sync code`);
}


//we have methods of promise .then and .catch
//.then will always access to resolve value
//.catch  will always access to  
//they can take a callback which have access to resolved result and rejected result.


//we need to see this error
//Uncaught (in promise) this promise is failed

//i will print a code
//i will execute as sync code -->callstack 

