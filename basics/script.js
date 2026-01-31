const changeBtn = document.querySelector("button");
const box = document.querySelector(".box");

changeBtn.addEventListener("click",()=>{
  let c1 = Math.floor(Math.random()*256)
  let c2 = Math.floor(Math.random()*256)
  let c3 = Math.floor(Math.random()*256)
  box.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
})