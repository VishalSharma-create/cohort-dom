const display = document.querySelector(".counter-display");
const incBtn = document.querySelector("#inc-btn");
const descBtn = document.querySelector("#desc-btn")
const resetBtn = document.querySelector("#reset-btn")
let  counter = 0;

incBtn.addEventListener('click',()=>{
  display.innerHTML = ++counter;
})

descBtn.addEventListener('click',()=>{
  display.innerHTML = --counter;
})

resetBtn.addEventListener('click',()=>{
  display.innerHTML = "00::00::00";
  counter = 0;
})