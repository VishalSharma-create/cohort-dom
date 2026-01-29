const con = document.querySelector("#container")
const likeBtn = document.querySelector("i")


con.addEventListener("dblclick",()=>{
  likeBtn.style.transform = "translate(-50%,-50%) scale(1)";
  likeBtn.style.opacity = "0.8";
  setTimeout(()=>{
    likeBtn.style.opacity = 0;
  },1000)
  setTimeout(()=>{
    likeBtn.style.transform = "translate(-50%,-50%) scale(0)";
  },2000)
})