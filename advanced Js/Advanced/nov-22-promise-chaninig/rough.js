//promises


// async and nested callback and promises


/* setTimeout(()=>{
    console.log(`hi`);
},2000)

setTimeout(()=>{
    console.log(`hello`);
},1000)

setTimeout(()=>{
    console.log(`hi pras`);
},3000) */

/* function preparedFood(next) {
    setTimeout(() => {
        console.log(`food is prepared`);
        next();
    }, 3000)
}


function eatFood(next) {
    setTimeout(() => {
        console.log(`i eatean food`);
        next();
    }, 2000)
}


function goToSchool(next) {
    setTimeout(() => {
        console.log(`went to schhol`);
        next();
    }, 1500)
}


function listenClass(next) {
    setTimeout(() => {
        console.log(`iam listening class`);
        next();
    }, 4000)
}


function takeBreak(next) {
    setTimeout(() => {
        console.log(`i am taking break`);
        next();
    }, 5000)
}


function returnHome() {
    setTimeout(() => {
        console.log(`i am back to home`);
    }, 6000)
}



preparedFood(() => {
    eatFood(() => {
        goToSchool(() => {
            listenClass(() => {
                takeBreak(() => {
                    returnHome()
                    takeBreak(() => {
                        returnHome()
                        takeBreak(() => {
                            returnHome()
                            takeBreak(() => {
                                returnHome()
                                takeBreak(() => {
                                    returnHome()
                                    takeBreak(() => {
                                        returnHome()
                                        takeBreak(() => {
                                            returnHome()
                                            takeBreak(() => {
                                                returnHome()
                                                takeBreak(() => {
                                                    returnHome()
                                                    takeBreak(() => {
                                                        returnHome()

                                                    })

                                                })

                                            })

                                        })

                                    })


                                })

                            })

                        })

                    })

                })
            })
        });
    })
})
 */


// eatFood();
// goToSchool();

//promises

/* 
let pro = new Promise((resolve,reject)=>{
    let condtion = true;
    if(condtion){
        setTimeout(()=>{
            resolve(`task is cmpltd`);
        },2000)
        
    }
    else{
        reject(`task is not cmpltd`)
    }
});

pro.then((data)=>{
    console.log(data)
}).catch((value)=>{
    console.log(`error`)
})
 */


// async/await



function preparedFood() {
    let isfoodprapared = true;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isfoodprapared) {
                resolve(`food is prepared`);
            }
            else {
                reject(`food is not preepared`)
            }
        }, 3000)
    })
}


function eatFood() {
    let isfood = true;
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if (isfood) {
                resolve(`food eaten`);
            }
            else{
                reject(`food is not ready`)
            }
        },1000)
    })

}


function goToSchool() {
    let isgotoSchool = false;
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if (isgotoSchool) {
                resolve(`iam going to school`);
            }
            else{
                reject(`iam not going to school`)
            }
        },2000)
    })

}


async function latestNewOne() {
    try{
        const food = await preparedFood();
        console.log(food)

        const eatingfood = await eatFood();
        console.log(eatingfood);

        
        const gotoschool = await goToSchool();
        console.log(gotoschool);

    }
    catch(error){
        console.log(error)
    }
    
}

latestNewOne();





