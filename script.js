//Startup
let theme = "light";
function get(query) {return document.querySelector(query)}; // Taken from lopste/drawing-station, check it out!
// These two functions were from ATs
function getFollowers() {
  var user = "ISTILLMAKESTUFF";
  const parser = new window.DOMParser();
  setInterval(async() => {
    const urlToFetch = "https://scratch.mit.edu/users/" + user + "/followers?noCache=" + Math.random().toString();
    const followersPage = parser.parseFromString(await(await fetch(urlToFetch)).text(), 'text/html');
    const followerCount = followersPage.querySelector(".box-head h2").innerText.match(/\((.*)\)/)[1];
    get("counter").innerText = "Followers: " + followerCount;
  }, 5000)
}

function getMessages() {
  fetch("https://api.scratch.mit.edu/users/ISTILLMAKESTUFF/messages/count")
  .then(res => res.json())
  .then(res => {
   get("countermessage").innerText = "Message count: " + res.count;
})
}

/* Just experimenting!
document.getElementById("date").innerHTML("The date is " + Date()); */

function switchThemes() {
  theme = get("body").className;
  if (theme == "light") {
    get("body").className = dark;
    get("themebutton").innerText = "Light";
  } else if (theme == "dark") {
    get("body").className = "light";
    get("themebutton").innerText = "Dark";
  }
}
