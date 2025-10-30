let columns = 26;
let rows = 100;

const headerContainer = document.querySelector(".header");

const serialNumberContainer = document.querySelector(".sno");

const mainContainer = document.querySelector(".main");


function CreateHeaderCells(){
  for(let i = 0;i<=columns;i++){
    const headerCell = document.createElement("div");
    headerCell.className = "header-cell cell";
    if(i!=0){
        headerCell.innerText = String.fromCharCode(64+i)
    }
    headerContainer.appendChild(headerCell);
  }
}



function createSerialNumberCells(){
    for (let i =1;i<=rows;i++){
        const snoCell = document.createElement("div")
        snoCell.className="sno-cell cell"
        snoCell.innerText=i;
        serialNumberContainer.appendChild(snoCell);
    }
}

function createRow(rowNumber){
    //create a row and each row will have 26 colommns
    const row = document.createElement("div");
    row.className = "row";
    //after creating row and inside that row am appending 26 cells and them iam just 
    //  appending that row inside that main mainContainer.
    for(let i=1; i<=columns; i++){
        const cell = document.createElement("div");
        cell.className="main-cell cell";
        cell.contentEditable= true;
        row.appendChild(cell);
        cell.id= String.fromCharCode(64+i)+rowNumber;

        //adding focus event for every cell inside this
        cell.addEventListener("focus",oncellfocus);
       
    }
     mainContainer.appendChild(row);
}

function bulidMainSection(){
    //loop for 100 times
    for(let i =1;i<=rows;i++){
        createRow(i);
    }
}

// createRow();
// createRow();
createSerialNumberCells();    

CreateHeaderCells();
bulidMainSection();