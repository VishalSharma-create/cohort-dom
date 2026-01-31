var arr = [
  {
    team: "CSK",
    primary: "yellow",
    secondary: "blue",
  },
  {
    team: "RCB",
    primary: "red",
    secondary: "black",
  },
  {
    team: "MI",
    primary: "blue",
    secondary: "gold",
  },
  {
    team: "KKR",
    primary: "purple",
    secondary: "gold",
  },
  {
    team: "SRH",
    primary: "orange",
    secondary: "black",
  },
  {
    team: "PBKS",
    primary: "crimson",
    secondary: "silver",
  },
];
const h1 = document.querySelector("h1");
const changeBtn = document.querySelector("button");
const main = document.querySelector("main")

changeBtn.addEventListener("click",()=>{
  const teams = arr[Math.floor(Math.random()*arr.length)]
  // console.log(teams.team);
  h1.innerHTML = teams.team;
  h1.style.backgroundColor = `${teams.secondary}`;
  main.style.backgroundColor = `${teams.primary}`
  
})