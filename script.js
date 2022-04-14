//Startup
let theme = "light";

// These two functions were from ATs
function getFollowers() {
  var user = "ISTILLMAKESTUFF";
  const parser = new window.DOMParser();
  setInterval(async() => {
    const urlToFetch = "https://scratch.mit.edu/users/" + user + "/followers?noCache=" + Math.random().toString();
    const followersPage = parser.parseFromString(await(await fetch(urlToFetch)).text(), 'text/html');
    const followerCount = followersPage.querySelector(".box-head h2").innerText.match(/\((.*)\)/)[1];
    document.getElementById("counter").innerText = "Followers: " + followerCount;
  }, 5000)
}

function getMessages() {
  fetch("https://api.scratch.mit.edu/users/ISTILLMAKESTUFF/messages/count")
  .then(res => res.json())
  .then(res => {
   document.getElementById("countermessage").innerText = "Message count: " + res.count;
})
}

/* Just experimenting!
document.getElementById("date").innerHTML("The date is " + Date()); */

function switchThemes() {
  theme = document.getElementsByTagName("body").className;
  if (theme == "light") {
    document.getElementsByTagName("body").className = dark;
    document.getElementById("themebutton").innerText = "Light";
  } else if (theme == "dark") {
    document.getElementsByTagName("body").className = "light";
    document.getElementById("themebutton").innerHTML = "Dark";
  }
}
