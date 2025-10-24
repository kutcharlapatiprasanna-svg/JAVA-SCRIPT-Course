const createIssue = document.getElementById("create-issue");
const text = document.getElementById("text-issue");
const todoContainer = document.getElementById("todo");



createIssue.addEventListener("click",oncreateClick);

text.addEventListener("keyup",onenterInput);



function togglecreateissueOptions(){
    createIssue.classList.toggle("hide");
    text.classList.toggle("hide");
    if(!text.classList.contains("hide")){
        //if user sees the input area then we need to auto focus onto it.
        text.focus();
    }

}

function onBlurCreateIssueInput(){
    togglecreateissueOptions();
}

function oncreateClick(){
    togglecreateissueOptions();
}

function onenterInput(e){
    if(e.keyCode===13){
        const issuName = text.value;
   
    if(!issuName){
        return ;
    }
    const issuecard = document.getElementById("div");
    issuecard.className = "card";

    issuecard.innerHTML= `
               <span>${issuName}</span>
                <span class="material-symbols-outlined">delete</span>
                `;
                todoContainer.appendChild(issuecard);
    }
}