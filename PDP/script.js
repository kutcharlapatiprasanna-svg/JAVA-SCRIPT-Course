

const first = document.getElementById("togglebutton");
const second = document.getElementById("productList");

first.addEventListener("click",onclick);

function onclick(){
  first.classList.toggle("active");
    second.classList.toggle("hide");

}




const feature = document.getElementById("togglefeatureButtons")
const feature2 = document.getElementById("togglefeatureButtonsTwo")

feature.addEventListener("click",f1);

function f1(){
  feature.classList.toggle("active");
  feature2.classList.toggle("hide");
}




const specific1 = document.getElementById("specificationbutton");
const specific2 = document.getElementById("togglespecification");
specific1.addEventListener("click",doActive);

function doActive(){
  specific1.classList.toggle("active");
  specific2.classList.toggle("hide");
}



const resource = document.getElementById("Resources");
const resource2 = document.getElementById("ResourcesSpaces");

resource.addEventListener("click",sources);

function sources(){
  resource.classList.toggle("active");
  resource2.classList.toggle("hide");
}






const one = document.getElementById("acessZero");
const two = document.getElementById("accesOne");

one.addEventListener("click",sources1);

function sources1(){
one.classList.toggle("active");
two.classList.toggle("hide");
}




const onelast = document.getElementById("lastoption");
const twolast = document.getElementById("lastoptions-1");

onelast.addEventListener("click",sources2);

function sources2(){
onelast.classList.toggle("active");
twolast.classList.toggle("hide");
}