//sync everything is happens in sequence order.
//none of hte line is waiting


// console.log("first");
// console.log("second");
// console.log("thrd")  

//async

// console.log(`start`);
// setTimeout(()=>{
//     console.log("mid3")
// },0);
// setTimeout(()=>{
//     console.log("mid1")
// },1000);
// setTimeout(()=>{
//     console.log("mid2")
// },2000);
// console.log("end");




function intro(name, callback) {
    //async
    //return `hi iam ${name}`
    setTimeout(() => {
        //  return `Hi i am ${ 
        //  if i pass the above statement
        //  to a function settimeout will call the
        //  fn 
        callback(`hi i am ${name}`);
    }, 1000);

}
//sync
//return undefined


function whereDoIWork(company, callback) {
    setTimeout(() => {
        callback(`hi i work at ${company}`)
    }, 500)
}


function whatIsMyPos(role, callback) {
    setTimeout(() => {
        callback(`hi my role is ${role}`);
    }, 300)
}





// this nested call back known as callback hell //pyramod of doom
//why hell if any function thrwing some error but we cant find out
// your code is always grow vertically
//never ever callback to use asynchronous 
//what we will actyllu use actually promises we use to handle asyn.

intro("prasanna", (data) => {
    console.log(data)
    whereDoIWork("Drive Medical", (data) => {
        console.log(data);
        whatIsMyPos("SDE 2", (data) => {
            console.log(data)
            whatIsMyLoc("benguluru", (data) => {
                console.log(data)
                whatIsMyLoc("benguluru", (data) => {
                    console.log(data)
                    whatIsMyLoc("benguluru", (data) => {    /////this is call back hell
                        console.log(data)
                        whatIsMyLoc("benguluru", (data) => {
                            console.log(data)
                            whatIsMyLoc("benguluru", (data) => {
                                console.log(data)

                            })

                        })

                    })


                })

            })
        })

    });

});


function whatIsMyLoc(location, callback) {
    setTimeout(() => {
        callback(`hi my location is ${location}`)
    }, 100);
}




