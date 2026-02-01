const main = document.querySelector("main")
const button = document.querySelector("button")
var arr = [
  "Hey! I am Sarthak",
  "Sheryians is Best.",
  "Anubhav is handsome",
  "harsh bhaiya is great.",
  "JS is Love",
  "Keep practicing guys...",
];

button.addEventListener("click",()=>{
  // get random  quote
  const quote = arr[Math.floor(Math.random()*arr.length)]
  let h1 = document.createElement("h1");
  h1.textContent = `${quote}`;
  h1.style.position = "absolute"
  // console.log(h1);
  // generate random positions
  let x = Math.floor(Math.random()*80)
  let y = Math.floor(Math.random()*80)
  let rot = Math.floor(Math.random()*180)
  let scale = Math.floor(Math.random()*3)
  console.log(x,y,rot,scale)

  h1.style.top = `${y}%`
  h1.style.left = `${x}%`
  h1.style.rotate = `${rot}deg`
  h1.style.transform = `scale(${scale})`
  main.appendChild(h1)
}
)