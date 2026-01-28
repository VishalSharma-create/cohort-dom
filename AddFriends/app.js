const addFriend = document.getElementById('btn-card')
const currStatus = document.querySelector("h5")
let isFriend = false;
addFriend.addEventListener("click",()=>{
  if(!isFriend){
    currStatus.innerHTML="Friends"
    currStatus.style.color = "green";
    addFriend.innerHTML = "Remove"
    isFriend = true 
  }else{
    currStatus.innerHTML = "Stranger";
    currStatus.style.color = "palevioletred";
    addFriend.innerHTML = "Add Friend";
    isFriend = false;
  }
})

