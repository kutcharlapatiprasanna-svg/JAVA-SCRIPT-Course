const scrollContainer = document.querySelector(".small-container");
let initialElement = 1;

function addElements() {
    for (let i = 1; i <= 10; i++) {
        const list = document.createElement("li");
        list.innerText = `Item ${initialElement++}`
        scrollContainer.appendChild(list);
    }
}

scrollContainer.addEventListener("scroll", () => {
   const totalScrollbleheight = scrollContainer.scrollHeight;
   const visibleHeight = scrollContainer.clientHeight;
   const scrollbleheight = scrollContainer.scrollTop;
   const remaingheighttoBescrolled = totalScrollbleheight-visibleHeight-scrollbleheight;
  /*  console.log({
    totalScrollbleheight,
    visibleHeight,
    scrollbleheight
   }); */
   console.log(remaingheighttoBescrolled);
   if(remaingheighttoBescrolled <= 4){
    addElements();
   }
});

addElements();