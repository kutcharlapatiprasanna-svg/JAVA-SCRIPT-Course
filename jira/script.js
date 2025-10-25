const createIssue = document.getElementById("create-issue");
const issueinput = document.getElementById("issue-input");
const todoContainer = document.getElementById("todo");



createIssue.addEventListener("click", oncreateClick);

issueinput.addEventListener("blur",onBlurCreateIssueInput);
//blur means unfocussing input
issueinput.addEventListener("keyup", onenterInput);



function togglecreateissueOptions() {
    createIssue.classList.toggle("hide");
    issueinput.classList.toggle("hide");
    if (!issueinput.classList.contains("hide")) {
        //if user sees the input area then we need to auto focus onto it.
       issueinput.focus();
    }

}
function onBlurCreateIssueInput(){
    if(!issueinput.classList.contains("hide")){
        togglecreateissueOptions();
    }
}


// function onBlurCreateIssueInput() {
//     if (!issueinput.classList.contains("hide")) {
//         togglecreateissueOptions();
//     }
// }

function oncreateClick() {
    togglecreateissueOptions();
}

function onenterInput(e) {
    // console.log(e); 
    if(e.keyCode===13){
      //  clicked on enter
        const issuName = issueinput.value ;
        if(!issuName){
            return;
        }

    //  <div class="card">
    //             <span>Ui for Exclidraw</span>
    //             <span class="material-icons">delete</span>
    //         </div>


const issuecard = document.createElement("div");
    issuecard.className=("card");

    issuecard.innerHTML=`
                <span>${issuName}</span>
                <span class="material-icons" onclick="deletecard(this)">delete</span>
           `;
   issuecard.draggable = true; //why true because draggle by defualt false we have to make enable true
   issuecard.addEventListener("dragstart",onDragstart);
          
          
           issueinput.value="";
           todoContainer.appendChild(issuecard);
           issueinput.blur();    

  

    }


}


function deletecard(deleteButton){
    const card = deleteButton.parentNode;
    card.remove();
}
    // if (e.keyCode === 13) {
    //     const issuName = issueinput.value;

    //     if (!issuName) {
    //         return;
    //     }

        // creation of some tasks and dlete it

        // const issuecard = document.createElement("div");
        // issuecard.className = "card";
        //innerhtm gives entire html . instead of creting individual nodes and doing that.
        // issuecard.innerHTML = `  
        //        <span>${issuName}</span>
        //         <span class="material-icons ">delete</span>
        //         `;
        // todoContainer.appendChild(issuecard);
        // togglecreateissueOptions()
    // }


// const deleteIcon = issuecard.querySelector(".material-icons");
// deleteIcon.addEventListener("click", () => {
//   issuecard.remove(); // removes the card from DOM
// });




