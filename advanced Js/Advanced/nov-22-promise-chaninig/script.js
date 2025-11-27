//fetch is a method and it takes URL that returns us promise.
//that promise has a result as response obj.

//this responsoe object has a inbuilt method
//.json which converts response object to data promise.


// const url = `https://dummyjson.com/products`;
// //json and JSON these are different

// fetch(url).then((responseObj) =>{     //you can do responseonj.json only onccce
//  const dataPromise = responseObj.json();
//  dataPromise.then((data)=>console.log(data));
//  dataPromise.catch((data)=>console.log(data));
// //   const dataPromise2= responseObj.json();
// //  console.log(dataPromise2);
// });


// fetch('https://fakestoreapi.com/products')
//   .then(response => response.json())
//   .then(data => console.log(data));

//   fetch




//fetch API
//a modern way in js to get or post data btwn browser and server.

//fronted  <-   fetch API  ->  server/backennd/database

//get post
//returns promise
//use .then .catch or async/await
//convert response(eg.json())


/* fetch('https://fakestoreapi.com/products/21')
  .then(response => response.json())
  .then(data => console.log(data.price))
  .catch((err) => console.log(err));
 */
async function fetchApi() {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/19`)
        let data = await response.json();
        console.log(data);


    }
    catch(err){
      console.log(err);  
    }
    finally
}
fetchApi();