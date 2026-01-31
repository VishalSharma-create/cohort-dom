const arr = [
  {
    team: "CSK",
    fullName: "Chennai Super Kings",
    primary: "#FFFF00", // Yellow
    secondary: "#0000FF", // Blue
    totalTrophies: 5,
    captain: "Ruturaj Gaikwad",
  },
  {
    team: "MI",
    fullName: "Mumbai Indians",
    primary: "#004BA0", // Blue
    secondary: "#D1AB3E", // Gold
    totalTrophies: 5,
    captain: "Hardik Pandya",
  },
  {
    team: "RCB",
    fullName: "Royal Challengers Bengaluru",
    primary: "#EC1C24", // Red
    secondary: "#000000", // Black
    totalTrophies: 1, // Won in 2025
    captain: "Rajat Patidar",
  },
  {
    team: "KKR",
    fullName: "Kolkata Knight Riders",
    primary: "#3A225D", // Purple
    secondary: "#B3A123", // Gold
    totalTrophies: 3,
    captain: "Ajinkya Rahane",
  },
  {
    team: "GT",
    fullName: "Gujarat Titans",
    primary: "#1B2133", // Dark Blue
    secondary: "#E1B022", // Gold
    totalTrophies: 1,
    captain: "Shubman Gill",
  },
  {
    team: "SRH",
    fullName: "Sunrisers Hyderabad",
    primary: "#FF822A", // Orange
    secondary: "#000000", // Black
    totalTrophies: 1,
    captain: "Pat Cummins",
  },
  {
    team: "RR",
    fullName: "Rajasthan Royals",
    primary: "#EA1A85", // Pink
    secondary: "#004BA0", // Blue
    totalTrophies: 1,
    captain: "Sanju Samson",
  },
  {
    team: "LSG",
    fullName: "Lucknow Super Giants",
    primary: "#0057E2", // Aqua Blue
    secondary: "#FF4500", // Orange
    totalTrophies: 0,
    captain: "Rishabh Pant",
  },
  {
    team: "DC",
    fullName: "Delhi Capitals",
    primary: "#00008B", // Blue
    secondary: "#FF0000", // Red
    totalTrophies: 0,
    captain: "Axar Patel",
  },
  {
    team: "PBKS",
    fullName: "Punjab Kings",
    primary: "#ED1B24", // Red
    secondary: "#D1AB3E", // Gold
    totalTrophies: 0,
    captain: "Shreyas Iyer",
  },
];
const displayS = document.querySelector(".team_display") 
const sName = document.querySelector("#short_name")
const fName = document.querySelector("#full_name")
const trophiesDisplay = document.querySelector("#trophies")
const captainDisplay = document.querySelector("p")
const mainDisplay = document.querySelector("main")

const guessBtn = document.querySelector("button")

guessBtn.addEventListener("click",()=>{
  const winner = arr[Math.floor(Math.random()*arr.length)];

  
  sName.innerHTML = `${winner.team}`;
  fName.innerHTML = `${winner.fullName}`;
  trophiesDisplay.innerHTML = `Total Wins : ${winner.totalTrophies}`;
  captainDisplay.innerHTML = `Cap : ${winner.captain}`;
  displayS.style.backgroundColor = `${winner.secondary}`
  mainDisplay.style.backgroundColor = `${winner.primary}`

})