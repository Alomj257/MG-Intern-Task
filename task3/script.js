const colors = document.querySelector(".color");
colors.addEventListener("click", () => {
  if (colors.classList.contains("glow")) colors.classList.toggle("glow");
  else {
    removecolor();
    colors.classList.toggle("glow");
  }
});

const colors1 = document.querySelector(".color1");
colors1.addEventListener("click", () => {
  if (colors1.classList.contains("glow")) colors1.classList.toggle("glow");
  else {
    removecolor();
    colors1.classList.toggle("glow");
  }
});

const colors2 = document.querySelector(".color2");
colors2.addEventListener("click", () => {
  if (colors2.classList.contains("glow")) colors2.classList.toggle("glow");
  else {
    removecolor();
    colors2.classList.toggle("glow");
  }
});

const colors3 = document.querySelector(".color3");
colors3.addEventListener("click", () => {
  if (colors3.classList.contains("glow")) colors3.classList.toggle("glow");
  else {
    removecolor();
    colors3.classList.toggle("glow");
  }
});

const colors4 = document.querySelector(".color4");
colors4.addEventListener("click", () => {
  if (colors4.classList.contains("glow")) colors4.classList.toggle("glow");
  else {
    removecolor();
    colors4.classList.toggle("glow");
  }
});

function removecolor() {
  colors.classList.remove("glow");
  colors1.classList.remove("glow");
  colors2.classList.remove("glow");
  colors3.classList.remove("glow");
  colors4.classList.remove("glow");
}

const sizeButtons = document.querySelector(".size");
sizeButtons.addEventListener("click", () => {
  if (sizeButtons.classList.contains("glow"))
    sizeButtons.classList.toggle("glow");
  else {
    removesize();
    sizeButtons.classList.toggle("glow");
  }
});

const sizeButtons1 = document.querySelector(".size1");
sizeButtons1.addEventListener("click", () => {
    if (sizeButtons1.classList.contains("glow"))
        sizeButtons1.classList.toggle("glow");
      else {
        removesize();
        sizeButtons1.classList.toggle("glow");
      }
});

function removesize() {
  sizeButtons.classList.remove("glow");
  sizeButtons1.classList.remove("glow");
}


// increment decrement button js

const minus=document.querySelector(".minus");
const plus=document.querySelector(".plus");
const number=document.querySelector(".number");

let a=1;

plus.addEventListener("click",()=>{
    a++;
    if(a<10) a="0"+a;
    number.innerHTML=a;
});
minus.addEventListener("click",()=>{
    if(a<=0){
        number.innerHTML="00";
        return;
    }
    a--;
    if(a<10) a="0"+a;
    number.innerHTML=a;
});
