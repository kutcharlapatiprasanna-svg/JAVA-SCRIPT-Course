const containers = document.querySelectorAll(".container");

const dragState ={
    draggedElement:null,
    parentContainer:null
}
function onDragstart(event){
    const draggedCard = event.target;
    // console.log("some element is been statrted dragging")
    dragState.draggedElement = draggedCard;
    dragState.parentContainer = draggedCard.parentNode;


      
//      console.log("dragged:", dragState.draggedElement);
// console.log("parent:", dragState.parentContainer);
}
function onDragover(event){
    let currentContainer = event.target.closest(".container");
    // console.log(currentContainer.id,dragState.parentContainer.id)
    if(currentContainer.id === dragState.parentContainer.id){
        return;
    }

    // console.log("dragging over")
    // console.log(event.target);
  event.preventDefault();
}

function onDrop(event){
    const dropcontainer = event.target.closest(".container");
    dropcontainer.appendChild(dragState.draggedElement);
    // console.log("something is print");
}

for(let i=0 ;i<containers.length; i++){
  containers[i].addEventListener("dragover", onDragover);
  containers[i].addEventListener("drop", onDrop);
}