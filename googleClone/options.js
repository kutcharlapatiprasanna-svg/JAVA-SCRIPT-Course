


const cellNamePlaceholde  = document.querySelector("#active-cell");
const fontsizeinput = document.querySelector("#fontsize");
const fontFamilyInpit = document.querySelector("#fontFamily")
let activeElement = null;
const state ={}

const defaultPropertiees={
    fontFamily:'sans',
    fontSize:16,
    color:"#000",
    texAlign:"left",
    backgroundColor:"#fff",
    isBold:false,
   isItalic:false,
   isUnderlined:false

}


function oncellfocus(event){
    const elementId = event.target.id;

    
    cellNamePlaceholde.innerText= elementId;
    activeElement = event.target;
    if(state[elementId]){
        //already selected cell
        //fill the options with the state of that cell
        resetOptions(state[elementId]);
    }
    else{
        //selected for the first time
        //fill the options with default state
        resetOptions(defaultPropertiees);
    }

//    alert(event.tar
// console.log(event.target.id);
}

function resetOptions(optionsState){
    //updates the ui as per the optionsstate
    //this function verifies if the cell is already selected or not by looking in state object.
   fontsizeinput.value=optionsState.fontSize;
   fontFamilyInpit.value= optionsState.fontFamily;
}

// resetOptions({
//       fontFamily:'sans',
//     fontSize:16,
//     color:"#000",
//     texAlign:"left",
//     backgroundColor:"#fff",
//     isBold:false,
//    isItalic:false,
//    isUnderlined:false

// })









function onchangefontsize(){

}