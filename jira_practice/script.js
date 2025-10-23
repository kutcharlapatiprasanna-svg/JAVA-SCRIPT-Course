/* let us say we are team of ten people we are trying to bulid a software called excalidra..
 first will scedue a plan tha plan may be just like how our project has for enire month.like we sceduled the project should be done in three months.
 certain compnies first they allocate some amount of time  for certain no of deveolpres a task of ui/user interface.
  this task completely html and css .
  out of ten 5 fronted rest of backend we allocate this project 5 fronted developers.
   let us assume that this was very good product that its going to take some 15 days time. this is tye planning. feaure is design the user interface 


jira is a tracking platform.where we will scedule our tasks which our we wanted see our work flow it .
everyday thre is something called standarup meets happend in everyday.
 some compnies are conducting in the morning  and some compinies are conducting in the evening .
 what do they do is they kind of have discussion about each and every task.manager will keep on asking everyone that what you done .
 what is  the status of this task with the fronted people with backend backend people anylst people whoever are they in the team. 




jira is a tracking platform.where we will scedule our tasks which our we wanted see our work flow it 
 These 🟦 To Do, 🟨 In Progress, and 🟩 Done are the three main stages (or statuses) of a workflow in Jira Software


 to do::The task is created but not started yet.
 in progress:Someone is actively working on the task.
 done:The work is completed, reviewed, and approve */

// 1.today my task is 
//  how does the dragging and dropping works

// my task is drag one container and put it in another container.

/* 1.drag start....means you press it and move it
2.dragend
3dragenter:any dragged element enter into it then it will be triggered.
4.dragover: if any dragged element present on the top of it then this will be triggered.

5.dragleave:any dragged element ended into it then it will be triggered.
6.drop::trigger whenever a dragged is dropped inside the container.but event drop will not be executed by default so if your prevent the default behaviour tha one can drop it and inside it dragleave will not be executed.

note::
if you want something dropble zone then definetly 
you will have to attach dragover event and inside the you need to  prevent the default behaviour



cloneNode function:cloning the node of block like block.cloneNode(true) ..will return copy of the element.copy means data same everything same but they will be just pointing to different memory locations.
take one element give exact copy from that element

diff beween normal copy and deep copy.

what is toggle and trigger

focus can be applied only input tag and textarea */



const block = document.querySelector(".block");
const container = document.querySelector(".container");
// let f1 = function drag1(){
//    console.log("dragging started");
// }
function ondragstart(){
   console.log("dragging started");
}
function ondragend(){
   console.log("drag ended")
}


block.addEventListener("dragstart",ondragstart);
block.addEventListener("dragend",ondragend);

container.addEventListener("dragenter", ()=>{
   console.log("dragging entered");

})

// dragover event by defaulyt will not let the drop event executed.
// inside dragover event will take the event object 
// // 1. i want to enabling DOMStringMap2.
// 2.dragover event defult behaviour is dropping is not allowed
// how can i prevent defualt behaviour
// on event object we can call preventDefault() method so what preventdefult is done is stop dragover defult behaiour and then allowing dropping

container.addEventListener("dragover", (event)=>{
   event.preventDefault();
   // console.log("dragging over");
})
container.addEventListener("dragleave", ()=>{
   console.log("dragging leaved");
})

container.addEventListener("drop",()=>{
   let blockcopy = block.cloneNode(true);
   // clonenode function is it takes some any html element >>> this clonenode function return copy of this html element it will give me the exact objcet and different memory locations.
   container.appendChild(blockcopy);
   


   // console.log("dropped the block element")
})



// // copymeans

// let user = {name:"prasanna"};//#100
// // let user1= user//user1=#100 true
// let user1 = {...user};//object is same but address is different so false
// console.log(user1===user);//true 

// deepcopy:same objcet but different memory addresss.



// shallow copy:

let obj1 = {
   name:"prasanna",
   age:22
}
                        //  both are same reference

let obj2 = {
   name:"sanju",
   age:19
}

